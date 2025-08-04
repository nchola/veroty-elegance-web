import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';
import Masonry from '@/Animations/Masonry/Masonry';
import ScrollVelocity from '@/Animations/ScrollVelocity/ScrollVelocity';
import { throttle } from '@/utils/performance';

// Fungsi untuk tinggi random antara 180–400px (seperti sebelumnya)
function getRandomHeight() {
  return Math.floor(Math.random() * 220) + 180;
}

const MansorySection = () => {
  const [visibleItems, setVisibleItems] = useState(12); // Mulai dengan 12 items
  const [isLoading, setIsLoading] = useState(false);
  const masonryRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Throttled parallax effect for better performance
    const handleScroll = throttle(() => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-background');
      if (hero) {
        (hero as HTMLElement).style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
      }
    }, 16); // ~60fps
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#brand-intro');
    nextSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Luxury furniture images data dengan tinggi random (seperti sebelumnya)
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

  // Natural infinite scroll dengan Intersection Observer
  const loadMoreItems = useCallback(() => {
    if (isLoading || visibleItems >= luxuryFurnitureItems.length) return;
    
    setIsLoading(true);
    
    // Reduced loading delay for better UX
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + 4, luxuryFurnitureItems.length)); // Load 4 instead of 6
      setIsLoading(false);
    }, 300); // Reduced from 800ms to 300ms
  }, [isLoading, visibleItems, luxuryFurnitureItems.length]);

  // Intersection Observer untuk natural infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading) {
            loadMoreItems();
          }
        });
      },
      {
        rootMargin: '200px', // Increased from 100px for earlier loading
        threshold: 0.1
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreItems, isLoading]);

  // Auto-scroll on hover logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = scrollRef.current;
    if (!container) return;
    const { top, height } = container.getBoundingClientRect();
    const mouseY = e.clientY - top;
    const threshold = 60;
    const scrollSpeed = 10;
    if (mouseY < threshold) {
      container.scrollBy({ top: -scrollSpeed, behavior: 'smooth' });
    } else if (mouseY > height - threshold) {
      container.scrollBy({ top: scrollSpeed, behavior: 'smooth' });
    }
  };

  // Mobile-first auto-scroll dengan natural loading
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    let direction = 1;
    const scrollStep = 1;
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
            // Natural load more items jika mencapai bottom
            if (visibleItems < luxuryFurnitureItems.length && !isLoading) {
              loadMoreItems();
            }
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
      }, 3000);
    };
    
    const events = ['touchstart', 'touchmove', 'touchend', 'scroll', 'mouseenter', 'mousemove'];
    events.forEach(event => {
      container.addEventListener(event, resetIdleTimer, { passive: true });
    });
    
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
  }, [visibleItems, isLoading, loadMoreItems]);

  // Items yang akan ditampilkan
  const displayItems = luxuryFurnitureItems.slice(0, visibleItems);

  return (
    <section id="masonry" className="section-seamless bg-white py-6">
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

      {/* Masonry Grid dengan Natural Infinite Scroll */}
      <div className="container mx-auto px-4">
        <div
          ref={scrollRef}
          className="max-h-[100vh] overflow-y-auto w-full scrollbar-none bg-white rounded-[30px]"
          onMouseMove={handleMouseMove}
          style={{ scrollbarWidth: 'none' }}
        >
          <div 
            className="w-full bg-white rounded-[30px]"
            ref={masonryRef}
          >
            <Masonry 
              items={displayItems} 
              ease="power2.out" 
              duration={1.6} 
              stagger={0.13} 
              animateFrom="random" 
              scaleOnHover={true} 
              hoverScale={1.05} 
              blurToFocus={true} 
              colorShiftOnHover={true} 
            />
          </div>
        </div>
      </div>

      {/* Hidden observer for infinite scroll */}
      {visibleItems < luxuryFurnitureItems.length && (
        <div 
          ref={observerRef}
          className="w-1 h-1 opacity-0 pointer-events-none"
        />
      )}
    </section>
  );
};

export default MansorySection;