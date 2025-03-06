import { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - Talent-Z",
  description: "Get in touch with us for any questions or support",
}

export default function ContactPage() {
  return (
    <div className="container max-w-2xl py-10">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground">
          Have a question or need support? We&apos;re here to help.
        </p>
      </div>
      <div className="mx-auto">
        <ContactForm />
      </div>
    </div>
  )
} 