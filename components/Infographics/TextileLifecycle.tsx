"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Factory, Store, User, Recycle, Trash2, PackageSearch, Container, X } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

type LifecycleStep = {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  image: string
  isRed?: boolean
}

const lifecycleSteps: LifecycleStep[] = [
  {
    id: "production",
    title: "Продукция",
    icon: <Factory className="h-6 w-6" />,
    description:
      "Производството на дрехи е сложен процес, който включва множество етапи от добиването на суровини до крайния продукт. Този процес често има значително въздействие върху околната среда.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/carousel/production.png",
  },
  {
    id: "sales",
    title: "Продажби",
    icon: <Store className="h-6 w-6" />,
    description:
      "Търговията с дрехи е важен икономически сектор, но бързата мода води до прекомерно потребление и генериране на текстилни отпадъци.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/carousel/selling.jpg",
  },
  {
    id: "use",
    title: "Употреба",
    icon: <User className="h-6 w-6" />,
    description:
      "По време на употребата дрехите се перат и поддържат, което консумира вода и енергия. Правилната грижа може да удължи живота им.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/carousel/wear.jpg",
  },
  {
    id: "container",
    title: "Оставяне в контейнер",
    icon: <Container className="h-6 w-6" />,
    description:
      "Специализираните контейнери за текстил позволяват правилното събиране и сортиране на ненужните дрехи за рециклиране.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/carousel/container-crop.jpg",
  },
  {
    id: "sorting",
    title: "Сортиране",
    icon: <PackageSearch className="h-6 w-6" />,
    description:
      "Сортирането определя кои дрехи могат да бъдат повторно използвани, рециклирани или преработени в нови продукти.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/carousel/sorting.jpg",
  },
  {
    id: "recycling",
    title: "Рециклиране",
    icon: <Recycle className="h-6 w-6" />,
    description:
      "Рециклирането превръща стари дрехи в нови материали и продукти, спестявайки ресурси и намалявайки отпадъците.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/carousel/recycling-crop.png",
  },
  {
    id: "trash",
    title: "Изхвърляне на боклука",
    icon: <Trash2 className="h-6 w-6" />,
    description:
      "Изхвърлянето на текстил в общия боклук води до замърсяване на околната среда и пропуснати възможности за рециклиране.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/carousel/trash.jpg",
    isRed: true,
  },
]

export function TextileLifecycle() {
  const [activeStep, setActiveStep] = useState<string>("production")
  const [api, setApi] = useState<CarouselApi>()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Find the index of the active step
  const activeStepIndex = lifecycleSteps.findIndex((step) => step.id === activeStep)

  // Calculate positions for the circular formation
  const calculatePosition = (index: number, total: number, radius: number) => {
    // We only want to position 6 items in a circle, the 7th (trash) will be positioned separately
    if (index === 6) return { x: 0, y: 0 }

    const angle = ((2 * Math.PI) / 6) * index - Math.PI / 2
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  }

  // Set up auto-rotation
  useEffect(() => {
    if (!api) return

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up new interval
    intervalRef.current = setInterval(() => {
      api.scrollNext()
    }, 7000) // 7 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [api])

  // Update active step when carousel changes
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const currentIndex = api.selectedScrollSnap()
      setActiveStep(lifecycleSteps[currentIndex].id)
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Sync carousel with active step when clicking on circles
  useEffect(() => {
    if (api) {
      api.scrollTo(activeStepIndex)
    }
  }, [api, activeStepIndex])

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Жизнения цикъл на дрехите и влиянието му върху околната среда
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center ">
          {/* Lifecycle Circle */}
          <div className="relative w-[80%] lg:w-1/2 aspect-square max-w-[600px] lg:scale-100 scale-[0.8] ">
            <div className="absolute inset-10">
              {lifecycleSteps.map((step, index) => {
                const pos = calculatePosition(index, 6, 130) // Increased radius for larger circle
                const isTrash = step.id === "trash"

                // Position the trash icon below the circle
                const trashPosition = isTrash ? { x: 0, y: 0 } : pos // Adjusted y for trash position

                return (
                  <motion.div
                    key={step.id}
                    className={cn("absolute transform -translate-x-1/2 -translate-y-1/2", "left-[20%] top-[33%]")}
                    style={{
                      x: `${trashPosition.x}%`,
                      y: `${trashPosition.y}%`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => setActiveStep(step.id)}
                      className={cn(
                        "relative rounded-full transition-colors duration-200",
                        "flex flex-col items-center justify-center",
                        "w-28 h-28 md:w-36 md:h-36",
                        "border-2",
                        activeStep === step.id
                          ? step.id === "trash"
                            ? "ring-4  ring-red-500"
                            : "ring-4  ring-green-500"
                          : "",
                        step.isRed
                          ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900"
                          : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900",
                      )}
                    >
                      <div
                        className={cn(
                          "flex flex-col items-center justify-center ",
                          step.isRed ? "text-red-500 dark:text-red-400" : "text-green-500 dark:text-green-400",
                        )}
                      >
                        <div className="scale-[2.2]">{step.icon}</div>
                      </div>
                      <div className="text-xs lg:text-base translate-y-5 font-medium text-center">{step.title}</div>
                      {isTrash && (
                        <>
                          <X className="absolute text-red-500 h-full w-full p-4 opacity-20" />
                          <motion.div
                            className="absolute inset-0 border-2 border-red-500 rounded-full"
                            animate={{ rotate: 45 }}
                          />
                        </>
                      )}
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Carousel using shadcn/ui components */}
          <div className="w-full lg:w-[55%] lg:mt-0 mt-8">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                loop: true,
                align: "start",
              }}
            >
              <CarouselContent>
                {lifecycleSteps.map((step) => (
                  <CarouselItem key={step.id}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative aspect-video mx-[1.5rem]">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="p-6">
                          <h3
                            className={cn(
                              "text-xl font-bold mb-2 flex items-center gap-2",
                              step.isRed ? "text-red-500 dark:text-red-400" : "text-green-500 dark:text-green-400",
                            )}
                          >
                            {step.icon}
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}


