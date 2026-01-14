import React from 'react';
import { MessageSquare, Star, ArrowRight, CheckCircle, Clock, ShieldCheck, Zap } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Transforming a 5-Year Old Kitchen to Brand New",
      category: "Deep Cleaning",
      date: "Jan 10, 2026",
      mainImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      stats: { time: "4.5 Hours", impact: "99% Grease Removed" },
      challenge: "Heavy oil grease on chimney, carbon deposits behind the stove, and deep yellow stains on white marble tiles.",
      solution: "Multi-stage degreasing using industrial-grade eco-friendly agents followed by high-pressure steam scrubbing at 120°C.",
      testimonial: {
        text: "I couldn't believe it was my own kitchen! The LPI team worked for 4 hours and the results are magical. Even the exhaust fan looks brand new.",
        author: "Mrs. Shalini, Noida",
        rating: 5
      }
    },
    {
      id: 2,
      title: "Full Villa Sanitization & Premium Restoration",
      category: "Full House",
      date: "Jan 05, 2026",
      mainImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800",
      stats: { time: "2 Days", impact: "Full Restoration" },
      challenge: "A 4BHK Villa vacant for 2 years. Significant dust accumulation, termite threats, and faded wall paint.",
      solution: "3-Step Deep cleaning, specialized anti-termite piping treatment, and two coats of premium Royal Emulsion painting.",
      testimonial: {
        text: "Complete peace of mind. They handled everything from heavy cleaning to the final paint stroke. My villa is now ready to move in.",
        author: "Mr. Kapoor, Gurgaon",
        rating: 5
      }
    },
    {
      id: 3,
      title: "Removing 2-Year-Old Coffee Stains from Suede Sofa",
      category: "Upholstery",
      date: "Dec 28, 2025",
      mainImage: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800",
      stats: { time: "90 Mins", impact: "Stain-Free Fabric" },
      challenge: "Deep-set coffee and ink stains on a premium light-colored suede sofa set.",
      solution: "PH-balanced foam shampooing and injection-extraction technology to pull dirt from 3 inches deep without damaging fabric.",
      testimonial: {
        text: "I was about to throw this sofa away. LPI saved me thousands of rupees. The fabric feels soft and smells amazing.",
        author: "Ananya Dixit, Delhi",
        rating: 5
      }
    },
    {
      id: 4,
      title: "Zero-Odour Pest Control for a High-End Restaurant",
      category: "Pest Control",
      date: "Dec 20, 2025",
      mainImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      stats: { time: "3 Hours", impact: "Pest-Free Zone" },
      challenge: "Persistent cockroach infestation in the kitchen area of a busy Italian restaurant.",
      solution: "Advanced Gel Baiting system and pheromone traps that require no kitchen shutdown or strong chemical smells.",
      testimonial: {
        text: "The best part was we didn't have to close the restaurant. It's been 3 months and we haven't seen a single pest.",
        author: "Chef Marco, Connaught Place",
        rating: 5
      }
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- Dynamic Header --- */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500 text-blue-950 text-xs font-black uppercase tracking-widest mb-6">
            <Zap size={14} fill="currentColor" /> Case Studies
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Our Work <span className="text-yellow-500">Stories</span></h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Real homes, real dirt, and real professional transformations. Explore how we solve the toughest cleaning challenges.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- Main Blog Feed --- */}
          <div className="lg:w-2/3 space-y-32">
            {blogPosts.map((post) => (
              <div key={post.id} className="group flex flex-col gap-10">
                
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img 
                    src={post.mainImage} 
                    alt={post.title} 
                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-yellow-500 text-blue-900 font-black px-5 py-2 rounded-xl text-xs uppercase tracking-tighter shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  {/* Quick Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-[1.5rem] flex justify-around items-center border border-white/20">
                    <div className="text-center">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Time Taken</p>
                      <p className="text-blue-900 font-black">{post.stats.time}</p>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Result</p>
                      <p className="text-green-600 font-black">{post.stats.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <Clock size={14} /> {post.date}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-blue-950 leading-tight group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        <CheckCircle size={18} />
                      </div>
                      <p className="text-gray-600 text-sm"><strong className="text-blue-950 block mb-1">The Challenge</strong> {post.challenge}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle size={18} />
                      </div>
                      <p className="text-gray-600 text-sm"><strong className="text-blue-950 block mb-1">The LPI Solution</strong> {post.solution}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-950 rounded-[2rem] p-8 text-white relative shadow-xl shadow-blue-900/10">
                    <MessageSquare className="absolute top-6 right-8 opacity-10 text-yellow-500" size={60} />
                    <div className="flex gap-1 mb-4">
                      {[...Array(post.testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-lg italic leading-relaxed text-blue-100 mb-6">"{post.testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-1 bg-yellow-500 rounded-full"></div>
                      <span className="font-bold uppercase tracking-widest text-xs text-yellow-500">{post.testimonial.author}</span>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-3 bg-blue-100 text-blue-900 px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-900 hover:text-white transition-all transform hover:-translate-y-1">
                    View Project Gallery <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* --- Sidebar --- */}
          <aside className="lg:w-1/3 space-y-10">
            {/* Trust Box */}
            <div className="bg-yellow-500 p-10 rounded-[2.5rem] text-blue-950 relative overflow-hidden">
              <ShieldCheck size={120} className="absolute -bottom-10 -right-10 opacity-10 rotate-12" />
              <h3 className="text-2xl font-black mb-4">Want these results for your home?</h3>
              <p className="mb-8 font-medium opacity-90">Book a slot today and get a free deep-cleaning inspection worth ₹499.</p>
              <button className="w-full bg-blue-950 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-900/20 hover:scale-105 transition-transform">
                Book Inspection Now
              </button>
            </div>

            {/* Service Categories */}
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
              <h3 className="text-xl font-black text-blue-950 mb-6">Filter by Service</h3>
              <div className="space-y-3">
                {['Deep Cleaning', 'Pest Control', 'Full House', 'Upholstery', 'Painting'].map((cat) => (
                  <button key={cat} className="flex items-center justify-between w-full p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-500 hover:text-blue-700 font-bold transition-all group">
                    {cat}
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100">
              <h3 className="text-xl font-black text-blue-950 mb-2">Cleaning Tips</h3>
              <p className="text-gray-500 text-sm mb-6">Get weekly expert tips on home maintenance and hygiene.</p>
              <input type="email" placeholder="Your email address" className="w-full p-4 rounded-xl border border-blue-200 mb-4 focus:ring-2 focus:ring-blue-500 outline-none" />
              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all">
                Subscribe
              </button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;