"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "./login-form"
import { SignUpForm } from "./signup-form"

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")

  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "signup")} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login" className="mt-4">
        <LoginForm />
      </TabsContent>
      <TabsContent value="signup" className="mt-4">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  )
} 