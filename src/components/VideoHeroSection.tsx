
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/65 via-black/80 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
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
        <div className="video-overlay absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-20"></div>
        
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
