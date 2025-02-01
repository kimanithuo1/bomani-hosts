import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Clock } from "lucide-react"

// This would be replaced with actual API calls in a real application
const mockFetchRecentListings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Cozy Apartment in Nairobi", location: "Nairobi", price: 75 },
        { id: 2, title: "Beachfront Villa in Mombasa", location: "Mombasa", price: 150 },
        { id: 3, title: "Lakeside Cottage in Kisumu", location: "Kisumu", price: 100 },
      ])
    }, 1000)
  })
}

export default function RecentListings() {
  const [recentListings, setRecentListings] = useState([])

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await mockFetchRecentListings()
      setRecentListings(listings)
    }
    fetchListings()
  }, [])

  return (
    <section className="bg-mint py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal mb-12">Recent Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentListings.map((listing) => (
            <Link
              key={listing.id}
              to={`/property/${listing.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal mb-2">{listing.title}</h3>
                <p className="text-sea mb-4">{listing.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-teal font-bold">${listing.price} / night</span>
                  <div className="flex items-center text-sea">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">Just added</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

