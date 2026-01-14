import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for sticky effect styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full font-sans">
      {/* --- Top Bar --- */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white/90 text-[10px] sm:text-xs md:text-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors group">
              <Phone size={14} className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:info@lpi-housekeeping.com" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors group">
              <Mail size={14} className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">info@lpi-housekeeping.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-1.5">
              <Clock size={14} className="text-yellow-400" />
              <span>Mon–Sat: 8:00–18:00</span>
            </div>
            <div className="flex gap-3.5 border-l border-white/20 pl-4">
              <a href="#" className="hover:text-yellow-400 transition-all hover:-translate-y-0.5" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-all hover:-translate-y-0.5" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <nav 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-1">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-blue-900 group-hover:text-blue-800 transition-colors">
                LPI
              </span>
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-yellow-500 group-hover:text-yellow-600 transition-colors">
                Housekeeping
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `relative text-sm font-bold uppercase tracking-widest py-2 px-1 transition-colors duration-300 group ${
                          isActive ? "text-blue-900" : "text-gray-600 hover:text-blue-900"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.name}
                          <span 
                            className={`absolute left-0 bottom-0 h-[3px] bg-yellow-500 transition-all duration-300 ease-in-out ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`} 
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-bold text-blue-950 transition-all duration-300 bg-yellow-500 rounded-full group hover:bg-yellow-400 shadow-lg shadow-yellow-500/20 active:scale-95"
              >
                <span className="relative flex items-center gap-2">
                  Book Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-blue-900 hover:bg-gray-100 transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu Overlay --- */}
        <div
          className={`lg:hidden fixed inset-0 top-[104px] bg-blue-950/20 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* --- Mobile Menu Content --- */}
        <div
          className={`lg:hidden fixed right-0 top-[104px] w-[80%] max-w-sm h-screen bg-white shadow-2xl transition-transform duration-500 ease-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <nav className="flex-1">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-4 rounded-xl font-bold text-lg transition-all ${
                          isActive
                            ? "bg-blue-50 text-blue-900"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                        }`
                      }
                    >
                      {link.name}
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pt-6 border-t border-gray-100 mb-24">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-blue-900 text-white text-center font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
              >
                Get Free Quote
              </Link>
              <div className="flex justify-center gap-6 mt-8 text-gray-400">
                <Facebook size={24} />
                <Instagram size={24} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;