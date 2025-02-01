import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CategoryBar from "./components/CategoryBar"
import PropertyDetails from "./components/PropertyDetails"
import HeroSection from "./components/HeroSection"
import FeaturedListing from "./components/FeaturedListing"
import PopularDestinations from "./components/PopularDestinations"
import RecentListings from "./components/RecentListings"
import BenefitsSection from "./components/BenefitsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import BecomeHostCTA from "./components/BecomeHostCTA"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryBar />
      <FeaturedListing />
      <PopularDestinations />
      <RecentListings />
      <BenefitsSection />
      <TestimonialsSection />
      <BecomeHostCTA />
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
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App

