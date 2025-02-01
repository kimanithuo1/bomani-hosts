import { PocketIcon as Pool, Coffee, Mountain, Warehouse, Trees, Bed, Image } from "lucide-react"

const categories = [
  { label: "Amazing pools", icon: Pool },
  { label: "Icons", icon: Image },
  { label: "Bed & breakfasts", icon: Coffee },
  { label: "Countryside", icon: Mountain },
  { label: "Farms", icon: Warehouse },
  { label: "National parks", icon: Trees },
  { label: "Rooms", icon: Bed },
]

export default function CategoryBar() {
  return (
    <div className="bg-mint py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-8">
            {categories.map((category) => (
              <button
                key={category.label}
                className="flex flex-col items-center gap-2 text-teal hover:text-sea transition group"
              >
                <category.icon className="w-6 h-6 group-hover:scale-110 transition" />
                <span className="text-sm font-medium whitespace-nowrap">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-teal rounded-lg text-teal hover:bg-teal hover:text-white transition">
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

