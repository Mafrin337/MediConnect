"use client"
import Link from 'next/link';
import {useState, useRef} from "react";
import { useRouter } from "next/navigation";
import {Phone,Mail} from "lucide-react";
import InviewFade from './_Useful/InviewFade';
export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
   const featuresRef = useRef(null);
  const contactRef = useRef(null);
  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); 
  };
  const navItems = [
    { label: "Features", action: () => scrollTo(featuresRef) },
    { label: "Contact Us", action: () => scrollTo(contactRef) },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
         <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-blue-600">MediConnect</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollTo(featuresRef)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollTo(contactRef)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact Us
              </button>
                <button
                  onClick={() => router.push("/auth/signin")}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Login
                </button>

                <button
                  onClick={() => router.push("/auth/register")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-sm">
            <button
              onClick={() => scrollTo(featuresRef)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo(contactRef)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Contact Us
            </button>
              <button
                  onClick={() => router.push("/auth/signin")}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Login
                </button>

                <button
                  onClick={() => router.push("/auth/register")}
                  className="px-4 py-2 bg-[#5f6FFF] text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
          </div>
        )}
      </nav>
      {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center px-4">
  <div
    className="flex flex-col md:flex-row items-center rounded-lg w-full max-w-6xl mx-auto 
               bg-[#5f6FFF] bg-center bg-no-repeat bg-cover md:bg-contain"
  >
    {/* Left Side */}
    <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-12 md:py-20 px-6 md:px-12 text-center md:text-left">
      <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
        Welcome to <br /> Mediconnect
      </p>
      <p className="text-white text-sm font-light">
        Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
        schedule your appointment hassle-free.
      </p>
      <a
        href="#speciality"
        className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm mx-auto md:mx-0 hover:scale-105 transition-all duration-300"
      >
        Book Appointment
      </a>
    </div>

    {/* Right Side (Image visible on all screens) */}
<div className="md:w-1/2 flex justify-center items-center p-6">
  <img
    className="w-full h-auto rounded-lg object-contain"
    src="./bg.png"
    alt="Doctor consultation"
  />
</div>

  </div>
</section>

      {/* Features Grid */}
      <section ref = {featuresRef} className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <InviewFade>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Why Choose MediConnect?
          </h2>
          </InviewFade>
         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Verified Doctors</h3>
              <p className="text-gray-600">All doctors are thoroughly verified by our admin team for your safety</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Medicine Delivery</h3>
              <p className="text-gray-600">Get prescribed medicines delivered to your doorstep within hours</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-purple-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Video Consultations</h3>
              <p className="text-gray-600">Secure HD video calls with doctors from anywhere, anytime</p>
            </div>
            {/* Feature 4 */}
            <div className="text-center p-6 bg-orange-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600">Book appointments anytime with doctors available round the clock</p>
            </div>
            {/* Feature 5 */}
            <div className="text-center p-6 bg-red-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">E-Prescriptions</h3>
              <p className="text-gray-600">Digital prescriptions that you can access anytime, anywhere</p>
            </div>
            {/* Feature 6 */}
            <div className="text-center p-6 bg-cyan-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Assistant</h3>
              <p className="text-gray-600">Get instant help with our AI chatbot for any health queries</p>
            </div>
          </div>
        </div>
       
      </section>
      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#5f6FFF] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of patients and doctors who trust MediConnect for their healthcare needs.
        </p>
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Sign Up as Patient
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
            Register as Doctor
          </button>
        </div>
      </section>
        <footer ref={contactRef} className="bg-white text-blue-800 border-t pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-sm">
        <div>
          <span className="text-xl font-bold text-blue-600">MediConnect</span>
          <p className="text-black mb-4">
            Bridging the healthcare gap with trust and technology.
          </p>
        </div>
        <div className='flex flex-col'>
          <h4 className="font-semibold text-blue-900 mb-3">Get in Touch</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="text-black hover:text-blue-600">Need any help?</li>
            <li className="flex items-center gap-1 text-black">
              <span className="text-blue-900">
                <Phone size={18} />
              </span>
              8345192346
            </li>
          </ul>
          <ul className="space-y-2 text-gray-700">
          <li className="text-black hover:text-blue-600">Need live support?</li>
            <li className="flex items-center gap-1 text-black">
              <span className="text-blue-900">
                <Mail size={18} />
              </span>
              MediConnect.in@gmail.com
            </li>
          </ul>
        </div>
          </div>
      <div className="mt-10 text-center text-xs text-gray-500 border-t pt-4">
        © 2025 MediConnect - Academic Project | Built with Next.js, Tailwind CSS, and PostgreSQL
      </div>
    </footer>

    </div>
  );
}