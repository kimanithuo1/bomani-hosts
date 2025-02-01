import { Link } from "react-router-dom"

const destinations = [
  { name: "Nairobi", image: "/placeholder.svg?height=200&width=300", properties: 150 },
  { name: "Mombasa", image: "/placeholder.svg?height=200&width=300", properties: 120 },
  { name: "Kisumu", image: "/placeholder.svg?height=200&width=300", properties: 80 },
  { name: "Nakuru", image: "/placeholder.svg?height=200&width=300", properties: 65 },
]

export default function PopularDestinations() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link key={destination.name} to={`/search?location=${destination.name}`} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                  <p>{destination.properties} properties</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

