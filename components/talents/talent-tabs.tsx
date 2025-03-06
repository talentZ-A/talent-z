"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Talent } from "@/types/types"

export interface TalentTabsProps {
  talents?: Talent[]
  talent?: Talent
  mode?: "full" | "tabs-only" | "content-only"
}

export function TalentTabs({ talents, talent, mode = "full" }: TalentTabsProps) {
  const [activeTab, setActiveTab] = useState("physical")

  // If we have a single talent, show detailed tabs
  if (talent) {
    const tabsList = (
      <TabsList className="h-auto w-full mb-6">
        <TabsTrigger value="physical" className="py-2 px-4">
          <span className="flex items-center gap-1">
            <span>📏</span> Physical
          </span>
        </TabsTrigger>
        <TabsTrigger value="features" className="py-2 px-4">
          <span className="flex items-center gap-1">
            <span>✨</span> Features
          </span>
        </TabsTrigger>
        <TabsTrigger value="skills" className="py-2 px-4">
          <span className="flex items-center gap-1">
            <span>🎭</span> Skills
          </span>
        </TabsTrigger>
        <TabsTrigger value="health" className="py-2 px-4">
          <span className="flex items-center gap-1">
            <span>💪</span> Health
          </span>
        </TabsTrigger>
        <TabsTrigger value="contact" className="py-2 px-4">
          <span className="flex items-center gap-1">
            <span>📱</span> Contact
          </span>
        </TabsTrigger>
      </TabsList>
    )

    const tabsContent = (
      <>
        <TabsContent value="physical" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Height & Weight</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Height:</span>
                  <span>{talent.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weight:</span>
                  <span>{talent.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Body Type:</span>
                  <span>{talent.bodyType}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Appearance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Eye Color:</span>
                  <span>{talent.eyeColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Hair Color:</span>
                  <span>{talent.hairColor}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Sizing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shoe Size:</span>
                  <span>{talent.shoeSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Clothing Size:</span>
                  <span>{talent.clothingSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Measurements:</span>
                  <span>{talent.measurements}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Distinctive Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Tattoos:</h4>
                <p>{talent.tattoos || "None"}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Piercings:</h4>
                <p>{talent.piercings || "None"}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Other Features:</h4>
                <p>{talent.otherFeatures || "None"}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {talent.languages.map((lang, index) => (
                    <Badge key={index} variant="secondary">{lang}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {talent.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {talent.sports.map((sport, index) => (
                    <Badge key={index}>{sport}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="health" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Medical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Medical Conditions:</span>
                  <span>{talent.medicalConditions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dietary Restrictions:</span>
                  <span>{talent.diet}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lifestyle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Smoking Habits:</span>
                  <span>{talent.smoking}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fitness Level:</span>
                  <span>{talent.fitnessLevel}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contact" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Social Media:</span>
                <span>{talent.socialMedia}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contact:</span>
                <span>{talent.contacts}</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </>
    )

    return (
      <Tabs defaultValue="physical" className="w-full">
        {tabsList}
        {tabsContent}
      </Tabs>
    )
  }

  // If we have multiple talents, show gender filter tabs
  if (talents) {
    const femaleTalents = talents.filter(t => t.gender.toLowerCase() === "female")
    const maleTalents = talents.filter(t => t.gender.toLowerCase() === "male")

    return (
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All ({talents.length})</TabsTrigger>
          <TabsTrigger value="female">Female ({femaleTalents.length})</TabsTrigger>
          <TabsTrigger value="male">Male ({maleTalents.length})</TabsTrigger>
        </TabsList>
      </Tabs>
    )
  }

  return null
}

