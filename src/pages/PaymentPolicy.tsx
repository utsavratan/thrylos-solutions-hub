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

const PaymentPolicy = () => {
  const navigate = useNavigate();

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

        {/* Title */}
        <h1
          className="text-5xl font-extrabold tracking-tight mb-3
          bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400
          bg-clip-text text-transparent"
        >
          Thrylos Payment Policy
        </h1>

        <p className="text-sm text-zinc-400 mb-12">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-10">

          <Section number="1." title="Accepted Payment Gateways & Methods">
            <ul className="list-disc pl-6 space-y-2">
              <li>Instant UPI Transfers (Google Pay, PhonePe, Paytm, BHIM)</li>
              <li>Secure Credit Card Payments (Visa, Mastercard, RuPay)</li>
              <li>Debit Cards (All major Indian banks supported)</li>
              <li>Net Banking for direct account transfers</li>
              <li>Verified Digital Wallets & Prepaid Instruments</li>
            </ul>
          </Section>

          <Section number="2." title="Secure Payment Processing">
            <p>
              To ensure maximum security, all transactions on Thrylos are processed 
              through industry-leading, PCI-DSS compliant payment gateways. We do not 
              store sensitive data like full card numbers or UPI PINs. Every 
              esports transaction is end-to-end encrypted using standard SSL protocols.
            </p>
          </Section>

          <Section number="3." title="Transaction Confirmation & Receipts">
            <ul className="list-disc pl-6 space-y-2">
              <li>Instant on-screen success notification upon payment completion</li>
              <li>Automated digital receipt sent to your registered email address</li>
              <li>Unique Transaction ID generated for tracking and support</li>
              <li>Immediate confirmation of tournament slot or service activation</li>
            </ul>
          </Section>

          <Section number="4." title="Resolving Payment Failures">
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure stable internet connectivity and sufficient account balance</li>
              <li>Double-check banking limits and entered payment credentials</li>
              <li>Attempt the transaction again using an alternative payment mode</li>
              <li>Contact your bank or wallet provider if the issue persists</li>
              <li>
                Reach out to our support team at{' '}
                <a
                  href="mailto:thrylosindia@gmail.com"
                  className="text-purple-400 underline"
                >
                  thrylosindia@gmail.com
                </a>
              </li>
            </ul>
          </Section>

          <Section number="5." title="Esports Tournament Entry Fees">
            <ul className="list-disc pl-6 space-y-2">
              <li>Entry fees must be cleared prior to the registration deadline</li>
              <li>Fees are generally non-refundable unless a tournament is cancelled</li>
              <li>Payments cover entry only and do not include in-game microtransactions</li>
              <li>Fee structures may vary based on the specific tournament prize pool</li>
            </ul>
          </Section>

          <Section number="6." title="Social Media & Digital Service Pricing">
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom pricing models based on service scope and volume</li>
              <li>100% advance payment required to initiate digital services</li>
              <li>Non-refundable policy applies once service delivery has commenced</li>
              <li>Corporate and bulk orders may be eligible for volume discounts</li>
            </ul>
          </Section>

          <Section number="7." title="Currency Support (INR) & Taxation">
            <p>
              Thrylos operates exclusively in Indian Rupees (INR). All listed prices 
              are inclusive of applicable taxes, such as GST, unless explicitly mentioned 
              otherwise. For international cards, your issuing bank may levy additional 
              currency conversion charges.
            </p>
          </Section>

          <Section number="8." title="Prize Pool Disbursement & Payouts">
            <ul className="list-disc pl-6 space-y-2">
              <li>Winnings are transferred via direct Bank Transfer or UPI only</li>
              <li>Players must provide valid, verified payout details to receive funds</li>
              <li>Standard processing timeline is 7–14 business days post-tournament</li>
              <li>TDS (Tax Deducted at Source) applies as per Indian Income Tax regulations</li>
              <li>A payout confirmation email will be sent once funds are released</li>
            </ul>
          </Section>

          <Section number="9." title="Dispute Resolution for Payments">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Disputes must be raised within 7 days of the transaction date</li>
              <li>Submit the unique Transaction ID and payment proof for verification</li>
              <li>Allow our team 5–7 business days to investigate with the gateway</li>
              <li>Final resolution and closure provided within 10 business days</li>
            </ol>
          </Section>

          <Section number="10." title="Data Security & Fraud Protection">
            <ul className="list-disc pl-6 space-y-2">
              <li>Advanced 256-bit SSL encryption for data transit</li>
              <li>Integration with fully PCI-DSS compliant payment processors</li>
              <li>Real-time fraud detection algorithms to prevent unauthorized use</li>
              <li>Routine security audits to maintain platform integrity</li>
              <li>Strictly restricted internal access to payment data logs</li>
            </ul>
          </Section>

          <Section number="11." title="Updates to Payment Terms">
            <p>
              Thrylos reserves the right to amend payment methods, fee structures, 
              or these terms at any time with prior notification. Any transactions 
              successfully confirmed before such changes will be honored under the 
              original terms.
            </p>
          </Section>

          <Section number="12." title="Contact Support for Billing Issues">
            <p>
              <strong>Support Email:</strong>{' '}
              <a
                href="mailto:thrylosindia@gmail.com"
                className="text-purple-400 underline"
              >
                thrylosindia@gmail.com
              </a>
              <br />
              <strong>Subject Line:</strong> Billing Inquiry – [Your Transaction ID]
              <br />
              <strong>Expected Response:</strong> 24–48 business hours
            </p>
          </Section>


          <Section number="13." title="Skill-Based Gaming & Payment Nature">
            <p>
              Payments made on Thrylos are strictly for participation in skill-based 
              esports competitions or for purchasing legitimate digital services. 
              We operate in full compliance with Indian laws and do not facilitate 
              gambling, betting, or luck-based wagering activities.
            </p>
          </Section>

          <Section number="14." title="User Responsibility & Legal Compliance">
            <p>
              Users are solely responsible for ensuring their payments and participation 
              adhere to the local laws of their respective state or jurisdiction. 
              Thrylos assumes no liability for user violations of regional gaming regulations.
            </p>
          </Section>

          <Section number="15." title="Chargeback Policy & Anti-Fraud">
            <p>
              We maintain a zero-tolerance policy towards fraudulent chargebacks. 
              Any attempt to misuse payment systems or initiate false claims will 
              result in immediate account suspension, forfeiture of any wallet balance, 
              and potential legal action.
            </p>
          </Section>

          <Section number="16." title="Limitation of Liability">
            <p>
              Thrylos is not liable for financial losses or delays resulting from 
              third-party banking outages, payment gateway downtime, or technical 
              disruptions beyond our direct control.
            </p>
          </Section>

          <Section number="17." title="Governing Law & Jurisdiction">
            <p>
              This Payment Policy constitutes a binding agreement governed by the 
              laws of India. Any disputes arising from payments or refunds shall 
              be subject to the exclusive jurisdiction of courts in India.
            </p>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;