import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ElementDetailProps {
  element: {
    name: string
    symbol: string
    number: number
    category: string
    atomic_mass: number
    electron_configuration: string
    electronegativity_pauling: number | null
    density: number
    melting_point: number
    boiling_point: number
    discovered_by: string
    description: string
  }
}

export default function ElementDetail({ element }: ElementDetailProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{element.name}</span>
          <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{element.symbol}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Atomic Number</p>
            <p>{element.number}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</p>
            <p className="capitalize">{element.category.replace("-", " ")}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Atomic Mass</p>
            <p>{element.atomic_mass} u</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Electron Configuration</p>
            <p>{element.electron_configuration}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Electronegativity</p>
            <p>{element.electronegativity_pauling || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Density</p>
            <p>{element.density} g/cm³</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Melting Point</p>
            <p>{element.melting_point} K</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Boiling Point</p>
            <p>{element.boiling_point} K</p>
          </div>
        </div>

        <Separator />

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Discovered By</p>
          <p>{element.discovered_by}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</p>
          <p className="text-sm mt-1">{element.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
