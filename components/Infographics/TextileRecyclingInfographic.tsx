"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { ArrowRight, Recycle, Shirt, Leaf, Droplets, Factory } from "lucide-react"

// Data for the charts
const environmentalImpactData = [
  { name: "Вода", saved: 2700, unit: "литра" },
  { name: "CO2", saved: 4.5, unit: "кг" },
  { name: "Енергия", saved: 65, unit: "kWh" },
  { name: "Химикали", saved: 0.3, unit: "кг" },
]

const textileWasteData = [
  { name: "Депо", value: 57, color: "#ef4444" },
  { name: "Изгаряне", value: 25, color: "#f97316" },
  { name: "Рециклиране", value: 13, color: "#22c55e" },
  { name: "Повторна употреба", value: 5, color: "#3b82f6" },
]

const yearlyRecyclingData = [
  { year: "2018", amount: 8 },
  { year: "2019", amount: 10 },
  { year: "2020", amount: 11 },
  { year: "2021", amount: 13 },
  { year: "2022", amount: 15 },
  { year: "2023", amount: 18 },
]

const recyclingProcessSteps = [
  {
    title: "Събиране",
    description: "Събиране на текстилни отпадъци от домакинства, бизнеси и организации",
    icon: <Shirt className="h-10 w-10 text-primary" />,
  },
  {
    title: "Сортиране",
    description: "Сортиране на текстила по вид, материал и състояние",
    icon: <Droplets className="h-10 w-10 text-primary" />,
  },
  {
    title: "Преработка",
    description: "Преработка на текстила в нови материали или продукти",
    icon: <Factory className="h-10 w-10 text-primary" />,
  },
  {
    title: "Нов живот",
    description: "Създаване на нови продукти от рециклирани материали",
    icon: <Recycle className="h-10 w-10 text-primary" />,
  },
  {
    title: "Екологична полза",
    description: "Намаляване на отпадъците и опазване на околната среда",
    icon: <Leaf className="h-10 w-10 text-primary" />,
  },
]

export function TextileRecyclingInfographic() {
  const [activeTab, setActiveTab] = useState("impact")

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Въздействието на текстилното рециклиране</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Рециклирането на текстил има огромно положително въздействие върху околната среда и обществото. Вижте как
            вашите действия могат да направят разлика.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="impact">Екологично въздействие</TabsTrigger>
            <TabsTrigger value="waste">Текстилни отпадъци</TabsTrigger>
            <TabsTrigger value="trends">Тенденции в рециклирането</TabsTrigger>
          </TabsList>

          <TabsContent value="impact" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Спестени ресурси при рециклиране на 1 кг текстил</CardTitle>
                  <CardDescription>
                    Рециклирането на текстил спестява значителни количества вода, енергия и намалява емисиите на CO2
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer config={{ saved: { color: "#22c55e", label: "Спестени ресурси" } }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={environmentalImpactData} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" width={80} />
                          <ChartTooltip
                            content={
                              <ChartTooltipContent
                                formatter={(value, name, entry) => {
                                  const payload = entry.payload
                                  return (
                                    <span>
                                      {payload.saved} {payload.unit}
                                    </span>
                                  )
                                }}
                              />
                            }
                          />
                          <Bar dataKey="saved" fill="#22c55e" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="waste" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Съдба на текстилните отпадъци в България</CardTitle>
                  <CardDescription>Разпределение на текстилните отпадъци по метод на обработка (%)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={textileWasteData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {textileWasteData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <ChartLegend
                      className="mt-4 justify-center"
                      items={textileWasteData.map((item) => ({
                        name: item.name,
                        color: item.color,
                      }))}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Тенденции в рециклирането на текстил</CardTitle>
                  <CardDescription>Процент на рециклиран текстил в България по години</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer config={{ amount: { color: "#3b82f6", label: "Процент рециклиран" } }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={yearlyRecyclingData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis tickFormatter={(value) => `${value}%`} />
                          <ChartTooltip
                            content={
                              <ChartTooltipContent
                                formatter={(value, name, entry) => {
                                  return <span>{entry.payload.amount}%</span>
                                }}
                              />
                            }
                          />
                          <Area type="monotone" dataKey="amount" stroke="#3b82f6" fill="#93c5fd" fillOpacity={0.8} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Процесът на рециклиране на текстил</h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            {recyclingProcessSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="mb-4">{step.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < recyclingProcessSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/5 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Знаете ли, че?</h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3">
                  <Recycle className="h-5 w-5 text-primary" />
                </span>
                <span>
                  Производството на една памучна тениска изисква около 2,700 литра вода – колкото човек пие за 2.5
                  години.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3">
                  <Recycle className="h-5 w-5 text-primary" />
                </span>
                <span>Средно, всеки европеец изхвърля около 11 кг текстил годишно.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3">
                  <Recycle className="h-5 w-5 text-primary" />
                </span>
                <span>Рециклирането на 1 тон текстил спестява 20 тона CO2 емисии.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

