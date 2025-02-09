import { Shield, Star, Heart } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Trusted Platform",
    description: "Our rigorous verification process ensures a safe and secure booking experience.",
  },
  {
    icon: Star,
    title: "Unique Stays",
    description: "Discover one-of-a-kind accommodations that make your trip unforgettable.",
  },
  {
    icon: Heart,
    title: "Exceptional Hospitality",
    description: "Experience warm welcomes and personalized care from our passionate hosts.",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal mb-12">Why Choose Bomani</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-mint/10 transition-colors"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-mint mb-4">
                <benefit.icon size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-teal mb-3">{benefit.title}</h3>
              <p className="text-sea">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

