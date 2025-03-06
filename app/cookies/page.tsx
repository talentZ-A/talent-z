import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - Talent-Z",
  description: "Learn about how we use cookies and similar technologies",
}

export default function CookiesPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit our website. 
          They help us provide you with a better experience by remembering your preferences, 
          analyzing site usage, and assisting with our marketing efforts.
        </p>

        <h2>Types of Cookies We Use</h2>
        
        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable basic 
          functions like page navigation and access to secure areas of the website. The website 
          cannot function properly without these cookies.
        </p>
        <ul>
          <li>Authentication cookies</li>
          <li>Security cookies</li>
          <li>Session management</li>
        </ul>

        <h3>Functional Cookies</h3>
        <p>
          These cookies enable us to provide enhanced functionality and personalization. They may be 
          set by us or by third-party providers whose services we have added to our pages.
        </p>
        <ul>
          <li>Language preferences</li>
          <li>User interface customization</li>
          <li>Form auto-fill data</li>
        </ul>

        <h3>Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our website by collecting 
          and reporting information anonymously.
        </p>
        <ul>
          <li>Page view statistics</li>
          <li>User journey tracking</li>
          <li>Performance monitoring</li>
        </ul>

        <h3>Marketing Cookies</h3>
        <p>
          These cookies are used to track visitors across websites. They are set by our 
          advertising partners and help us provide you with relevant advertisements.
        </p>
        <ul>
          <li>Behavioral advertising</li>
          <li>Ad performance tracking</li>
          <li>Campaign effectiveness</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are 
          already on your device and you can set most browsers to prevent them from being placed.
        </p>

        <h3>Browser Settings</h3>
        <p>
          Most web browsers allow some control of most cookies through the browser settings. To find 
          out more about cookies, including how to see what cookies have been set, visit 
          <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> aboutcookies.org</a>.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          We use services from various third-party providers to enhance our platform. These 
          providers may set their own cookies for:
        </p>
        <ul>
          <li>Social media integration</li>
          <li>Payment processing</li>
          <li>Analytics services</li>
          <li>Advertising networks</li>
        </ul>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page 
          with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us through our 
          <a href="/contact" className="text-primary hover:underline"> contact form</a>.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
} 