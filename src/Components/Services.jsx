import React from 'react';
import { 
  Home, Droplets, Paintbrush, Bug, Sofa, Layers, CheckCircle2, 
  ArrowRight, Sparkles, ShieldCheck, Clock, PhoneCall, Building 
} from 'lucide-react';

const Services = () => {
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
    { 
      title: 'Corporate Housekeeping', 
      icon: <Building />, 
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/PZ/LJ/FE/11447869/corporate-housekeeping-service-provider-500x500.jpg',
      desc: 'Professional facility management for offices, banks, and showrooms. Tailored AMC plans for daily maintenance.',
      sizes: ['Daily Office', 'Weekly Deep', 'AMC']
    },
  ];

  const workflow = [
    { step: '01', title: 'Quick Booking', desc: 'Message us on WhatsApp with your requirements.', icon: <PhoneCall className="text-blue-600" /> },
    { step: '02', title: 'Site Inspection', desc: 'Our experts assess the area for a customized plan.', icon: <ShieldCheck className="text-blue-600" /> },
    { step: '03', title: 'Deep Cleaning', desc: 'Certified professionals use eco-friendly chemicals.', icon: <Sparkles className="text-blue-600" /> },
    { step: '04', title: 'Final Review', desc: 'Pay only after you are 100% satisfied with the work.', icon: <CheckCircle2 className="text-blue-600" /> },
  ];

  const getWhatsAppLink = (serviceTitle) => {
    const message = `Hello LPI Housekeeping! I would like to book the "${serviceTitle}" service. Please provide me with more details and pricing.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-4">
            <Sparkles size={16} />
            <span>PREMIUM HYGIENE SOLUTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-6">
            Expert Solutions for <span className="text-blue-700">Pristine Spaces</span>
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed text-lg">
            From residential deep cleaning to corporate facility management, LPI provides hospital-grade sanitization for every environment.
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10"
            >
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

              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
                  {service.desc}
                </p>

                <div className="mb-8">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-3">
                    Available For:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.sizes.map((size) => (
                      <span 
                        key={size} 
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

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

        {/* --- NEW SECTION: HOW IT WORKS --- */}
        <div className="bg-blue-950 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-black mb-4 uppercase">Experience the <span className="text-yellow-500">LPI Difference</span></h3>
              <p className="text-blue-200">Our seamless process ensures your peace of mind.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 hover:rotate-0 transition-transform shadow-xl">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-yellow-500">{item.title}</h4>
                  <p className="text-sm text-blue-100/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: WHY CHOOSE LPI --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 px-4">
          <div>
            <h3 className="text-3xl font-black text-blue-950 mb-8 uppercase leading-tight">
              Safety First. <br />
              <span className="text-blue-700 text-5xl">Quality Always.</span>
            </h3>
            <div className="space-y-6">
              {[
                { t: 'Verified Staff', d: 'All team members undergo police verification and background checks.' },
                { t: 'Eco-Friendly Chemicals', d: 'We use non-toxic, pet-safe, and biodegradable cleaning agents.' },
                { t: 'Punctuality', d: 'Time is money. Our team arrives within 15 mins of the scheduled slot.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-950 text-lg">{item.t}</h5>
                    <p className="text-gray-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-8 rounded-[2rem] text-center border border-yellow-100">
               <h4 className="text-4xl font-black text-blue-950">100%</h4>
               <p className="text-sm font-bold text-yellow-700 uppercase mt-2">Satisfaction</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-[2rem] text-center border border-blue-100">
               <h4 className="text-4xl font-black text-blue-950">500+</h4>
               <p className="text-sm font-bold text-blue-700 uppercase mt-2">Experts</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-[2rem] text-center border border-gray-100 col-span-2">
               <h4 className="text-4xl font-black text-blue-950">24/7</h4>
               <p className="text-sm font-bold text-gray-500 uppercase mt-2">Support Available</p>
            </div>
          </div>
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