
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-background');
      if (hero) {
        (hero as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#brand-intro');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section min-h-[600px] relative overflow-hidden pt-16">
      {/* Subtle fade-in overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-20"></div>
      
      {/* Background Image (fallback for video) */}
      <div className="hero-background absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content relative z-10 flex items-center justify-center min-h-[600px] text-center text-white px-4">
        <div className="max-w-4xl animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            <span className="font-serif italic text-gold">Veroty</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
            Crafting Excellence
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light max-w-2xl mx-auto">
            Where timeless design meets uncompromising quality
          </p>
          <button 
            onClick={scrollToNext}
            className="btn-luxury inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg font-light tracking-wide"
          >
            Discover Our Story
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
