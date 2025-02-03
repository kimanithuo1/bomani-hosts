import { useParams } from "react-router-dom"

export default function PropertyDetails() {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal">Property Details: {id}</h1>
      {/* Property details content */}
    </div>
  )
}

