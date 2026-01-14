import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, ChevronDown } from 'lucide-react';

const ContactUs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How quickly can I get a cleaning slot?", a: "Typically, we can schedule a team within 24-48 hours. For urgent requests, please use our WhatsApp support." },
    { q: "Do I need to provide cleaning supplies?", a: "No, our team arrives fully equipped with industrial-grade machines and eco-friendly chemicals." },
    { q: "Is your staff background verified?", a: "Yes, 100% of our staff undergoes rigorous police verification and professional training." }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚀 Message received! Our team will contact you within 2 hours.");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- PREMIUM HERO SECTION --- */}
      <div className="relative bg-blue-950 py-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Let's Start <span className="text-yellow-500">Fresh.</span>
          </h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-xl font-light">
            Ready for a spotless home? Reach out today for a customized quote or to book a professional inspection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto -mt-16 px-6 lg:px-8 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT SIDE: INFO & MAP (4 Cols) --- */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black text-blue-950 mb-8">Direct Connect</h3>
              
              <div className="space-y-6">
                <a href="tel:+917505266931" className="flex items-center p-4 rounded-2xl hover:bg-blue-50 transition-colors group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div className="ml-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Anytime</p>
                    <p className="text-lg font-black text-blue-950">+91 75052 66931</p>
                  </div>
                </a>

                <a href="mailto:info@lpi-housekeeping.com" className="flex items-center p-4 rounded-2xl hover:bg-yellow-50 transition-colors group">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 group-hover:bg-yellow-500 group-hover:text-blue-950 transition-all">
                    <Mail size={24} />
                  </div>
                  <div className="ml-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Support</p>
                    <p className="text-lg font-black text-blue-950">info@lpi-housekeeping.com</p>
                  </div>
                </a>

                <div className="flex items-center p-4 rounded-2xl">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <Clock size={24} />
                  </div>
                  <div className="ml-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Working Hours</p>
                    <p className="text-lg font-black text-blue-950">Mon - Sun: 8AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Area */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-80 border-8 border-white relative group">
              <iframe 
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112120.3204068361!2d77.3060232!3d28.577233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30cdd7f894!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-between">
                <span className="text-xs font-bold text-blue-950 flex items-center gap-2"><MapPin size={14} className="text-red-500" /> Sector 62, Noida, UP</span>
                <button className="text-[10px] font-black text-blue-600 uppercase">Directions</button>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: MODERN FORM (7 Cols) --- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-900"></div>
              
              <div className="mb-10">
                <h2 className="text-3xl font-black text-blue-950 mb-2">Request a Booking</h2>
                <p className="text-gray-400 font-medium">Fill the details below and get a callback within 30 minutes.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input type="text" required className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-blue-900 outline-none transition-colors peer placeholder-transparent" id="name" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-900 peer-focus:text-xs">Full Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" required className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-blue-900 outline-none transition-colors peer placeholder-transparent" id="email" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-900 peer-focus:text-xs">Email Address</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <select className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-blue-900 outline-none transition-colors appearance-none font-medium text-blue-950">
                      <option>General Inquiry</option>
                      <option>Deep Cleaning Request</option>
                      <option>Pest Control Service</option>
                      <option>Commercial Cleaning</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-4 text-gray-400" size={16} />
                    <label className="absolute left-0 -top-3.5 text-blue-900 text-xs font-bold uppercase tracking-widest">Service Type</label>
                  </div>
                  <div className="relative">
                    <input type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-blue-900 outline-none transition-colors peer placeholder-transparent" id="phone" placeholder="Phone" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-900 peer-focus:text-xs">Phone Number</label>
                  </div>
                </div>

                <div className="relative">
                  <textarea rows="4" className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-blue-900 outline-none transition-colors peer placeholder-transparent resize-none" id="msg" placeholder="Message"></textarea>
                  <label htmlFor="msg" className="absolute left-0 -top-3.5 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-900 peer-focus:text-xs">Your Requirements</label>
                </div>

                <button type="submit" className="w-full bg-blue-900 text-white font-black py-5 rounded-2xl shadow-2xl shadow-blue-900/30 hover:bg-yellow-500 hover:text-blue-950 transition-all flex items-center justify-center gap-3 group">
                  SEND YOUR REQUEST
                  <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">Common Questions</h4>
            <h2 className="text-4xl font-black text-blue-950">Quick Answers</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-blue-950"
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- WHATSAPP CTA --- */}
      <div className="bg-blue-50 py-16 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black text-blue-950 mb-6 uppercase tracking-tight">Need Instant Support?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-green-500/20 hover:scale-105 transition-transform group">
              <MessageCircle size={24} />
              CHAT ON WHATSAPP
            </button>
            <div className="flex items-center gap-2 text-blue-900/60 font-bold uppercase text-[10px] tracking-widest">
              <CheckCircle2 size={16} className="text-green-500" /> Typically replies in 5 minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;