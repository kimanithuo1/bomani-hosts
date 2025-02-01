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
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal mb-12">Why Choose Bomani</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-mint rounded-full mb-4">
                <benefit.icon size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-teal mb-2">{benefit.title}</h3>
              <p className="text-sea">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

