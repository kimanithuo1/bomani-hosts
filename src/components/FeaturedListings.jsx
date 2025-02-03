import { Heart } from "lucide-react"
import { Link } from "react-router-dom"

const featuredListings = [
  {
    id: 1,
    title: "Luxurious Beachfront Villa",
    location: "Diani Beach, Mombasa",
    rating: 4.9,
    reviews: 128,
    price: 250,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Cozy Mountain Retreat",
    location: "Mount Kenya, Nanyuki",
    rating: 4.8,
    reviews: 96,
    price: 150,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Modern City Apartment",
    location: "Westlands, Nairobi",
    rating: 4.7,
    reviews: 75,
    price: 100,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Lakeside Cottage",
    location: "Lake Naivasha",
    rating: 4.9,
    reviews: 112,
    price: 180,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function FeaturedListings() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-teal mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="relative">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal mb-1">{listing.title}</h3>
                <p className="text-sea mb-2">{listing.location}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow">★</span>
                  <span className="font-semibold ml-1">{listing.rating}</span>
                  <span className="text-gray-500 ml-1">({listing.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-teal">${listing.price}</span>
                    <span className="text-gray-500"> / night</span>
                  </div>
                  <Link
                    to={`/property/${listing.id}`}
                    className="bg-sea text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

