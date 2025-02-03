import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, MapPin, Calendar, Users } from "lucide-react"

export default function HeroSection() {
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchParams((prev) => ({ ...prev, [name]: value }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const queryString = new URLSearchParams(searchParams).toString()
    navigate(`/search?${queryString}`)
  }

  return (
    <div className="relative h-[600px] bg-gradient-to-br from-mint to-sea">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">Find Your Perfect Stay in Kenya</h1>
        <p className="text-xl md:text-2xl text-white mb-8 text-center">
          Discover unique homes and experiences with Bomani
        </p>

        <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto bg-white rounded-full shadow-lg p-2">
          <div className="flex flex-wrap items-center">
            <div className="flex items-center flex-1 min-w-[200px] p-2">
              <MapPin className="text-gray-400 mr-2" size={24} />
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full outline-none text-lg"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center flex-1 min-w-[200px] p-2 border-l">
              <Calendar className="text-gray-400 mr-2" size={24} />
              <input
                type="date"
                placeholder="Check-in"
                className="w-full outline-none text-lg"
                name="checkIn"
                value={searchParams.checkIn}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center flex-1 min-w-[200px] p-2 border-l">
              <Calendar className="text-gray-400 mr-2" size={24} />
              <input
                type="date"
                placeholder="Check-out"
                className="w-full outline-none text-lg"
                name="checkOut"
                value={searchParams.checkOut}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center flex-1 min-w-[200px] p-2 border-l">
              <Users className="text-gray-400 mr-2" size={24} />
              <input
                type="number"
                placeholder="Guests"
                className="w-full outline-none text-lg"
                name="guests"
                value={searchParams.guests}
                onChange={handleInputChange}
                min="1"
              />
            </div>
            <button type="submit" className="bg-teal text-white p-4 rounded-full hover:bg-opacity-90 transition">
              <Search size={24} />
            </button>
          </div>
        </form>

        <div className="flex gap-4 mt-8">
          {["Nairobi", "Mombasa", "Kisumu"].map((city) => (
            <button
              key={city}
              onClick={() => navigate(`/search?location=${encodeURIComponent(city)}`)}
              className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-full hover:bg-opacity-30 transition"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

