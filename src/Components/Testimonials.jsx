import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Amit Sharma",
      role: "Home Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "LPI-Housekeeping did an amazing job with my kitchen deep cleaning. Every corner is now grease-free. Their staff was professional, punctual, and highly attentive to detail.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "Apartment Resident",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "I booked their full house cleaning for my 3BHK. The results were beyond my expectations. It feels like a brand new home. Highly recommended for quality service!",
      rating: 5
    },
    {
      id: 3,
      name: "Rahul Khanna",
      role: "Office Manager",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      text: "Excellent sofa and carpet cleaning service! The stains that were there for months are completely gone. Very happy with the professional behavior and fair pricing.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        
        {/* --- Header --- */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-1 w-10 bg-yellow-500 rounded-full"></span>
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
              Happy Clients
            </h4>
            <span className="h-1 w-10 bg-yellow-500 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-6 leading-tight">
            What Our <span className="text-blue-700">Customers Say</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Real stories from families and businesses who trust LPI-Housekeeping for their daily and deep cleaning needs.
          </p>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 relative group flex flex-col items-center"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-6 bg-blue-900 p-4 rounded-2xl text-yellow-400 shadow-xl group-hover:bg-yellow-500 group-hover:text-blue-900 transition-colors duration-300">
                <Quote size={24} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} transition-transform group-hover:scale-110`} 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-8 italic text-lg relative z-10">
                "{review.text}"
              </p>

              {/* User Info Container */}
              <div className="mt-auto w-full pt-8 border-t border-gray-50 flex flex-col items-center">
                <div className="relative mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-2xl border-2 border-white shadow-md object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                    <CheckCircle size={12} fill="currentColor" />
                  </div>
                </div>
                
                <div className="text-center">
                  <h5 className="font-black text-blue-950 text-lg">{review.name}</h5>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Trust Badge Footer --- */}
        <div className="mt-20 py-10 px-8 bg-blue-900 rounded-[3rem] shadow-2xl shadow-blue-900/20 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-yellow-500 text-3xl font-black">5000+</span>
            <span className="text-blue-100 text-xs font-bold tracking-widest uppercase">Families Trusted</span>
          </div>
          <div className="w-px h-10 bg-blue-800 hidden md:block"></div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-yellow-500 text-3xl font-black">4.9/5</span>
            <span className="text-blue-100 text-xs font-bold tracking-widest uppercase">Google Rating</span>
          </div>
          <div className="w-px h-10 bg-blue-800 hidden md:block"></div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-yellow-500 text-3xl font-black">100%</span>
            <span className="text-blue-100 text-xs font-bold tracking-widest uppercase">Happy Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;