import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ArrowRight,
  Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceLinks = [
    "Kitchen Cleaning",
    "Bathroom Sanitation",
    "Sofa & Upholstery",
    "Pest Control",
    "Home Painting"
  ];

  return (
    <footer className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16 mb-16">
          
          {/* COLUMN 1: BRAND & MISSION */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <h2 className="text-2xl font-black tracking-tight flex items-center">
                <span className="text-white">LPI</span>
                <span className="text-yellow-500 ml-1">Housekeeping</span>
              </h2>
            </Link>
            <p className="text-blue-100/80 leading-relaxed text-sm md:text-base">
              Setting the gold standard in professional cleaning services. We don't just clean; we revitalize your living and working environments with eco-friendly precision.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg hover:bg-yellow-500 hover:text-blue-950 transition-all duration-300 transform hover:-translate-y-1 border border-white/10"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-blue-100/70 hover:text-yellow-500 flex items-center group transition-all duration-300"
                  >
                    <ArrowRight size={14} className="mr-0 w-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES GRID */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Popular Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-blue-100/70 hover:text-yellow-500 transition-colors duration-300 block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER & CONTACT */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Join Our Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            <p className="text-sm text-blue-100/70 mb-4">Get cleaning tips and exclusive discounts.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-yellow-500 transition-all pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-yellow-500 hover:text-yellow-400 transition-colors">
                <Send size={20} />
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
              <div className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-colors">
                <Phone size={18} className="text-yellow-500" />
                <span className="text-sm">+91 75052 66931</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-colors">
                <Mail size={18} className="text-yellow-500" />
                <span className="text-sm">help@lpi-housekeeping.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-100/40 text-center md:text-left">
            © {currentYear} <span className="text-blue-100/60 font-semibold">LPI Housekeeping Services</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-xs text-blue-100/40 hover:text-yellow-500 transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-blue-100/40 hover:text-yellow-500 transition-colors uppercase tracking-widest">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;