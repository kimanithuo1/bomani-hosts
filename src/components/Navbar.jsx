import { Search, Globe, Menu, User } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="flex items-center justify-between px-4 py-4 max-w-[2520px] mx-auto">
        {/* Logo */}
        <a href="/" className="text-teal text-2xl font-bold">
          Bomani
        </a>

        {/* Search Bar */}
        <div className="flex items-center gap-1 border rounded-full p-2 shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="px-4 font-medium">Anywhere</div>
          <div className="border-l px-4 font-medium">Any week</div>
          <div className="border-l px-4 text-gray-600">Add guests</div>
          <div className="bg-teal p-2 rounded-full text-white">
            <Search size={18} />
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <a href="/host" className="font-medium hover:bg-gray-100 rounded-full px-4 py-3">
            Become a Host
          </a>
          <button className="hover:bg-gray-100 rounded-full p-3">
            <Globe size={18} />
          </button>
          <div className="flex items-center gap-2 border rounded-full p-2 hover:shadow-md transition">
            <Menu size={18} />
            <div className="bg-gray-500 rounded-full p-1 text-white">
              <User size={18} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

