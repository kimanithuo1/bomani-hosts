import { Star, Users, BedDouble, Bath } from "lucide-react"
import { Link } from "react-router-dom"

export default function FeaturedListing() {
  const listing = {
    id: "featured-1",
    title: "Luxurious Beachfront Villa",
    location: "Diani Beach, Mombasa",
    price: 350,
    rating: 4.9,
    reviews: 124,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    image: "/placeholder.svg?height=600&width=800",
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal mb-12">Featured Listing</h2>
        <div className="bg-mint rounded-lg overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-2/3">
              <img
                src={listing.image || "/placeholder.svg"}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/3 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-teal mb-2">{listing.title}</h3>
                <p className="text-sea mb-4">{listing.location}</p>
                <div className="flex items-center mb-4">
                  <Star className="text-yellow mr-1" />
                  <span className="font-semibold mr-1">{listing.rating}</span>
                  <span className="text-sea">({listing.reviews} reviews)</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Users className="text-teal mr-2" />
                    <span>{listing.guests} guests</span>
                  </div>
                  <div className="flex items-center">
                    <BedDouble className="text-teal mr-2" />
                    <span>{listing.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="text-teal mr-2" />
                    <span>{listing.bathrooms} bathrooms</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal mb-4">
                  ${listing.price} <span className="text-sea text-lg font-normal">/ night</span>
                </p>
                <Link
                  to={`/property/${listing.id}`}
                  className="block w-full bg-yellow text-teal text-center py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

