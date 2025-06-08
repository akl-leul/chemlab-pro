"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { elementData } from "@/lib/element-data" 
import dynamic from "next/dynamic"
const ElementDetail = dynamic(() => import('@/components/element-detail'), { ssr: false })
const ElementModel = dynamic(() => import('@/components/element-model'), { ssr: false })


export default function PeriodicTablePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedElement, setSelectedElement] = useState<any>(null)
  const [viewMode, setViewMode] = useState<"table" | "list">("table")

  const handleElementClick = (element: any) => {
    setSelectedElement(element)
  }

  const filteredElements = elementData.filter(
    (element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.number.toString().includes(searchTerm),
  )

  // Group elements by category for the table view
  const groupedElements = {
    "alkali-metal": elementData.filter((e) => e.category === "alkali-metal"),
    "alkaline-earth-metal": elementData.filter((e) => e.category === "alkaline-earth-metal"),
    "transition-metal": elementData.filter((e) => e.category === "transition-metal"),
    "post-transition-metal": elementData.filter((e) => e.category === "post-transition-metal"),
    metalloid: elementData.filter((e) => e.category === "metalloid"),
    nonmetal: elementData.filter((e) => e.category === "nonmetal"),
    halogen: elementData.filter((e) => e.category === "halogen"),
    "noble-gas": elementData.filter((e) => e.category === "noble-gas"),
    lanthanide: elementData.filter((e) => e.category === "lanthanide"),
    actinide: elementData.filter((e) => e.category === "actinide"),
  }

  // Color mapping for element categories
  const categoryColors: Record<string, string> = {
    "alkali-metal": "bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800",
    "alkaline-earth-metal": "bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800",
    "transition-metal": "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800",
    "post-transition-metal": "bg-lime-100 dark:bg-lime-900/30 border-lime-200 dark:border-lime-800",
    metalloid: "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800",
    nonmetal: "bg-teal-100 dark:bg-teal-900/30 border-teal-200 dark:border-teal-800",
    halogen: "bg-cyan-100 dark:bg-cyan-900/30 border-cyan-200 dark:border-cyan-800",
    "noble-gas": "bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
    lanthanide: "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800",
    actinide: "bg-violet-100 dark:bg-violet-900/30 border-violet-200 dark:border-violet-800",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Interactive Periodic Table</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search elements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <div className="flex gap-2">
              <Button variant={viewMode === "table" ? "default" : "outline"} onClick={() => setViewMode("table")}>
                Table View
              </Button>
              <Button variant={viewMode === "list" ? "default" : "outline"} onClick={() => setViewMode("list")}>
                List View
              </Button>
            </div>
          </div>

          {viewMode === "table" ? (
            <div className="overflow-auto">
              <div className="min-w-[900px] grid grid-cols-18 gap-1">
                {/* Generate the periodic table layout */}
                {Array.from({ length: 10 }).map((_, row) =>
                  Array.from({ length: 18 }).map((_, col) => {
                    // Find element at this position (simplified mapping)
                    let element = null

                    // Row 1
                    if (row === 0 && col === 0) element = elementData.find((e) => e.number === 1)
                    if (row === 0 && col === 17) element = elementData.find((e) => e.number === 2)

                    // Row 2
                    if (row === 1 && col === 0) element = elementData.find((e) => e.number === 3)
                    if (row === 1 && col === 1) element = elementData.find((e) => e.number === 4)
                    if (row === 1 && col >= 12 && col <= 17) element = elementData.find((e) => e.number === col - 7)

                    // Row 3
                    if (row === 2 && col === 0) element = elementData.find((e) => e.number === 11)
                    if (row === 2 && col === 1) element = elementData.find((e) => e.number === 12)
                    if (row === 2 && col >= 12 && col <= 17) element = elementData.find((e) => e.number === col - 2)

                    // Row 4-7 (simplified)
                    if (row >= 3 && row <= 6 && col <= 17) {
                      // This is a simplified mapping and doesn't accurately represent the periodic table
                      // In a real app, you would have precise positioning for each element
                      const possibleElement = elementData.find(
                        (e) =>
                          (row === 3 && e.number >= 19 && e.number <= 36 && e.number === col + 19) ||
                          (row === 4 && e.number >= 37 && e.number <= 54 && e.number === col + 37) ||
                          (row === 5 && e.number >= 55 && e.number <= 86 && e.number === col + 55) ||
                          (row === 6 && e.number >= 87 && e.number <= 118 && e.number === col + 87),
                      )

                      if (possibleElement) element = possibleElement
                    }

                    // Lanthanides and Actinides placeholder
                    if (row === 7 && col >= 2 && col <= 16) {
                      return (
                        <div key={`${row}-${col}`} className="h-16 flex items-center justify-center">
                          {col === 2 && "La-Lu"}
                          {col === 3 && "Ac-Lr"}
                        </div>
                      )
                    }

                    // Lanthanides row
                    if (row === 8 && col >= 2 && col <= 16) {
                      const lanthanideIndex = col - 2
                      element = groupedElements.lanthanide[lanthanideIndex]
                    }

                    // Actinides row
                    if (row === 9 && col >= 2 && col <= 16) {
                      const actinideIndex = col - 2
                      element = groupedElements.actinide[actinideIndex]
                    }

                    if (!element) {
                      return <div key={`${row}-${col}`} className="h-16"></div>
                    }

                    const colorClass = categoryColors[element.category] || "bg-gray-100 dark:bg-gray-800"

                    return (
                      <div
                        key={`${row}-${col}`}
                        className={`h-16 p-1 border rounded cursor-pointer transition-transform hover:scale-105 ${colorClass}`}
                        onClick={() => handleElementClick(element)}
                      >
                        {element.symbol}
                      </div>
                    )
                  }),
                )}
              </div>
            </div>
          ) : (
            <div className="overflow-fixed">
              <div className="flex flex-col gap-4">
                {filteredElements.map((element) => (
                  <div
                    key={element.number}
                    className={`p-4 border rounded cursor-pointer transition-transform hover:scale-105 ${categoryColors[element.category]}`}
                    onClick={() => handleElementClick(element)}
                  >
                    <h2 className="text-xl font-bold">{element.name}</h2>
                    <p>Symbol: {element.symbol}</p>
                    <p>Atomic Number: {element.number}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {selectedElement && (
          <div className="lg:w-1/3 right-0 absolute">
            <ElementDetail element={selectedElement} />
            <ElementModel element={selectedElement} />
          </div>
        )}
      </div>
    </div>
  )
}
