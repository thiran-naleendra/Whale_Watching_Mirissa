import {
  Menu,
  X,
  Phone,
  Mail,
  Waves,
  Ship,
  Camera,
  MapPin,
  Users,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Tours from "./components/Tours";
import Contact from "./components/Contact";
import WaterSports from "./components/WaterSports";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white ">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-20 ">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <img
                  src="https://whalewatchingmirissa.com/images/logo.png"
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />{" "}
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Whale Watching in Mirissa
              </span>
            </div>

            <div className="hidden md:flex space-x-8 ">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("tours")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Tours
              </button>
              <button
                onClick={() => scrollToSection("water-sports")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Activities
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("tours")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Tours
              </button>
              <button
                onClick={() => scrollToSection("water-sports")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Activities
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-gray-700"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <Hero />
      <Services />
      <Tours />
      <WaterSports />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;
