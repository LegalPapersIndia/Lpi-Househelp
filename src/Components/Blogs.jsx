import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      category: 'Cleaning Tips',
      title: '10 Tips to Keep Your Kitchen Sparkling Clean',
      excerpt: 'Maintain a hygienic kitchen with these simple daily habits and eco-friendly solutions that save time.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
      date: 'Oct 12, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      category: 'Home Hygiene',
      title: 'Why Deep Cleaning is Essential Once a Month',
      excerpt: 'Standard cleaning is great, but deep cleaning removes allergens and bacteria hidden in deep corners.',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800',
      date: 'Oct 08, 2025',
      readTime: '7 min read'
    },
    {
      id: 3,
      category: 'Pest Control',
      title: 'How to Prevent Termites During Monsoon Season',
      excerpt: 'Protect your wooden furniture from moisture and termites with our expert seasonal prevention guide.',
      image: 'https://deemakroko.com/wp-content/uploads/2025/08/Every-Strong-Home-Starts-with-a-Silent-Guardian-Below.-1080-x-1080-px-1200-x-630-px-1.jpg',
      date: 'Oct 05, 2025',
      readTime: '4 min read'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
              <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-sm">
                Our Journal
              </h4>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 leading-tight">
              Latest Insights & <br /> 
              <span className="text-blue-700/80">Cleaning Guides</span>
            </h2>
          </div>
          
          <Link 
            to="/blog" 
            className="group flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl border border-blue-100 shadow-sm hover:shadow-md hover:bg-blue-900 hover:text-white transition-all duration-300 w-fit"
          >
            View All Posts 
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="bg-white/95 backdrop-blur-sm text-blue-900 text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                {/* Meta Info */}
                <div className="flex items-center gap-5 text-gray-400 text-xs font-semibold mb-5">
                  <div className="flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
                    <Calendar size={14} className="text-yellow-500" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-yellow-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-8 line-clamp-3 text-sm md:text-base">
                  {post.excerpt}
                </p>

                {/* Footer Action */}
                <div className="mt-auto pt-6 border-t border-gray-50">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="flex items-center justify-between text-blue-900 font-bold group/link"
                  >
                    <span className="relative">
                      Read Article
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover/link:w-full transition-all duration-300"></span>
                    </span>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover/link:bg-yellow-500 group-hover/link:text-blue-900 transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;