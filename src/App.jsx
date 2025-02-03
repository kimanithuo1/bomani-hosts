import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import CategoryBar from "./components/CategoryBar"
import FeaturedListings from "./components/FeaturedListings"
import WhyChooseBomani from "./components/WhyChooseBomani"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import SearchResults from "./components/SearchResults"
import HostDashboard from "./components/HostDashboard"
import PropertyDetails from "./components/PropertyDetails"
import UserProfile from "./components/UserProfile"

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryBar />
      <FeaturedListings />
      <WhyChooseBomani />
      <Testimonials />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/host/dashboard" element={<HostDashboard />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

