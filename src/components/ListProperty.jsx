import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ListProperty() {
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [],
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPropertyDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target
    setPropertyDetails((prev) => ({
      ...prev,
      amenities: checked ? [...prev.amenities, value] : prev.amenities.filter((amenity) => amenity !== value),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Property Details:", propertyDetails)
    // Redirect to host dashboard or confirmation page
    navigate("/host/dashboard")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal mb-8">List Your Property</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sea font-medium mb-2">
            Property Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={propertyDetails.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sea font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={propertyDetails.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sea font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={propertyDetails.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sea font-medium mb-2">
            Price per Night
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={propertyDetails.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bedrooms" className="block text-sea font-medium mb-2">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={propertyDetails.bedrooms}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bathrooms" className="block text-sea font-medium mb-2">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={propertyDetails.bathrooms}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sea font-medium mb-2">Amenities</label>
          {["Wi-Fi", "Kitchen", "Free parking", "Pool", "Air conditioning"].map((amenity) => (
            <div key={amenity} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={amenity}
                name="amenities"
                value={amenity}
                checked={propertyDetails.amenities.includes(amenity)}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label htmlFor={amenity}>{amenity}</label>
            </div>
          ))}
        </div>
        <button type="submit" className="bg-teal text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
          List Property
        </button>
      </form>
    </div>
  )
}

