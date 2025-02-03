import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Bomani made our family vacation unforgettable. The unique accommodations and friendly hosts exceeded our expectations!",
    author: "Sarah M.",
    location: "Nairobi, Kenya",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "As a host, Bomani has been a game-changer. Their platform is user-friendly and has helped me connect with wonderful guests.",
    author: "John D.",
    location: "Mombasa, Kenya",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I've used many booking platforms, but Bomani stands out for its diverse options and excellent customer service.",
    author: "Emma L.",
    location: "Kisumu, Kenya",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-mint py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-teal text-center mb-16">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-teal">{testimonial.author}</p>
                  <p className="text-sea text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow fill-current" />
                ))}
              </div>
              <p className="text-sea italic mb-4">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

