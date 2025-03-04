"use client"

import { ArrowUpLeft, ArrowUpRight, ArrowDownLeft, ArrowDownRight } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export function WaterUsage() {
  // Data for the pie chart
  const data = [
    { name: "Used", value: 30 },
    { name: "Remaining", value: 70 },
  ]

  const COLORS = ["#4AE54A", "#0A2A0A"]

  return (
    <div className="relative bg-[#0A2A0A] border-2 border-[#4AE54A] rounded-lg p-8 overflow-hidden">
      {/* Corner Decorations */}
      <div className="absolute top-2 left-2">
        <ArrowUpLeft className="w-6 h-6 text-[#4AE54A]" />
      </div>
      <div className="absolute top-2 right-2">
        <ArrowUpRight className="w-6 h-6 text-[#4AE54A]" />
      </div>
      <div className="absolute bottom-2 left-2">
        <ArrowDownLeft className="w-6 h-6 text-[#4AE54A]" />
      </div>
      <div className="absolute bottom-2 right-2">
        <ArrowDownRight className="w-6 h-6 text-[#4AE54A]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">ИЗПОЛЗВАНЕ НА ВОДА</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Progress Circle */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={45}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        stroke={index === 0 ? "#4AE54A" : "transparent"}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#4AE54A]">30%</span>
              </div>
            </div>
            <p className="text-center mt-4 text-sm">
              От водните нужди на ЕС се използват от текстилна и шивашка промишленост
            </p>
          </div>

          {/* Center Image */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-[#4AE54A]">
              <img src="/water-drop.webp" alt="Water Usage" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Number 3 */}
          <div className="text-center">
            <div className="text-[#4AE54A] text-8xl font-bold mb-4">№3</div>
            <p className="text-sm">
              Текстилната индустрия заема трето място по най-високо{" "}
              <span className="text-[#4AE54A]">потребление на вода</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

