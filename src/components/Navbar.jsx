import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Globe, Menu, User, Bell, LogOut } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...")
    // After logout, redirect to home page
    navigate("/")
  }

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 max-w-[2520px] mx-auto">
        <Link to="/" className="text-teal text-2xl font-bold">
          Bomani
        </Link>

        <div className="flex items-center gap-4">
          <button className="hover:bg-gray-100 rounded-full p-3">
            <Globe size={18} />
          </button>
          <button className="hover:bg-gray-100 rounded-full p-3">
            <Bell size={18} />
          </button>
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 border rounded-full p-2 hover:shadow-md transition"
            >
              <Menu size={18} />
              <div className="bg-gray-500 rounded-full p-1 text-white">
                <User size={18} />
              </div>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </Link>
                <Link to="/bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  My Bookings
                </Link>
                <Link to="/favorites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Saved Properties
                </Link>
                <Link to="/host/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Host Dashboard
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <span className="flex items-center">
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

