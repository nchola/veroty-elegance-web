import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ScrollVelocity } from '@/TextAnimations/ScrollVelocity/ScrollVelocity';

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
        {/* Carousel Controls */}
        <button onClick={goToPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full">
          <ChevronRight className="w-8 h-8" />
        </button>
        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {videos.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === activeIndex ? 'bg-white' : 'bg-white/40'} block`}
            />
          ))}
        </div>
      </div>

      {/* Minimal Content Overlay */}
      <div className="video-content relative z-30 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-6xl px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-wider">
            <span className="font-serif italic text-gold">Veroty</span>
          </h1>
          <p className="text-2xl text-white/40 md:text-3xl mb-12 opacity-90 font-serif italic tracking-wide">
            Luxury Redefined
          </p>
        </div>
      </div>

      {/* Scroll Velocity Text Animation at bottom */}
      <div className="absolute bottom-20 left-0 right-0 z-30">
        <ScrollVelocity
          texts={["Luxury Premium Elegance Excellence"]}
          velocity={30}
          className="text-white/30 font-serif italic"
          scrollerClassName="text-3xl md:text-5xl"
        />
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer z-30"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default VideoHeroSection;
