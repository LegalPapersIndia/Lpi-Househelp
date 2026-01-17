import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, MessageCircle, Clock, 
  CheckCircle2, ChevronDown, ShieldCheck, Headphones 
} from 'lucide-react';

const ContactUs = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const whatsappNumber = "917505266931";

  const faqs = [
    { q: "How quickly can I get a cleaning slot?", a: "Typically, we can schedule a team within 24-48 hours. For urgent move-in/move-out requests, please use our WhatsApp support for priority booking." },
    { q: "Do I need to provide cleaning supplies?", a: "No, our team arrives fully equipped with industrial-grade vacuum cleaners, steam machines, and eco-friendly Taski chemicals." },
    { q: "Is your staff background verified?", a: "Yes, 100% of our staff undergoes rigorous police verification, Aadhar mapping, and professional training before entering any site." },
    { q: "Are there any hidden charges?", a: "The quote provided after our inspection (or via phone based on your description) is final. No hidden travel or material costs apply." }
  ];

  const handleWhatsApp = () => {
    const msg = "Hi LPI Housekeeping! I have a query regarding your services. Please connect me to a supervisor.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚀 Request Received! Our supervisor will call you within 30 minutes.");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-950 py-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900 border border-blue-800 text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Headphones size={14} /> Customer Support 24/7
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none">
            Let's Start <span className="text-yellow-500">Fresh.</span>
          </h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-xl font-light">
            Ready for a spotless home? Reach out today for a customized quote or to book a professional site inspection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto -mt-20 px-6 lg:px-8 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT SIDE: INFO & TRUST (5 Cols) --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50">
              <h3 className="text-2xl font-black text-blue-950 mb-8 flex items-center gap-3">
                Direct Connect <div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: <Phone size={22} />, label: "Call Anytime", val: "+91 75052 66931", href: "tel:+917505266931", color: "blue" },
                  { icon: <Mail size={22} />, label: "Email Support", val: "info@lpi-housekeeping.com", href: "mailto:info@lpi-housekeeping.com", color: "yellow" },
                  { icon: <Clock size={22} />, label: "Working Hours", val: "Mon - Sun: 8AM - 8PM", color: "green" }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} className={`flex items-center p-5 rounded-3xl transition-all ${item.href ? 'hover:scale-105 border border-transparent hover:border-gray-100' : ''}`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center 
                      ${item.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                        item.color === 'yellow' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'}`}>
                      {item.icon}
                    </div>
                    <div className="ml-5">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-black text-blue-950">{item.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Process Diagram Placeholder */}
            <div className="p-8 bg-blue-900 rounded-[3rem] text-white relative overflow-hidden">
                <ShieldCheck className="absolute -bottom-6 -right-6 text-white/10" size={150} />
                <h4 className="font-black text-lg mb-4">Our Response Promise</h4>
                
                <ul className="space-y-3 relative z-10">
                    <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-yellow-500" size={18} /> 30 Min Initial Callback</li>
                    <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-yellow-500" size={18} /> Digital Quote Generation</li>
                    <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-yellow-500" size={18} /> Same-Day Slot Confirmation</li>
                </ul>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTACT FORM (7 Cols) --- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%]"></div>
              
              <div className="mb-12">
                <h2 className="text-4xl font-black text-blue-950 mb-3">Get a Free Quote</h2>
                <p className="text-gray-400 font-medium">No hidden fees. Professional standards guaranteed.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="text" required className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-blue-900 outline-none transition-all peer placeholder-transparent" id="name" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-gray-400 text-[10px] font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-blue-900">Full Name</label>
                  </div>
                  <div className="relative">
                    <input type="tel" required className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-blue-900 outline-none transition-all peer placeholder-transparent" id="phone" placeholder="Phone" />
                    <label htmlFor="phone" className="absolute left-0 -top-4 text-gray-400 text-[10px] font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-blue-900">Phone Number</label>
                  </div>
                </div>

                <div className="relative">
                    <select className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-blue-900 outline-none appearance-none font-bold text-blue-950">
                      <option>Full House Deep Cleaning</option>
                      <option>Kitchen Degreasing</option>
                      <option>Sofa/Upholstery Care</option>
                      <option>Bathroom Sanitation</option>
                      <option>Commercial/Office Maintenance</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-5 text-gray-400" size={16} />
                    <label className="absolute left-0 -top-4 text-blue-900 text-[10px] font-black uppercase tracking-widest">Select Service</label>
                </div>

                <div className="relative">
                  <textarea rows="3" className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-blue-900 outline-none transition-all peer placeholder-transparent resize-none" id="msg" placeholder="Message"></textarea>
                  <label htmlFor="msg" className="absolute left-0 -top-4 text-gray-400 text-[10px] font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-blue-900">Tell us about your property (e.g. 3BHK, Size)</label>
                </div>

                <button type="submit" className="w-full bg-blue-950 text-white font-black py-6 rounded-[2rem] shadow-2xl hover:bg-yellow-500 hover:text-blue-950 transition-all flex items-center justify-center gap-4 group uppercase tracking-widest text-sm">
                  Request Callback
                  <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">Everything you need to know</h2>
          </div>
          
          <div className="grid gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className={`rounded-3xl border transition-all duration-300 ${activeFaq === i ? 'border-blue-200 bg-blue-50/50 shadow-lg' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left font-black text-blue-950 text-lg"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${activeFaq === i ? 'rotate-180 bg-blue-950 text-white border-blue-950' : 'text-gray-300 border-gray-100'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-60 pb-8' : 'max-h-0'}`}>
                  <p className="text-gray-500 leading-relaxed font-medium">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- WHATSAPP STICKY FOOTER --- */}
      <div className="bg-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter">Skip the form? Chat with us.</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-4 bg-green-500 text-white px-12 py-5 rounded-[2rem] font-black text-lg shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:scale-105 transition-all active:scale-95"
            >
              <MessageCircle size={28} />
              WHATSAPP US NOW
            </button>
            <div className="flex items-center gap-3">
               <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-950 bg-gray-300 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Support Team" />
                    </div>
                  ))}
               </div>
               <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">3 Experts Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;