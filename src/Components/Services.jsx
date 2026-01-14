import React from 'react';
import { Home, Droplets, Paintbrush, Bug, Sofa, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  // CONFIGURATION: Replace with your actual WhatsApp number (including country code, no symbols)
  const WHATSAPP_NUMBER = "917505266931"; 

  const allServices = [
    { 
      title: 'Kitchen Deep Cleaning', 
      icon: <Droplets />, 
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
      desc: 'Complete removal of tough oil stains, grease, and carbon deposits. We deep clean chimneys, cabinets, and appliances.',
      sizes: ['Small', 'Standard', 'Large']
    },
    { 
      title: 'Bathroom Sanitization', 
      icon: <Layers />, 
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      desc: 'Scientific descaling of tiles and taps. We eliminate 99.9% of germs using hospital-grade disinfectants.',
      sizes: ['1 Unit', '2 Units', '3+ Units']
    },
    { 
      title: 'Sofa & Upholstery', 
      icon: <Sofa />, 
      image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800',
      desc: 'Injection-extraction cleaning process that removes deep-seated dust, mites, and stubborn stains from your furniture.',
      sizes: ['3-Seater', '5-Seater', 'L-Shape']
    },
    { 
      title: 'Advanced Pest Control', 
      icon: <Bug />, 
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800',
      desc: 'Odourless herbal gel treatment for cockroaches and specialized chemical barriers for termite protection.',
      sizes: ['General', 'Termite', 'Bed Bugs']
    },
    { 
      title: 'Expert Interior Painting', 
      icon: <Paintbrush />, 
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
      desc: 'From wall putty to premium finish. Our painters provide clean execution with specialized textures and stencils.',
      sizes: ['Full Home', 'Single Wall', 'Exterior']
    },
    { 
      title: 'Full House Deep Clean', 
      icon: <Home />, 
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800',
      desc: 'Our signature end-to-end solution covering every inch of your home, including balconies, windows, and floors.',
      sizes: ['1BHK', '2BHK', '3BHK', 'Villa']
    },
  ];

  // Function to create the WhatsApp URL
  const getWhatsAppLink = (serviceTitle) => {
    const message = `Hello LPI Housekeeping! I would like to book the "${serviceTitle}" service. Please provide me with more details and pricing.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-24 bg-white px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-4">
            <CheckCircle2 size={16} />
            <span>CERTIFIED PROFESSIONALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-6">
            Our Professional <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Quickly book our experts via WhatsApp for a hassle-free cleaning experience.
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 bg-yellow-500 text-blue-950 p-3 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  {React.cloneElement(service.icon, { size: 24, strokeWidth: 2.5 })}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Sizes Selection */}
                <div className="mb-8">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-3">
                    Available For:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.sizes.map((size) => (
                      <button 
                        key={size} 
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic WhatsApp CTA Button */}
                <a 
                  href={getWhatsAppLink(service.title)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full py-4 px-6 bg-blue-900 text-white rounded-2xl font-bold transition-all transform group-hover:bg-green-600 group-hover:text-white shadow-lg shadow-blue-900/10 group-hover:shadow-green-500/20"
                >
                  Book on WhatsApp
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Note --- */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm italic">
            Don't see what you're looking for? <a href={getWhatsAppLink("Custom Package")} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold underline decoration-yellow-500 underline-offset-4">Chat with us for custom packages.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;