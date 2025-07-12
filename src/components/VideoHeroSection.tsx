import { ChevronDown } from 'lucide-react';
import { ScrollVelocity } from '@/TextAnimations/ScrollVelocity/ScrollVelocity';

const VideoHeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('.hero-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="video-hero-section h-screen relative overflow-hidden">
      {/* Background Video */}
      <div className="video-background absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/mainhero.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Minimal Content Overlay */}
      <div className="video-content relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-6xl px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-wider">
            <span className="font-serif italic text-gold">Veroty</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 opacity-90 font-light tracking-wide">
            Luxury Redefined
          </p>
        </div>
      </div>

      {/* Scroll Velocity Text Animation at bottom */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <ScrollVelocity
          texts={["Luxury", "Premium", "Elegance", "Excellence"]}
          velocity={30}
          className="text-white/20 font-serif italic"
          scrollerClassName="text-3xl md:text-5xl"
        />
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

export default VideoHeroSection;
