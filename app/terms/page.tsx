import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - Talent-Z",
  description: "Terms and conditions for using the Talent-Z platform",
}

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Talent-Z, you agree to be bound by these Terms & Conditions. 
          If you disagree with any part of these terms, you may not access our services.
        </p>

        <h2>2. User Registration</h2>
        <p>
          To use certain features of our platform, you must register for an account. You agree to:
        </p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Promptly update any changes to your information</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>

        <h2>3. Subscription Services</h2>
        <p>
          Our platform offers subscription-based services for both actors and producers:
        </p>
        <ul>
          <li>Subscriptions are billed according to the plan selected</li>
          <li>Automatic renewals unless cancelled in advance</li>
          <li>No refunds for partial subscription periods</li>
          <li>Features may vary based on subscription type</li>
        </ul>

        <h2>4. Content and Conduct</h2>
        <p>
          Users must ensure that all content uploaded to our platform:
        </p>
        <ul>
          <li>Is accurate and not misleading</li>
          <li>Does not infringe on any intellectual property rights</li>
          <li>Complies with all applicable laws and regulations</li>
          <li>Is not offensive, harmful, or inappropriate</li>
        </ul>

        <h2>5. Talent Data</h2>
        <p>
          We source talent information from various channels, including data brokers and public APIs. Users acknowledge that:
        </p>
        <ul>
          <li>Information may be collected from third-party sources</li>
          <li>Data accuracy is not guaranteed</li>
          <li>Removal requests will be honored through our contact form</li>
          <li>Processing times may vary for data modifications</li>
        </ul>

        <h2>6. Platform Usage</h2>
        <p>
          Users agree not to:
        </p>
        <ul>
          <li>Use the platform for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access</li>
          <li>Interfere with platform functionality</li>
          <li>Share access credentials with third parties</li>
        </ul>

        <h2>7. Intellectual Property</h2>
        <p>
          All content and materials available on Talent-Z, unless otherwise stated, are the property of 
          Talent-Z and are protected by applicable intellectual property laws.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          Talent-Z shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
          resulting from your use or inability to use the service.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Users will be notified of significant changes.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about these Terms & Conditions, please contact us through our 
          <a href="/contact" className="text-primary hover:underline"> contact form</a>.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
} 