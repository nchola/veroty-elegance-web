
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ScrollVelocity } from '@/Animations/ScrollVelocity/ScrollVelocity';
import ScrollReveal from '@/Animations/TextAnimations/ScrollReveal/ScrollReveal';

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
      </div>

      {/* Minimal Content Overlay */}
      <div className="video-content relative z-30 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-6xl px-4">
          <ScrollReveal 
            baseOpacity={0.1}
            baseRotation={3}
            blurStrength={5}
            containerClassName="mb-8"
            textClassName="text-6xl md:text-8xl font-light tracking-wider font-serif italic text-gold"
            rotationEnd="bottom center"
            wordAnimationEnd="bottom center"
          >
            Veroty
          </ScrollReveal>
          
          <ScrollReveal 
            baseOpacity={0.05}
            baseRotation={1}
            blurStrength={3}
            containerClassName=""
            textClassName="text-2xl text-white/40 md:text-3xl opacity-90 font-serif italic tracking-wide"
            rotationEnd="bottom center"
            wordAnimationEnd="bottom center"
          >
            Luxury Redefined
          </ScrollReveal>
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
    </section>
  );
};

export default VideoHeroSection;
