import React from 'react';
import { 
  MessageSquare, Star, ArrowRight, CheckCircle, Clock, 
  ShieldCheck, Zap, MapPin, Share2, Award, ThumbsUp 
} from 'lucide-react';

const BlogPage = () => {
  const WHATSAPP_NUMBER = "917505266931";

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
    }
  ];

  const handleWhatsApp = (title) => {
    const msg = `Hi LPI! I just read your case study about "${title}". I have a similar requirement. Can you help?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- Dynamic Header --- */}
      <div className="bg-blue-950 py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-800 text-yellow-500 text-xs font-black uppercase tracking-widest mb-6">
            <Award size={14} /> 100% Real Results
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Proof of <span className="text-yellow-500">Excellence</span>
          </h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We don't just clean; we restore. Explore our detailed case studies showcasing how we solve India's toughest home maintenance challenges.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- Main Blog Feed --- */}
          <div className="lg:w-2/3 space-y-24">
            {blogPosts.map((post) => (
              <article key={post.id} className="group border-b border-gray-100 pb-20 last:border-0">
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl mb-10">
                  <img 
                    src={post.mainImage} 
                    alt={post.title} 
                    className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Category & Share */}
                  <div className="absolute top-8 left-8 flex items-center gap-3">
                    <span className="bg-yellow-500 text-blue-950 font-black px-6 py-2.5 rounded-2xl text-[10px] uppercase tracking-widest shadow-xl">
                      {post.category}
                    </span>
                    <button className="p-2.5 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-blue-950 transition-all">
                      <Share2 size={18} />
                    </button>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4">
                    <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-3xl flex-1 min-w-[140px] shadow-2xl border border-white">
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">Project Duration</p>
                      <p className="text-blue-950 font-black text-lg flex items-center gap-2">
                        <Clock size={16} className="text-yellow-600" /> {post.stats.time}
                      </p>
                    </div>
                    <div className="bg-blue-600 px-8 py-4 rounded-3xl flex-1 min-w-[140px] shadow-2xl text-white border border-blue-500">
                      <p className="text-[10px] text-blue-100 font-black uppercase tracking-tighter">Verified Impact</p>
                      <p className="font-black text-lg flex items-center gap-2">
                        <ThumbsUp size={16} className="text-yellow-400" /> {post.stats.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <MapPin size={14} className="text-red-500" /> Site Location: {post.testimonial.author.split(',')[1]}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-blue-950 leading-tight">
                    {post.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-red-600 font-black uppercase text-xs tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> The Challenge
                      </div>
                      <p className="text-gray-500 leading-relaxed text-sm bg-red-50/50 p-6 rounded-[2rem] border border-red-100/50">
                        {post.challenge}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-green-600 font-black uppercase text-xs tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span> The LPI Solution
                      </div>
                      <p className="text-gray-500 leading-relaxed text-sm bg-green-50/50 p-6 rounded-[2rem] border border-green-100/50">
                        {post.solution}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="bg-gray-50 rounded-[3rem] p-10 relative overflow-hidden group/quote">
                    <MessageSquare className="absolute -right-4 -bottom-4 text-blue-100 scale-150 group-hover/quote:text-blue-200 transition-colors" size={120} />
                    <div className="relative z-10">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-xl font-medium text-blue-900 italic leading-relaxed mb-8">
                        "{post.testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white font-black">
                          {post.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-blue-950 text-sm uppercase">{post.testimonial.author.split(',')[0]}</p>
                          <p className="text-xs text-gray-400 font-bold">{post.testimonial.author.split(',')[1]}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleWhatsApp(post.title)}
                    className="flex items-center gap-4 bg-blue-950 text-white px-10 py-5 rounded-3xl font-black text-sm hover:bg-green-600 transition-all shadow-xl shadow-blue-900/20"
                  >
                    GET SIMILAR RESULTS <ArrowRight size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* --- Sidebar --- */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="sticky top-10 space-y-8">
              {/* Trust Badge Card */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full blur-[80px] opacity-20"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Transform Your Home Next?</h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed opacity-80">
                  Join 5,000+ happy homeowners in Delhi NCR. Get a free, no-obligation inspection of your property.
                </p>
                <button className="w-full bg-yellow-500 text-blue-950 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                  Schedule Free Inspection
                </button>
              </div>

              {/* Verified Locations */}
              <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                <h3 className="text-xl font-black text-blue-950 mb-6">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {['Noida', 'Greater Noida', 'Gurgaon', 'Delhi', 'Ghaziabad', 'Faridabad'].map((loc) => (
                    <span key={loc} className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-500 hover:text-blue-600 hover:border-blue-600 cursor-default transition-all">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Quick Links */}
              <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black text-blue-950 mb-6">Categories</h3>
                <div className="space-y-3">
                  {['Deep Cleaning', 'Pest Control', 'Painting', 'Upholstery'].map((cat) => (
                    <div key={cat} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-gray-500 font-bold group-hover:text-blue-600 transition-colors">{cat}</span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* --- Floating Bottom CTA --- */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg">
        <div className="bg-white/80 backdrop-blur-2xl p-4 rounded-[2.5rem] shadow-2xl border border-white flex items-center justify-between">
           <div className="flex items-center gap-3 ml-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <p className="text-blue-950 font-black text-xs uppercase tracking-widest">Experts Online</p>
           </div>
           <button 
            onClick={() => handleWhatsApp("General Inquiry")}
            className="bg-green-600 text-white px-8 py-4 rounded-[1.5rem] font-black text-xs hover:bg-green-700 transition-all"
           >
             WHATSAPP US
           </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;