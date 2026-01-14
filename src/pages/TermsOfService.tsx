import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-4">
    <h2 className="text-2xl font-bold text-white">
      <span className="text-purple-400 mr-2">{number}</span>
      {title}
    </h2>
    <div className="text-zinc-300 leading-relaxed space-y-3">
      {children}
    </div>
  </section>
);

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Terms of Service | Thrylos India";
    window.scrollTo(0, 0);

    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    const originalCanonical = link.href; 
    link.href = "https://thrylos.in/terms-of-service"; 

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service | Thrylos India",
      "description": "Thrylos India Terms of Service. Rules for service requests, project management, and platform use.",
      "url": "https://thrylos.in/terms-of-service",
      "publisher": {
        "@type": "Organization",
        "name": "Thrylos India"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      link.href = originalCanonical; 
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-10 text-zinc-300 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <h1 className="text-5xl font-extrabold tracking-tight mb-3
          bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400
          bg-clip-text text-transparent">
          Thrylos Terms of Service
        </h1>

        <p className="text-sm text-zinc-400 mb-12">
          Effective Date: {new Date().toLocaleDateString()} | Thrylos India
        </p>

        <div className="space-y-10">

          <Section number="1." title="Acceptance of Terms">
            <p>
              By accessing or using the <strong>Thrylos Services Platform</strong>, you agree to be bound by these Terms of Service, our Privacy Policy, and any additional guidelines provided by Thrylos. If you do not agree, you may not use the platform.
            </p>
          </Section>

          <Section number="2." title="Service Description">
            <p>Thrylos provides a digital platform that allows users to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit service or project requests</li>
              <li>Track project progress and updates</li>
              <li>Communicate with assigned teams</li>
              <li>Share files and feedback</li>
              <li>Receive completed deliverables</li>
            </ul>
            <p>Thrylos does <strong>not guarantee outcomes</strong>, results, or business performance.</p>
          </Section>

          {/* ADDED: Section 3 for Dashboard Use */}
          <Section number="3." title="Platform Dashboard Usage">
            <p>
              The Thrylos Dashboard is provided to help you manage and track the progress of your service requests. 
              Status indicators such as "Pending," "In Progress," and "Completed" are for informational purposes 
              and represent the current stage of the internal workflow.
            </p>
          </Section>

          <Section number="4." title="User Accounts">
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You are responsible for all activity under your account</li>
              <li>One user may not impersonate another</li>
            </ul>
          </Section>

          {/* ADDED: Section 5 for Form Submission Accuracy */}
          <Section number="5." title="Submission Accuracy & Requirements">
            <p>
              When creating a "New Service Request," you agree to provide accurate details regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project Title and detailed Description</li>
              <li>Valid Contact Email and Phone Number (+91 format)</li>
              <li>Budget Range and Expected Timelines</li>
            </ul>
            <p>Incorrect or false information may lead to the immediate cancellation of the request without notice.</p>
          </Section>

          <Section number="6." title="Service Requests & Project Scope">
            <ul className="list-disc pl-6 space-y-2">
              <li>Each request represents a defined scope of work</li>
              <li>Any changes beyond the agreed scope may require additional time or cost</li>
              <li>Thrylos reserves the right to reject unclear or inappropriate requests</li>
            </ul>
          </Section>

          <Section number="7." title="Communication & Feedback">
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients must provide timely feedback to avoid delays</li>
              <li>Delays caused by lack of response are not Thrylos’ responsibility</li>
              <li>Communication must remain professional and respectful</li>
            </ul>
          </Section>

          {/* ADDED: Section 8 for Electronic Communications */}
          <Section number="8." title="Electronic Communications">
            <p>
              By submitting a request, you consent to receive electronic communications from Thrylos via the 
              provided contact email and phone number regarding project updates, billing, and platform notifications.
            </p>
          </Section>

          <Section number="9." title="Timelines & Delivery">
            <ul className="list-disc pl-6 space-y-2">
              <li>Timelines are estimates, not guarantees</li>
              <li>Delays caused by third-party services, client dependencies, or force majeure are not liable to Thrylos</li>
              <li>Projects may be paused if required information is not provided</li>
            </ul>
          </Section>

          <Section number="10." title="Payments & Billing">
            <ul className="list-disc pl-6 space-y-2">
              <li>Fees are agreed upon before work begins</li>
              <li>Payments are non-refundable once work has started</li>
              <li>Invoices must be settled within the specified payment period</li>
              <li>Thrylos may suspend services for unpaid invoices</li>
            </ul>
          </Section>

          <Section number="11." title="Revisions & Approvals">
            <ul className="list-disc pl-6 space-y-2">
              <li>Revisions are limited to what is stated in the service agreement</li>
              <li>Excessive revisions may incur additional charges</li>
              <li>Silence or lack of response beyond a reasonable period may be treated as approval</li>
            </ul>
          </Section>

          <Section number="12." title="Intellectual Property">
            <ul className="list-disc pl-6 space-y-2">
              <li>Ownership transfers only after full payment</li>
              <li>Thrylos retains the right to showcase completed work for portfolio or marketing purposes unless explicitly restricted</li>
              <li>Clients must ensure they have rights to all content provided</li>
            </ul>
          </Section>

          <Section number="13." title="Prohibited Use">
            <p>Users may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit unlawful or harmful content</li>
              <li>Abuse staff or systems</li>
              <li>Attempt unauthorized access</li>
              <li>Use the platform for fraudulent purposes</li>
            </ul>
          </Section>

          <Section number="14." title="Account Suspension & Termination">
            <p>Thrylos reserves the right to suspend or terminate accounts for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violation of these Terms</li>
              <li>Abuse or misconduct</li>
              <li>Non-payment</li>
              <li>Security risks</li>
            </ul>
          </Section>

          <Section number="15." title="Confidentiality">
            <p>
              Both parties agree to keep confidential information private unless disclosure is required by law.
            </p>
          </Section>

          <Section number="16." title="Third-Party Services">
            <p>
              Thrylos may integrate third-party tools. Thrylos is not responsible for outages, failures, or policy changes of third-party services.
            </p>
          </Section>

          <Section number="17." title="Limitation of Liability">
            <p>Thrylos shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect or consequential damages</li>
              <li>Loss of profits or data</li>
              <li>Total liability is limited to the amount paid for the specific service.</li>
            </ul>
          </Section>

          <Section number="18." title="Indemnification">
            <p>
              You agree to indemnify and hold harmless Thrylos from claims arising from misuse of the platform or violation of these terms.
            </p>
          </Section>

          <Section number="19." title="Changes to Services or Terms">
            <p>
              Thrylos may update services or these Terms at any time. Continued use constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section number="20." title="Governing Law & Jurisdiction">
            <p>
              These Terms shall be governed by the laws of <strong>India</strong>, and disputes shall be subject to the jurisdiction of Indian courts.
            </p>
          </Section>

          <Section number="21." title="Contact Information">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@thrylos.in" className="text-purple-400">
                support@thrylos.in
              </a>
              <br />
              <strong>Website:</strong>{' '}
              <a href="https://tech.thrylos.in/" className="text-purple-400">
                https://tech.thrylos.in/
              </a>
            </p>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;