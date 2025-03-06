"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { User, Film, Users, Search, Calendar, Star, Award, Briefcase } from "lucide-react"

const features = {
  actors: [
    {
      icon: Star,
      title: "Showcase Your Talent",
      description: "Create a professional profile that highlights your skills, experience, and showreel."
    },
    {
      icon: Search,
      title: "Get Discovered",
      description: "Be visible to top producers and casting directors actively looking for talent."
    },
    {
      icon: Calendar,
      title: "Direct Opportunities",
      description: "Receive casting calls and audition invitations matched to your profile."
    },
    {
      icon: Users,
      title: "Industry Network",
      description: "Connect with other professionals and expand your industry network."
    }
  ],
  producers: [
    {
      icon: Film,
      title: "Find Perfect Talent",
      description: "Access our extensive database of verified actors with advanced search filters."
    },
    {
      icon: Briefcase,
      title: "Efficient Casting",
      description: "Streamline your casting process with our integrated management tools."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Work with pre-vetted talent with verified credentials and experience."
    },
    {
      icon: User,
      title: "Direct Communication",
      description: "Connect directly with talent and manage all communications in one place."
    }
  ]
}

export function ServicesSection() {
  return (
    <section className="container py-24 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Connecting Talent with Opportunity
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our platform bridges the gap between talented actors and visionary producers,
          making the casting process seamless and efficient.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">For Actors</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.actors.map((feature, index) => (
              <Card key={index} className="p-6 space-y-2">
                <feature.icon className="w-6 h-6 text-primary" />
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">For Producers</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.producers.map((feature, index) => (
              <Card key={index} className="p-6 space-y-2">
                <feature.icon className="w-6 h-6 text-primary" />
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 