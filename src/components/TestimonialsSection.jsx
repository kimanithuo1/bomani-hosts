const testimonials = [
    {
      quote:
        "Bomani made our family vacation unforgettable. The unique accommodations and friendly hosts exceeded our expectations!",
      author: "Sarah M.",
      location: "Nairobi, Kenya",
    },
    {
      quote:
        "As a host, Bomani has been a game-changer. Their platform is user-friendly and has helped me connect with wonderful guests.",
      author: "John D.",
      location: "Mombasa, Kenya",
    },
    {
      quote:
        "I've used many booking platforms, but Bomani stands out for its diverse options and excellent customer service.",
      author: "Emma L.",
      location: "Kisumu, Kenya",
    },
  ]
  
  export default function TestimonialsSection() {
    return (
      <section className="bg-mint py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sea mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-teal font-semibold">{testimonial.author}</p>
                <p className="text-sea text-sm">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  