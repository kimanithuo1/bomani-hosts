import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Filter, SortAsc, Bed, Bath, Users } from "lucide-react"

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const [properties, setProperties] = useState([])
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
  })

  const location = searchParams.get("location") || "Worldwide"
  const category = searchParams.get("category")

  useEffect(() => {
    // Simulating API call to fetch properties
    const fetchProperties = async () => {
      // In a real application, you would fetch data from your API here
      const response = await fetch(`/api/properties?location=${location}&category=${category}`)
      const data = await response.json()
      setProperties(data)
    }

    fetchProperties()
  }, [location, category])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    // Apply filters to properties
    // This is a simplified example. In a real application, you might want to make an API call with the filters
    const filteredProperties = properties.filter(
      (property) =>
        (filters.bedrooms === "" || property.bedrooms >= Number.parseInt(filters.bedrooms)) &&
        (filters.bathrooms === "" || property.bathrooms >= Number.parseInt(filters.bathrooms)) &&
        (filters.propertyType === "" || property.type === filters.propertyType) &&
        property.price >= filters.priceRange[0] &&
        property.price <= filters.priceRange[1],
    )
    setProperties(filteredProperties)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal mb-8">Places to stay in {location}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-teal" />
            <h2 className="text-xl font-semibold text-teal">Filters</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, priceRange: [prev.priceRange[0], Number.parseInt(e.target.value)] }))
                }
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-sm text-sea">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Bedrooms</h3>
              <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            <div>
              <h3 className="font-medium mb-2">Bathrooms</h3>
              <select
                name="bathrooms"
                value={filters.bathrooms}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </div>

            <div>
              <h3 className="font-medium mb-2">Property Type</h3>
              <select
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Any</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="cottage">Cottage</option>
              </select>
            </div>

            <button
              onClick={applyFilters}
              className="w-full bg-teal text-white py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sea">{properties.length} stays found</p>
            <button className="flex items-center gap-2 text-teal hover:text-sea transition">
              <SortAsc className="w-4 h-4" />
              Sort by
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={property.image || `/placeholder.svg?height=200&width=300`}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-teal mb-2">{property.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-sea mb-2">
                    <span className="flex items-center gap-1">
                      <Bed className="w-4 h-4" /> {property.bedrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" /> {property.bathrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {property.guests}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-teal font-bold">${property.price}/night</span>
                    <button className="bg-sea text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

