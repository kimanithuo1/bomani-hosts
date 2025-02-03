import { useState } from "react"
import { User, Mail, Phone, MapPin, Camera } from "lucide-react"

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+254 123 456 789",
    location: "Nairobi, Kenya",
    bio: "Passionate traveler and occasional host. Love exploring new places and meeting new people.",
    avatar: "/placeholder.svg?height=200&width=200",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the updated profile to your backend
    console.log("Updated Profile:", profile)
    setIsEditing(false)
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // In a real application, you would upload this file to a server
      // and get back a URL. For now, we'll just use a local URL.
      const imageUrl = URL.createObjectURL(file)
      setProfile((prev) => ({ ...prev, avatar: imageUrl }))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal mb-8">Your Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="relative">
              <img
                src={profile.avatar || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-64 object-cover rounded-lg"
              />
              {isEditing && (
                <label
                  htmlFor="avatar"
                  className="absolute bottom-2 right-2 bg-sea text-white p-2 rounded-full cursor-pointer"
                >
                  <Camera size={20} />
                </label>
              )}
              {isEditing && (
                <input type="file" id="avatar" onChange={handleAvatarChange} className="hidden" accept="image/*" />
              )}
            </div>
          </div>
          <div className="md:w-2/3">
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={profile.location}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-2 border rounded-md"
                  ></textarea>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-teal text-white rounded-md hover:bg-opacity-90">
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <User className="text-teal" />
                  <h2 className="text-2xl font-semibold text-teal">{profile.name}</h2>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <Mail className="text-sea" />
                    {profile.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="text-sea" />
                    {profile.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="text-sea" />
                    {profile.location}
                  </p>
                </div>
                <p className="mt-4 text-gray-700">{profile.bio}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-6 px-4 py-2 bg-sea text-white rounded-md hover:bg-opacity-90"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

