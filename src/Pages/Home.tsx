import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Blog from "../Components/Blog";
import Companies from "../Components/Companies";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Impact from "../Components/Impact";
import Navbar from "../Components/Navbar";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, 
      offset: 100, 
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div data-aos="fade-up" data-aos-delay="100">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Companies />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <Features />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Impact />
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <Blog />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <Footer />
      </div>
    </div>
  );
};

export default Home;