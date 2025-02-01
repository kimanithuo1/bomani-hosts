import PropertyCard from "./PropertyCard"

const featuredProperties = [
  {
    id: 1,
    images: ["/placeholder.svg?height=400&width=400"],
    location: "Nairobi, Kenya",
    distance: 6,
    dates: "Feb 20 - 25",
    price: "12,196",
    rating: 4.91,
  },
  {
    id: 2,
    images: ["/placeholder.svg?height=400&width=400"],
    location: "Mombasa, Kenya",
    distance: 7,
    dates: "Feb 2 - 7",
    price: "8,915",
    rating: 4.87,
  },
  {
    id: 3,
    images: ["/placeholder.svg?height=400&width=400"],
    location: "Nakuru, Kenya",
    distance: 5,
    dates: "Mar 10 - 15",
    price: "10,500",
    rating: 4.95,
  },
  {
    id: 4,
    images: ["/placeholder.svg?height=400&width=400"],
    location: "Kisumu, Kenya",
    distance: 8,
    dates: "Apr 5 - 10",
    price: "9,800",
    rating: 4.89,
  },
]

export default function FeaturedProperties() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}

