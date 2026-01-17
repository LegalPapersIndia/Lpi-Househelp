import React from 'react';
import { 
  Utensils, Droplets, Sofa, Bug, Paintbrush, Home, 
  CheckCircle2, MessageCircle, Sparkles, ShieldCheck, Zap, ArrowRight, 
  Building2, HardHat, Waves, ThermometerSun, Scissors
} from 'lucide-react';

const ServicesPage = () => {
  const whatsappNumber = "917505266931"; 

  const serviceDetails = [
    {
      id: 1,
      title: "Kitchen Deep Cleaning",
      icon: <Utensils className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      description: "Complete degreasing of chimney, tiles, cabinets, and appliances using food-safe chemicals.",
      points: ["Chimney & Exhaust Degreasing", "Cabinet Interior Sanitization", "Tile & Grout Steam Cleaning", "Stainless Steel Polishing"],
      price: "₹1,499",  
      tag: "Most Popular"
    },
    {
      id: 2,
      title: "Bathroom Sanitation",
      icon: <Droplets className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      description: "Hospital-grade disinfection and acid-free descaling for a germ-free bathroom.",
      points: ["Water Stain Removal", "Tap & Shower Descaling", "Anti-Bacterial Floor Wash", "Mirror & Glass Buffing"],
      price: "₹499",
      tag: "Quick Service"
    },
    {
      id: 3,
      title: "Sofa & Upholstery",
      icon: <Sofa className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
      description: "Injection-Extraction technology that removes dirt from 3 inches deep.",
      points: ["Shampoo & Scrubbing", "Deep Vacuum Suction", "Odor Neutralization", "Fabric Softening"],
      price: "₹250 /seat",
      tag: "Fabric Care"
    },
    {
      id: 4,
      title: "Pest Control",
      icon: <Bug className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800",
      description: "Herbal, odorless, and safe for kids/pets. 100% effective against pests.",
      points: ["Cockroach Gel Baiting", "Termite Barrier System", "Anti-Ant Treatment", "90 Days Warranty"],
      price: "₹899",
      tag: "Herbal Safe"
    },
    {
      id: 6,
      title: "Full House Cleaning",
      icon: <Home className="w-8 h-8" />,
      image: "https://4.imimg.com/data4/OT/QW/MY-25966837/full-home-cleaning-sofa-shampoo-carpet-500x500.jpg",
      description: "The ultimate 50-point cleaning checklist for new move-ins and renewals.",
      points: ["All Rooms & Balconies", "Window Grills & Tracks", "Ceiling Fan & Lights", "Floor Machine Scrubbing"],
      price: "3BHK @ ₹4,999",
      tag: "Full Revive"
    }
  ];

  const commercialServices = [
    { title: "Office Maintenance", icon: <Building2 />, desc: "Daily housekeeping & facility management for corporate hubs." },
    { title: "Industrial Cleaning", icon: <HardHat />, desc: "Heavy-duty machinery and warehouse floor degreasing." },
    { title: "Façade Cleaning", icon: <Waves />, desc: "High-rise glass and ACP sheet cleaning with safety gear." },
    { title: "HVAC Sanitization", icon: <ThermometerSun />, desc: "Deep cleaning of AC ducts and vents for better air quality." }
  ];

  const handleWhatsApp = (serviceName) => {
    const message = `Hi LPI-Housekeeping, I'm interested in your *${serviceName}* service. Can you share the process and availability?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- Header Section --- */}
      <div className="relative bg-blue-950 py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/30 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-black tracking-widest uppercase mb-6">
            <Sparkles size={14} /> Professional Excellence
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Expert <span className="text-yellow-500">Care</span> for Your Home</h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            From microscopic dust to heavy grease, we have the technology and expertise to make every inch of your space shine.
          </p>
        </div>
      </div>

      {/* --- Trust Bar --- */}
      <div className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-blue-900/60">
          <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest"><ShieldCheck size={20} className="text-green-600" /> ISO Certified</div>
          <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest"><Zap size={20} className="text-yellow-600" /> 4-Hour Response</div>
          <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest"><CheckCircle2 size={20} className="text-blue-600" /> Eco-Friendly</div>
        </div>
      </div>

      {/* --- NEW: Residential Services List --- */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-blue-950 uppercase">Residential <span className="text-yellow-500">Solutions</span></h2>
          <p className="text-gray-500 mt-2">Premium cleaning services for your living spaces</p>
        </div>
        <div className="space-y-16">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full relative">
                <div className="absolute -inset-4 bg-gray-50 rounded-[3rem] -z-10 group-hover:bg-blue-50 transition-colors"></div>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="p-2 bg-blue-900 text-yellow-500 rounded-xl">{service.icon}</div>
                    <span className="font-black text-blue-950 text-sm uppercase tracking-tighter">{service.tag}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                <h3 className="text-4xl font-black text-blue-950 leading-tight">{service.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-blue-900 font-semibold text-sm">
                      <CheckCircle2 size={16} className="text-green-500" /> {point}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between p-8 bg-blue-900 rounded-[2rem] shadow-xl text-white">
                  <div>
                    <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest mb-1">Starts From</p>
                    <p className="text-2xl font-black text-yellow-500">{service.price}</p>
                  </div>
                  <button onClick={() => handleWhatsApp(service.title)} className="bg-yellow-500 text-blue-950 px-8 py-4 rounded-2xl font-black text-sm hover:bg-white transition-all flex items-center gap-3">
                    BOOK NOW <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEW: Commercial Services Grid --- */}
      <section className="py-24 bg-blue-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 uppercase leading-tight">Corporate & <br /><span className="text-yellow-500">Commercial</span> Facility</h2>
              <p className="text-blue-200 mb-8 leading-relaxed">We provide specialized maintenance contracts for offices, malls, and industrial units across the nation.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {commercialServices.map((c, i) => (
                  <div key={i} className="bg-blue-900/50 p-6 rounded-2xl border border-white/5 hover:border-yellow-500 transition-colors">
                    <div className="text-yellow-500 mb-4">{React.cloneElement(c.icon, { size: 32 })}</div>
                    <h4 className="font-bold text-lg mb-2">{c.title}</h4>
                    <p className="text-xs text-blue-200/70">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
                    className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Corporate" 
                />
                <div className="absolute -bottom-10 -left-10 bg-yellow-500 text-blue-950 p-8 rounded-[2rem] hidden md:block">
                    <p className="text-4xl font-black">150+</p>
                    <p className="font-bold uppercase text-xs">Corporate Clients</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: Equipment/Technology Showcase --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-blue-950 uppercase">Our <span className="text-yellow-500">Technology</span></h2>
          <p className="text-gray-500">We don't use brooms; we use science.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { title: "Steam Sterilizers", desc: "140°C pressurized steam" },
                { title: "HEPA Vacuums", desc: "99.9% dust filtration" },
                { title: "U V-C Sanitizers", desc: "Medical grade disinfection" },
                { title: "pH Neutral Chemicals", desc: "Surface safe solutions" }
            ].map((tech, i) => (
                <div key={i} className="group">
                    <div className="w-20 h-20 bg-gray-50 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                        <Zap className="text-blue-950" />
                    </div>
                    <h4 className="font-black text-blue-950 uppercase text-sm">{tech.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{tech.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-24 bg-gray-50 rounded-[5rem] mx-6 mb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-blue-950 mb-16 uppercase tracking-tight">Our 3-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Inspection", desc: "Our supervisor assesses the area and recommends the best treatment." },
              { step: "02", title: "Execution", desc: "Certified professionals perform the cleaning with advanced equipment." },
              { step: "03", title: "Satisfaction", desc: "A post-cleaning check is done to ensure 100% spotless results." }
            ].map((s, i) => (
              <div key={i} className="relative p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
                <span className="text-7xl font-black text-blue-50 absolute -top-10 left-1/2 -translate-x-1/2 select-none">{s.step}</span>
                <h4 className="text-xl font-black text-blue-950 mb-4 relative z-10">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Fixed Custom Quote Banner --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xl px-6 z-50">
        <div className="bg-blue-950/90 backdrop-blur-xl rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-between border border-white/10 group">
          <div className="flex items-center gap-4 ml-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <MessageCircle className="text-white" size={20} />
            </div>
            <div>
              <p className="text-white font-black text-sm">Need Help?</p>
              <p className="text-blue-300 text-[10px] font-bold uppercase">24/7 Expert Support</p>
            </div>
          </div>
          <button 
            onClick={() => handleWhatsApp("Custom Quote Request")}
            className="bg-yellow-500 text-blue-950 px-8 py-3 rounded-2xl font-black text-xs hover:scale-105 transition-transform"
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;