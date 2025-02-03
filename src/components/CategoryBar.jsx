import { useNavigate } from "react-router-dom"
import { PocketIcon as Pool, Coffee, Mountain, Warehouse, Trees, Bed, Umbrella, Building } from "lucide-react"

const categories = [
  { label: "Beach", icon: Umbrella },
  { label: "City", icon: Building },
  { label: "Countryside", icon: Mountain },
  { label: "Farms", icon: Warehouse },
  { label: "National parks", icon: Trees },
  { label: "Rooms", icon: Bed },
  { label: "Amazing pools", icon: Pool },
  { label: "Bed & breakfasts", icon: Coffee },
]

export default function CategoryBar() {
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    navigate(`/search?category=${encodeURIComponent(category.toLowerCase())}`)
  }

  return (
    <div className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-8">
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => handleCategoryClick(category.label)}
                className="flex flex-col items-center gap-2 text-gray-500 hover:text-teal transition group"
              >
                <category.icon className="w-6 h-6 group-hover:scale-110 transition" />
                <span className="text-sm font-medium whitespace-nowrap">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

