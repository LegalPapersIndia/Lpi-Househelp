import React from 'react';
import { Target, Eye, Award, Users, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "15+ years in hospitality management with a vision to redefine urban cleaning."
    },
    {
      name: "Sneha Kapoor",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Expert in logistical planning ensuring 99.9% on-time service delivery across the city."
    },
    {
      name: "Arjun Singh",
      role: "QA Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      bio: "Leads the 50-point quality check protocol for every deep cleaning project."
    }
  ];

  const milestones = [
    { year: "2010", event: "Founded in Noida with 3 expert cleaners." },
    { year: "2015", event: "Expanded to 5 major cities with 100+ staff." },
    { year: "2020", event: "Launched Eco-Green initiative using 100% non-toxic agents." },
    { year: "2025", event: "Awarded 'Best Facility Management' brand in the region." }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* --- PREMIUM HERO HEADER --- */}
      <div className="relative bg-blue-950 py-32 px-6 text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1528740561666-dc2479da08ad?auto=format&fit=crop&q=80&w=1500" 
            className="w-full h-full object-cover" 
            alt="background"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black tracking-widest uppercase mb-6">
            <Sparkles size={14} /> Established 2010
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            More Than Just <span className="text-yellow-500">Cleaning.</span>
          </h1>
          <p className="text-blue-100/80 text-xl leading-relaxed max-w-2xl mx-auto font-light">
            We are architects of hygiene, dedicated to transforming your living spaces into sanctuaries of health and peace.
          </p>
        </div>
      </div>

      {/* --- OUR STORY & STATS --- */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500 rounded-3xl -z-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800" 
              alt="Our History" 
              className="rounded-[3rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hidden md:block">
              <p className="text-5xl font-black text-blue-900">12+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Trust</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Legacy</h4>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-8 leading-tight">
              A Decade of Making <br /> Homes <span className="text-blue-600">Sparkle</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2010, <strong className="text-blue-900">LPI-Housekeeping</strong> emerged from a simple observation: the cleaning industry lacked professional integrity and scientific methods.
              </p>
              <p>
                What started as a 3-person team in Noida has evolved into a powerhouse of facility management. We don't just "dust and mop"—we use <strong>Hospital-Grade Sanitization</strong> and <strong>Industrial HEPA Technology</strong> to ensure your family breathes cleaner air.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE TIMELINE --- */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest text-yellow-500">The Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Horizontal Line for Desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-800 hidden md:block"></div>
            
            {milestones.map((m, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl mx-auto flex items-center justify-center text-blue-950 font-black text-xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all">
                  {m.year}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed px-4">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION (Glassmorphism) --- */}
      <section className="relative py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border-b-8 border-yellow-500">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-900 group-hover:text-white transition-colors">
              <Target size={40} />
            </div>
            <h3 className="text-3xl font-bold text-blue-950 mb-6">Our Mission</h3>
            <p className="text-gray-500 text-lg leading-relaxed">
              To democratize premium housekeeping by providing accessible, tech-enabled, and environmentally responsible cleaning solutions that reclaim your time and health.
            </p>
          </div>
          <div className="group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border-b-8 border-blue-900">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-900 group-hover:text-white transition-colors">
              <Eye size={40} />
            </div>
            <h3 className="text-3xl font-bold text-blue-950 mb-6">Our Vision</h3>
            <p className="text-gray-500 text-lg leading-relaxed">
              To be the gold standard in facility management across Asia, driving innovation in sustainable cleaning while maintaining our 100% satisfaction commitment.
            </p>
          </div>
        </div>
      </section>

      {/* --- THE LEADERSHIP (Interactive Cards) --- */}
      <section className="py-24 px-6 bg-white max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-4">The Minds Behind LPI</h4>
          <h2 className="text-4xl md:text-5xl font-black text-blue-950">Leadership Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white text-sm italic mb-2">"{member.bio}"</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-950 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BEHIND THE SCENES CALLOUT --- */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-white">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-black text-blue-950 mb-6">Our Promise to the Environment</h2>
            <ul className="space-y-4">
              {[
                "100% Biodegradable Chemicals",
                "Water-Saving Steam Technology",
                "Zero Plastic Waste Packaging",
                "Fair Wages & Certified Training"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 bg-yellow-500 p-8 rounded-[2rem] text-blue-950">
            <h3 className="text-2xl font-black mb-4 uppercase italic">"Clean Home, Clean Earth"</h3>
            <p className="font-medium leading-relaxed mb-6 opacity-90">
              We believe a healthy home shouldn't come at the cost of the planet. Every chemical we use is tested to be safe for infants and pets.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all">
              Learn More About Our Green-Tech
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;