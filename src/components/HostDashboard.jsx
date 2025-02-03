import { useState } from "react"
import { Calendar, Home, MessageSquare, DollarSign, Settings, PlusCircle, Upload } from "lucide-react"

export default function HostDashboard() {
  const [showListingForm, setShowListingForm] = useState(false)
  const [newListing, setNewListing] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    images: [],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewListing((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    // In a real application, you would upload these files to a server
    // and get back URLs. For now, we'll just use local URLs.
    const imageUrls = files.map((file) => URL.createObjectURL(file))
    setNewListing((prev) => ({ ...prev, images: [...prev.images, ...imageUrls] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("New Listing:", newListing)
    // Reset form and hide it
    setNewListing({
      title: "",
      description: "",
      price: "",
      location: "",
      bedrooms: "",
      bathrooms: "",
      images: [],
    })
    setShowListingForm(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-teal">Host Dashboard</h1>
        <button
          onClick={() => setShowListingForm(!showListingForm)}
          className="flex items-center gap-2 bg-sea text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
        >
          <PlusCircle className="w-5 h-5" />
          List Your Property
        </button>
      </div>

      {showListingForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-teal mb-4">List Your Property</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              value={newListing.title}
              onChange={handleInputChange}
              placeholder="Property Title"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="location"
              value={newListing.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="number"
              name="price"
              value={newListing.price}
              onChange={handleInputChange}
              placeholder="Price per Night"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="number"
              name="bedrooms"
              value={newListing.bedrooms}
              onChange={handleInputChange}
              placeholder="Number of Bedrooms"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="number"
              name="bathrooms"
              value={newListing.bathrooms}
              onChange={handleInputChange}
              placeholder="Number of Bathrooms"
              className="w-full p-2 border rounded-md"
              required
            />
            <div className="flex items-center gap-2">
              <label htmlFor="images" className="flex-1 cursor-pointer bg-mint text-teal p-2 rounded-md text-center">
                <Upload className="inline-block mr-2" />
                Upload Images
              </label>
              <input
                type="file"
                id="images"
                onChange={handleImageUpload}
                multiple
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
          <textarea
            name="description"
            value={newListing.description}
            onChange={handleInputChange}
            placeholder="Property Description"
            className="w-full p-2 border rounded-md mt-4"
            rows="4"
            required
          ></textarea>
          {newListing.images.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {newListing.images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Uploaded ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-md"
                />
              ))}
            </div>
          )}
          <button type="submit" className="mt-4 bg-teal text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
            Submit Listing
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Home, label: "Properties", value: "3" },
          { icon: Calendar, label: "Bookings", value: "12" },
          { icon: MessageSquare, label: "Messages", value: "5" },
          { icon: DollarSign, label: "Earnings", value: "$2,450" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-mint p-3 rounded-full">
                <stat.icon className="w-6 h-6 text-teal" />
              </div>
              <div>
                <p className="text-sea">{stat.label}</p>
                <p className="text-2xl font-bold text-teal">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-teal mb-6">Your Properties</h2>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4 p-4 border rounded-lg hover:border-sea transition cursor-pointer">
                <img
                  src="/placeholder.svg?height=100&width=150"
                  alt="Property"
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-teal">Luxury Villa {i + 1}</h3>
                  <p className="text-sea text-sm">Nairobi, Kenya</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow">★</span>
                    <span className="text-sm">4.9 (128 reviews)</span>
                  </div>
                </div>
                <button className="text-sea hover:text-teal">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-teal mb-6">Recent Messages</h2>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 border rounded-lg hover:border-sea transition cursor-pointer"
              >
                <div className="w-10 h-10 bg-mint rounded-full flex items-center justify-center">
                  <span className="text-teal font-semibold">JD</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-teal">John Doe</h3>
                  <p className="text-sea text-sm truncate">Hello, I'm interested in booking...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

