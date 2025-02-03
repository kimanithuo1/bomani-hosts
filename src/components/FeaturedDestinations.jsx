const destinations = [
    {
      name: "Nairobi",
      image: "/placeholder.svg?height=400&width=600",
      properties: 150,
      rating: 4.9,
    },
    {
      name: "Mombasa",
      image: "/placeholder.svg?height=400&width=600",
      properties: 120,
      rating: 4.8,
    },
    {
      name: "Kisumu",
      image: "/placeholder.svg?height=400&width=600",
      properties: 80,
      rating: 4.7,
    },
  ]
  
  export default function FeaturedDestinations() {
    return (
      <section className="py-16 bg-mint/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-teal mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.name} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <div className="flex items-center justify-between">
                      <span>{destination.properties} properties</span>
                      <div className="flex items-center">
                        <span className="mr-1">★</span>
                        <span>{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  