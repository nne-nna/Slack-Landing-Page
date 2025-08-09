import Companies from "../Components/Companies"
import Features from "../Components/Features"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Companies />
        <Features />
    </div>
  )
}

export default Home