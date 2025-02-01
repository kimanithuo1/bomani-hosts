import { Search } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative h-[600px] bg-sea flex items-center justify-center">
      <img
        src="/placeholder.svg?height=600&width=1600"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-teal opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Find Your Perfect Stay</h1>
        <p className="text-xl md:text-2xl mb-10">Discover unique homes and experiences with Bomani</p>
        <div className="bg-white rounded-full p-2 max-w-xl mx-auto flex items-center">
          <input
            type="text"
            placeholder="Where are you going?"
            className="flex-grow px-4 py-3 rounded-full focus:outline-none text-teal"
          />
          <button className="bg-yellow text-teal p-3 rounded-full hover:bg-opacity-90 transition">
            <Search size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

