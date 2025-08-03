import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Masonry from '@/Animations/Masonry/Masonry';
import ScrollVelocity from '@/Animations/ScrollVelocity/ScrollVelocity';


// Fungsi untuk tinggi random antara 180–400px
function getRandomHeight() {
  return Math.floor(Math.random() * 220) + 180;
}

const MansorySection = () => {
  useEffect(() => {
    // Adjusted parallax effect with reduced multiplier
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-background');
      if (hero) {
        // Reduced parallax multiplier from 0.5 to 0.2 to prevent image from moving too fast
        (hero as HTMLElement).style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToNext = () => {
    const nextSection = document.querySelector('#brand-intro');
    nextSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Luxury furniture images data - tinggi random
  const luxuryFurnitureItems = [
    {
      id: '1',
      img: '/src/assets/furniture/chair-1.jpg',
      url: '/products/elegance-chair',
      height: getRandomHeight()
    },
    {
      id: '2',
      img: '/src/assets/furniture/table-1.jpg',
      url: '/products/modern-dining-table',
      height: getRandomHeight()
    },
    {
      id: '3',
      img: '/src/assets/furniture/chair-2.jpg',
      url: '/products/comfort-lounge',
      height: getRandomHeight()
    },
    {
      id: '4',
      img: '/src/assets/furniture/table-2.jpg',
      url: '/products/executive-desk',
      height: getRandomHeight()
    },
    {
      id: '5',
      img: '/src/assets/furniture/bench-1.jpg',
      url: '/products/garden-bench',
      height: getRandomHeight()
    },
    {
      id: '6',
      img: '/src/assets/furniture/chair-3.jpg',
      url: '/products/studio-chair',
      height: getRandomHeight()
    },
    {
      id: '7',
      img: '/src/assets/furniture/chair-4.jpg',
      url: '/products/designer-chair',
      height: getRandomHeight()
    },
    {
      id: '8',
      img: '/src/assets/furniture/bench-2.jpg',
      url: '/products/modern-bench',
      height: getRandomHeight()
    },
    {
      id: '9',
      img: '/src/assets/furniture/chair-1.jpg',
      url: '/products/elegance-chair-2',
      height: getRandomHeight()
    },
    {
      id: '10',
      img: '/src/assets/furniture/table-1.jpg',
      url: '/products/modern-dining-table-2',
      height: getRandomHeight()
    },
    {
      id: '11',
      img: '/src/assets/furniture/chair-2.jpg',
      url: '/products/comfort-lounge-2',
      height: getRandomHeight()
    },
    {
      id: '12',
      img: '/src/assets/furniture/table-2.jpg',
      url: '/products/executive-desk-2',
      height: getRandomHeight()
    },
    {
      id: '13',
      img: '/src/assets/furniture/bench-1.jpg',
      url: '/products/garden-bench-2',
      height: getRandomHeight()
    },
    {
      id: '14',
      img: '/src/assets/furniture/chair-3.jpg',
      url: '/products/studio-chair-2',
      height: getRandomHeight()
    },
    {
      id: '15',
      img: '/src/assets/furniture/chair-4.jpg',
      url: '/products/designer-chair-2',
      height: getRandomHeight()
    },
    {
      id: '16',
      img: '/src/assets/furniture/bench-2.jpg',
      url: '/products/modern-bench-2',
      height: getRandomHeight()
    },
    {
      id: '17',
      img: '/src/assets/furniture/chair-1.jpg',
      url: '/products/elegance-chair-3',
      height: getRandomHeight()
    },
    {
      id: '18',
      img: '/src/assets/furniture/table-1.jpg',
      url: '/products/modern-dining-table-3',
      height: getRandomHeight()
    },
    {
      id: '19',
      img: '/src/assets/furniture/chair-2.jpg',
      url: '/products/comfort-lounge-3',
      height: getRandomHeight()
    },
    {
      id: '20',
      img: '/src/assets/furniture/table-2.jpg',
      url: '/products/executive-desk-3',
      height: getRandomHeight()
    }
  ];

  // Auto-scroll on hover logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = scrollRef.current;
    if (!container) return;
    const { top, height } = container.getBoundingClientRect();
    const mouseY = e.clientY - top;
    const threshold = 60; // px dari atas/bawah untuk trigger scroll
    const scrollSpeed = 10; // px per event
    if (mouseY < threshold) {
      container.scrollBy({ top: -scrollSpeed, behavior: 'smooth' });
    } else if (mouseY > height - threshold) {
      container.scrollBy({ top: scrollSpeed, behavior: 'smooth' });
    }
  };

  // Mobile-first auto-scroll with 3-second idle detection
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    let direction = 1; // 1: down, -1: up
    const scrollStep = 1; // px per interval
    let idleTimer: NodeJS.Timeout;
    let scrollInterval: NodeJS.Timeout;
    let isUserInteracting = false;
    
    const startAutoScroll = () => {
      if (scrollInterval) clearInterval(scrollInterval);
      scrollInterval = setInterval(() => {
        if (!container || isUserInteracting) return;
        
        if (direction === 1) {
          if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
            direction = -1;
          } else {
            container.scrollBy({ top: scrollStep, behavior: 'smooth' });
          }
        } else {
          if (container.scrollTop <= 10) {
            direction = 1;
          } else {
            container.scrollBy({ top: -scrollStep, behavior: 'smooth' });
          }
        }
      }, 30);
    };
    
    const stopAutoScroll = () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
    
    const resetIdleTimer = () => {
      isUserInteracting = true;
      stopAutoScroll();
      
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isUserInteracting = false;
        startAutoScroll();
      }, 3000); // 3 seconds idle
    };
    
    // Event listeners for user interaction
    const events = ['touchstart', 'touchmove', 'touchend', 'scroll', 'mouseenter', 'mousemove'];
    events.forEach(event => {
      container.addEventListener(event, resetIdleTimer, { passive: true });
    });
    
    // Start auto scroll initially after 3 seconds
    idleTimer = setTimeout(() => {
      isUserInteracting = false;
      startAutoScroll();
    }, 3000);
    
    return () => {
      if (idleTimer) clearTimeout(idleTimer);
      if (scrollInterval) clearInterval(scrollInterval);
      events.forEach(event => {
        container.removeEventListener(event, resetIdleTimer);
      });
    };
  }, []);

  return <section id="masonry" className="section-seamless bg-white py-6">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-heading-1 mb-6 text-primary">
          <span className="font-serif italic text-gold">Our Collection</span>
        </h2>
        <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
          Discover our curated selection of luxury furniture pieces, each crafted with precision and timeless elegance
        </p>
        <ScrollVelocity
          texts={["Luxury Premium Elegance Excellence"]}
          velocity={30}
          className="text-black/15 font-serif italic mt-4"
          scrollerClassName="text-2xl md:text-4xl"
        />
      </div>
      {/* <div className="absolute bottom-20 left-0 right-0 z-30">
        <ScrollVelocity
          texts={["Luxury Premium Elegance Excellence"]}
          velocity={30}
          className="text-white/30 font-serif italic"
          scrollerClassName="text-3xl md:text-5xl"
        />
      </div> */}

      {/* Masonry Grid */}
      <div className="container mx-auto px-4">
        <div
          ref={scrollRef}
          className="max-h-[80vh] overflow-y-auto w-full scrollbar-none bg-white rounded-[30px]"
          onMouseMove={handleMouseMove}
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="h-[900px] w-full bg-white rounded-[30px]">
            <Masonry items={luxuryFurnitureItems} ease="power3.out" duration={1.0} stagger={0.2} animateFrom="random" scaleOnHover={true} hoverScale={1.05} blurToFocus={true} colorShiftOnHover={true} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12" onClick={scrollToNext}>
        <div className="text-primary animate-bounce cursor-pointer hover:text-gold transition-colors">
          
        </div>
      </div>
    </section>;
};

export default MansorySection;