
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

      {/* Minimal Content Overlay */}
      <div className="video-content relative z-30 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-6xl px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-wider">
            <TextPressure 
              text="Veroty" 
              fontFamily="Playfair Display, serif" 
              textColor="#ffffff99" // atau "rgba(255,255,255,0.6)"
              className="font-serif italic"
              minFontSize={60} // mobile
            />
            <style>{`
              @media (min-width: 768px) {
                .text-pressure-title {
                  font-size: 96px !important;
                }
              }
            `}</style>
          </h1>
          <p className="text-2xl text-white/55 md:text-3xl mb-12 opacity-90 font-serif italic tracking-wide">
            Luxury Redefined
          </p>
        </div>
      </div>

      {/* Scroll Velocity Text Animation at bottom */}
      {/* <div className="absolute bottom-20 left-0 right-0 z-30">
        <ScrollVelocity
          texts={["Luxury Premium Elegance Excellence"]}
          velocity={30}
          className="text-white/30 font-serif italic"
          scrollerClassName="text-3xl md:text-5xl"
        />
      </div> */}
      
      
    </section>
  );
};

export default VideoHeroSection;
