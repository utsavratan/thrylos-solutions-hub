import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-pm-email",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const pmEmail = req.headers.get("x-pm-email");
    if (!pmEmail) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify PM exists
    const { data: pm, error: pmError } = await supabase
      .from("project_managers")
      .select("id, name, email")
      .eq("email", pmEmail)
      .maybeSingle();

    if (pmError || !pm) {
      return new Response(JSON.stringify({ error: "PM not found" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { action, data, id } = await req.json();

    switch (action) {
      case "get_projects": {
        const { data: projects, error } = await supabase
          .from("service_requests")
          .select("*")
          .eq("assigned_pm_id", pm.id)
          .order("created_at", { ascending: false });

        if (error) throw error;

        // Fetch profiles for user info
        const userIds = [...new Set(projects?.map(p => p.user_id) || [])];
        let profiles: Record<string, { full_name: string | null; email: string | null }> = {};
        if (userIds.length > 0) {
          const { data: profileData } = await supabase
            .from("profiles")
            .select("user_id, full_name, email")
            .in("user_id", userIds);
          if (profileData) {
            profiles = Object.fromEntries(profileData.map(p => [p.user_id, p]));
          }
        }

        return new Response(JSON.stringify({ projects, profiles }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      case "update_status": {
        // Verify this project is assigned to this PM
        const { data: project } = await supabase
          .from("service_requests")
          .select("assigned_pm_id")
          .eq("id", id)
          .single();

        if (!project || project.assigned_pm_id !== pm.id) {
          return new Response(JSON.stringify({ error: "Not authorized" }), {
            status: 403,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const { error } = await supabase
          .from("service_requests")
          .update({ status: data.status })
          .eq("id", id);

        if (error) throw error;
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      case "add_note": {
        const { data: project } = await supabase
          .from("service_requests")
          .select("assigned_pm_id, notes")
          .eq("id", id)
          .single();

        if (!project || project.assigned_pm_id !== pm.id) {
          return new Response(JSON.stringify({ error: "Not authorized" }), {
            status: 403,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const existingNotes = project.notes || "";
        const timestamp = new Date().toLocaleString();
        const updatedNotes = existingNotes
          ? `${existingNotes}\n\n[${timestamp}] ${data.note}`
          : `[${timestamp}] ${data.note}`;

        const { error } = await supabase
          .from("service_requests")
          .update({ notes: updatedNotes })
          .eq("id", id);

        if (error) throw error;
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      default:
        throw new Error(`Unknown action: ${action}`);
    }
  } catch (error: unknown) {
    console.error("PM API error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
