import React from 'react';
import { ShieldCheck, Leaf, Clock, Banknote, UserCheck, Sparkles, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Verified Professionals",
      desc: "Background-checked and trained experts you can trust in your home.",
      icon: <UserCheck size={28} />,
    },
    {
      id: 2,
      title: "Eco-Friendly Products",
      desc: "Non-toxic, pet-safe agents that are tough on dirt but kind to Earth.",
      icon: <Leaf size={28} />,
    },
    {
      id: 3,
      title: "100% Satisfaction",
      desc: "Not happy? We offer a free re-clean within 24 hours, no questions asked.",
      icon: <ShieldCheck size={28} />,
    },
    {
      id: 4,
      title: "Transparent Pricing",
      desc: "Upfront quotes with zero hidden charges. Pay for what you see.",
      icon: <Banknote size={28} />,
    },
    {
      id: 5,
      title: "On-Time Service",
      desc: "Your time is gold. We arrive precisely within the scheduled slot.",
      icon: <Clock size={28} />,
    },
    {
      id: 6,
      title: "Modern Equipment",
      desc: "Industrial-grade HEPA vacuums and steamers for deep sterilization.",
      icon: <Sparkles size={28} />,
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background text */}
      <div className="absolute top-10 left-10 text-[12rem] font-black text-gray-50 select-none -z-10 leading-none opacity-50">
        LPI
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- Left Content: Branding & Stats --- */}
          <div className="lg:w-5/12">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="text-yellow-500" size={20} />
              <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                Why LPI-Housekeeping
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-8 leading-[1.1]">
              We Don't Just Clean, <br />
              <span className="text-blue-700 relative">
                We Revitalize
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> 
              <br />Your Living Space.
            </h2>
            
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              With a decade of excellence in professional housekeeping, we’ve mastered the chemistry of clean. Our mission is to transform your environment into a sanctuary of health and hygiene.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-blue-900 p-8 rounded-[2rem] transition-all duration-300 hover:bg-blue-800 shadow-xl shadow-blue-900/10">
                <p className="text-4xl font-black text-yellow-500 mb-1">10k+</p>
                <p className="text-[10px] text-blue-100/60 font-black uppercase tracking-widest">
                  Homes Perfected
                </p>
              </div>
              <div className="group bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <p className="text-4xl font-black text-blue-900 mb-1">500+</p>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                  Cleaning Heroes
                </p>
              </div>
            </div>
          </div>

          {/* --- Right Content: Feature Grid --- */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item) => (
              <div 
                key={item.id} 
                className="p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-900 mb-6 group-hover:bg-yellow-500 group-hover:text-blue-950 transition-all duration-300 transform group-hover:rotate-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Subtle background decoration on card hover */}
                <div className="absolute -bottom-4 -right-4 text-blue-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  {React.cloneElement(item.icon, { size: 80 })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;