
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const videos = [
  '/foldablechair.mp4',
  '/foldablesofa.mp4',
  '/foldablesofa2.mp4'
];

const ExtendableTablesSection = () => {
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

  return (
    <section className="section m-2024-split py-16 bg-white">
      <div className="split--1">
        <div className="flex">
          {/* Video Section - Left Side */}
          <div className="flex-1 relative">
            <div className="video-background relative bg-black h-[500px]">
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
              
              {/* Carousel Controls */}
              <button onClick={goToPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full">
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {videos.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === activeIndex ? 'bg-white' : 'bg-white/40'} block cursor-pointer`}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Text Content - Right Side */}
          <div className="flex-1">
            <div className="m-2024-box p-12 lg:p-16">
              <div className="tit text-4xl lg:text-5xl font-light mb-6 text-gray-900 font-serif leading-tight">
                must have: extendable tables
              </div>
              <div className="txt text-lg text-gray-600 leading-relaxed mb-8">
                For a small home or a spacious living room, for a compact dining area or a significant open space: an extendable table is always an excellent choice.
              </div>
              <div className="cta-arr left">
                <a 
                  href="#brand-intro" 
                  className="inline-flex items-center text-gray-900 hover:text-gold transition-colors duration-300 font-medium"
                >
                  Discover more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtendableTablesSection;
