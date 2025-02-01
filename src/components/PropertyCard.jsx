import { Heart } from "lucide-react"
import { Link } from "react-router-dom"

export default function PropertyCard({ property }) {
  const { id, images, location, distance, dates, price, rating } = property

  return (
    <Link to={`/property/${id}`} className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={images[0] || "/placeholder.svg"}
          alt={location}
          className="h-full w-full object-cover transition group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 hover:scale-110 transition" onClick={(e) => e.preventDefault()}>
          <Heart className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="mt-2">
        <div className="flex justify-between">
          <h3 className="font-semibold">{location}</h3>
          {rating && (
            <div className="flex items-center gap-1">
              <span>★</span>
              <span>{rating}</span>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500">{distance} kilometers away</p>
        <p className="text-sm text-gray-500">{dates}</p>
        <p className="mt-2">
          <span className="font-semibold">KSh {price}</span> night
        </p>
      </div>
    </Link>
  )
}

