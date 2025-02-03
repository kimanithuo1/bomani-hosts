import { Shield, Star, Heart, Globe } from "lucide-react"

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
  {
    icon: Globe,
    title: "Local Experiences",
    description: "Immerse yourself in Kenyan culture with authentic local experiences and insider tips.",
  },
]

export default function WhyChooseBomani() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-teal text-center mb-16">Why Choose Bomani</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-teal" />
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

