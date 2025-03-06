import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Talent-Z",
  description: "Learn about how we collect, use, and protect your personal information",
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>Data Collection and Usage</h2>
        <p>
          At Talent-Z, we collect and process personal information to provide our talent acquisition services. 
          This information includes but is not limited to names, contact details, professional experience, 
          and portfolio materials.
        </p>

        <h2>Data Sources</h2>
        <p>
          We obtain talent information from various sources, including:
        </p>
        <ul>
          <li>Direct submissions through our platform</li>
          <li>Professional data brokers and APIs</li>
          <li>Public databases and industry directories</li>
          <li>Partner agencies and casting services</li>
        </ul>

        <h2>Data Processing</h2>
        <p>
          Your information is processed for:
        </p>
        <ul>
          <li>Matching talent with casting opportunities</li>
          <li>Providing services to casting directors and producers</li>
          <li>Platform functionality and user experience improvement</li>
          <li>Communication about opportunities and services</li>
        </ul>

        <h2>Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to ensure the security of your personal data. 
          This includes encryption, access controls, and regular security assessments.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access your personal data</li>
          <li>Request corrections to your data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Data portability</li>
        </ul>

        <h2>Data Removal Requests</h2>
        <p>
          If you wish to have your information removed from our database, you can submit a request through our 
          <a href="/contact" className="text-primary hover:underline"> contact form</a>. 
          Please include &quot;Data Removal Request&quot; in the subject line. We will process your request within 30 days.
        </p>

        <h2>Contact Us</h2>
        <p>
          For any privacy-related questions or concerns, please contact us through our 
          <a href="/contact" className="text-primary hover:underline"> contact form</a>.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
} 