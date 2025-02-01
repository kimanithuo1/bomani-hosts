import { ArrowLeft, Star, Share, Heart } from "lucide-react"
import { useParams, Link } from "react-router-dom"

export default function PropertyDetails() {
  const { id } = useParams()
  // In a real app, you'd fetch the property details based on the id
  const property = {
    id,
    title: "Luxurious Villa with Amazing Pool",
    location: "Nairobi, Kenya",
    rating: 4.92,
    reviews: 128,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    host: "John Doe",
    description:
      "Experience the beauty of Nairobi in this stunning villa with a private pool. Perfect for families or groups looking for a relaxing getaway.",
    amenities: ["Pool", "Wi-Fi", "Kitchen", "Free parking", "Air conditioning"],
    price: 12196,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-teal mb-4">
        <ArrowLeft className="mr-2" />
        Back to listings
      </Link>

      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Star className="text-yellow mr-1" />
          <span className="font-semibold">{property.rating}</span>
          <span className="mx-1">·</span>
          <span className="underline">{property.reviews} reviews</span>
        </div>
        <div className="flex items-center">
          <button className="flex items-center mr-4">
            <Share className="mr-1" />
            Share
          </button>
          <button className="flex items-center">
            <Heart className="mr-1" />
            Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {property.images.map((image, index) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt={`Property ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Hosted by {property.host}</h2>
          <p className="mb-4">{property.description}</p>

          <h3 className="text-xl font-semibold mb-2">Amenities</h3>
          <ul className="grid grid-cols-2 gap-2">
            {property.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">✓</span>
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              KSh {property.price} <span className="text-base font-normal">night</span>
            </h3>
            <button className="w-full bg-teal text-white py-2 rounded-lg mb-4">Reserve</button>
            <p className="text-center text-sm text-gray-500">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

