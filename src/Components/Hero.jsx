import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const slides = [
    {
      url: 'https://techsquadteam.com/assets/profile/blogimages/6628090e9797d9828a9f9032cd705113.jpg',
      title: 'Expert Kitchen Cleaning',
      subtitle: 'HYGIENE FIRST',
      desc: 'We make every corner of your kitchen grease-free and sparkling clean.'
    },
    {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600',
      title: 'Pristine Bathroom Sanitation',
      subtitle: 'GERM-FREE LIVING',
      desc: 'Deep cleaning and disinfection for a safer, healthier bathroom environment.'
    },
    {
      url: 'https://smartzero.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-01-at-12.04.10-PM-1024x682.jpeg',
      title: 'Professional Sofa & Upholstery',
      subtitle: 'RESTORE COMFORT',
      desc: 'Removing deep-seated stains and dust to bring your furniture back to life.'
    },
    {
      url: 'https://media.designcafe.com/wp-content/uploads/2024/08/18064403/simple-wall-painting-ideas.jpg',
      title: 'Complete Home Painting',
      subtitle: 'FRESH PERSPECTIVE',
      desc: 'Give your home a premium new look with our expert painting services.'
    }, 
    {
      url: 'https://5.imimg.com/data5/SELLER/Default/2022/3/PZ/LJ/FE/11447869/corporate-housekeeping-service-provider-500x500.jpg',
      title: 'corporate housekeeping',
      subtitle: 'FRESH PERSPECTIVE',
      desc: 'Give your corporate space a premium new look with our services.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = useCallback((index) => {
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    handleSlideChange(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    handleSlideChange(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative h-[650px] md:h-[800px] w-full overflow-hidden group">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            style={{ backgroundImage: `url(${slide.url})` }}
            className={`w-full h-full bg-center bg-cover transition-transform duration-[6000ms] ease-out ${
              index === currentIndex ? "scale-110" : "scale-100"
            }`}
          />
          {/* Overlay - Dark Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          {/* Subtitle with Icon */}
          <div className="flex items-center gap-2 mb-4 animate-bounce-subtle">
            <Sparkles className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-bold tracking-[0.3em] text-sm uppercase">
              {slides[currentIndex].subtitle}
            </span>
          </div>

          {/* Title - Key prop forces re-animation on change */}
          <h1 
            key={`title-${currentIndex}`}
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-up"
          >
            {slides[currentIndex].title.split(' ').map((word, i) => (
              <span key={i} className={word === "Expert" || word === "Professional" ? "text-yellow-500" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p 
            key={`desc-${currentIndex}`}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed animate-fade-in-delayed"
          >
            {slides[currentIndex].desc}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-delayed">
            <Link to="/services">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-950 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-yellow-500/20">
              Explore Services <ArrowRight size={20} />
            </button>
            </Link>
             <Link to="/contact"><button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Contact Us
            </button></Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-yellow-500 hover:text-blue-900 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-yellow-500 hover:text-blue-900 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Bottom Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex 
                ? "w-12 h-2.5 bg-yellow-500" 
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;