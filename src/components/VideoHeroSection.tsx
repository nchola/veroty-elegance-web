
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ScrollVelocity } from '@/Animations/ScrollVelocity/ScrollVelocity';
import TextPressure from '@/Animations/TextAnimations/TextPressure/TextPressure';

const videos = [
  '/mainhero.mp4',
  '/mainhero2.mp4',
  '/mainhero3.mp4'
];

const VideoHeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 8 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % videos.length);

  const scrollToNext = () => {
    const nextSection = document.querySelector('.hero-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="video-hero-section h-screen relative overflow-hidden">
      {/* Video Carousel */}
      
      {/* Strong dark overlay to handle white video content */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.8) 100%)'
        }}
      />
      
      {/* Additional solid dark overlay for header area */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-15"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.7) 100%)'
        }}
      />
      
      {/* Top header gradient - very strong */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-black/99 via-black/98 to-transparent pointer-events-none z-20" />
      
      {/* Main dark overlay with subtle texture effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-25"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)'
        }}
      />
      
      {/* Additional texture layer for depth */}
      <div 
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/85 via-black/95 to-transparent pointer-events-none z-20" />
      
      {/* Additional top overlay to eliminate white areas */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/99 via-black/95 to-transparent pointer-events-none z-35" />

      <div className="video-background absolute inset-0 bg-black">
        {videos.map((src, idx) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="video-overlay absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-20"></div>
        
        {/* Carousel Controls */}
        
        {/* Indicators */}
        
      </div>

      

      {/* TextPressure di bawah-tengah section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <TextPressure 
          text="Veroty" 
          fontFamily="Playfair Display, serif" 
          textColor="#ffffff39" 
          className="font-serif italic"
          minFontSize={40} // mobile
        />
        <style>{`
          @media (min-width: 768px) {
            .text-pressure-title {
              font-size: 96px !important;
            }
          }
        `}</style>
      </div>
      
      
    </section>
  );
};

export default VideoHeroSection;
