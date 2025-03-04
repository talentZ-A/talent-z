"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WaterUsage } from "./water-usage"
// import { WaterUsage } from "./water-usage"

type EffectType = "water" | "pollution" | "emissions" | "waste"

interface EffectButton {
  type: EffectType
  title: string
  image: string
}

const effects: EffectButton[] = [
  {
    type: "water",
    title: "ИЗПОЛЗВАНЕ НА ВОДА",
    image: "/water-drop.webp"
  },
  {
    type: "pollution",
    title: "ЗАМЪРСЯВАНЕ НА ВОДА",
    image: "/polluted-water.webp"
  },
  {
    type: "emissions",
    title: "ЕМИСИИ НА ПАРНИКОВИ ГАЗОВЕ",
    image: "/emissions.webp"
  },
  {
    type: "waste",
    title: "ЗАМЪРСЯВАНЕ НА ДЕПА",
    image: "/waste.webp"
  }
]

export function TextileEffect() {
  const [selectedEffect, setSelectedEffect] = useState<EffectType>("water")

  return (
    <div className="min-h-screen  text-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Titles */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ТЕКСТИЛНАТА ИНДУСТРИЯ
          </h1>
          <h2 className="text-xl md:text-2xl text-[#4AE54A]">
            ВЛИЯНИЕТО ВЪРХУ ОКОЛНАТА СРЕДА
          </h2>
        </div>

        {/* Effect Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {effects.map((effect) => (
            <button
              key={effect.type}
              onClick={() => setSelectedEffect(effect.type)}
              className="flex flex-col items-center group"
            >
              <div
                className={cn(
                  "w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 transition-all duration-300",
                  selectedEffect === effect.type
                    ? "border-[#4AE54A] scale-105"
                    : "border-white/50 hover:border-white"
                )}
              >
                <img
                  src={effect.image || "/placeholder.svg"}
                  alt={effect.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={cn(
                "mt-4 text-center font-medium transition-colors duration-300",
                selectedEffect === effect.type
                  ? "text-[#4AE54A]"
                  : "text-white/80 group-hover:text-white"
              )}>
                {effect.title}
              </span>
            </button>
          ))}
        </div>

        {/* Effect Content */}
        <div className="relative">
          {selectedEffect === "water" && <WaterUsage />}
          {/* Add other effect components here */}
        </div>
      </div>
    </div>
  )
}
