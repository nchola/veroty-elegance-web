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
      img: 'https://i.pinimg.com/1200x/80/d2/6d/80d26d9e1dceb2e323a90492b7eb45f4.jpg',
      url: '/products/elegance-chair',
      height: getRandomHeight()
    },
    {
      id: '2',
      img: 'https://i.pinimg.com/736x/0d/21/8b/0d218bb08727f3ca6e837ff78f6ce370.jpg',
      url: '/products/modern-dining-table',
      height: getRandomHeight()
    },
    {
      id: '3',
      img: 'https://i.pinimg.com/736x/13/08/61/130861e2b75178a1d4b71004048245e3.jpg',
      url: '/products/comfort-lounge',
      height: getRandomHeight()
    },
    {
      id: '4',
      img: 'https://i.pinimg.com/736x/84/09/10/84091029223bf84ff71ca3df1ad7cc7a.jpg',
      url: '/products/executive-desk',
      height: getRandomHeight()
    },
    {
      id: '5',
      img: 'https://i.pinimg.com/1200x/a6/e4/4c/a6e44c09867933e449f3f9b7d7a1a7a6.jpg',
      url: '/products/garden-bench',
      height: getRandomHeight()
    },
    {
      id: '6',
      img: 'https://i.pinimg.com/1200x/21/00/d5/2100d5ac1ac3ce911b4989f6a87782ef.jpg',
      url: '/products/studio-chair',
      height: getRandomHeight()
    },
    {
      id: '7',
      img: 'https://i.pinimg.com/1200x/d9/1e/23/d91e23be5f418397016a9ac020ae6d0f.jpg',
      url: '/products/designer-chair',
      height: getRandomHeight()
    },
    {
      id: '8',
      img: 'https://i.pinimg.com/736x/e5/28/8c/e5288c1381500f9f56adeaf35bdd1060.jpg',
      url: '/products/modern-bench',
      height: getRandomHeight()
    },
    {
      id: '9',
      img: 'https://i.pinimg.com/736x/9f/70/7b/9f707b0a4a917a9a282121c841ea50ac.jpg',
      url: '/products/elegance-chair-2',
      height: getRandomHeight()
    },
    {
      id: '10',
      img: 'https://i.pinimg.com/736x/bb/ff/5e/bbff5e73f30bfa89c699c3f12470b157.jpg',
      url: '/products/modern-dining-table-2',
      height: getRandomHeight()
    },
    {
      id: '11',
      img: 'https://i.pinimg.com/1200x/f8/ab/64/f8ab64a33f700c5fd67f24f5f6a06961.jpg',
      url: '/products/comfort-lounge-2',
      height: getRandomHeight()
    },
    {
      id: '12',
      img: 'https://i.pinimg.com/1200x/2e/8e/ad/2e8eadffad3291cecf859aa57c1ec5d7.jpg',
      url: '/products/executive-desk-2',
      height: getRandomHeight()
    },
    {
      id: '13',
      img: 'https://i.pinimg.com/1200x/ef/3c/3c/ef3c3c89ab82e50bba3994d8a6b2cba5.jpg',
      url: '/products/garden-bench-2',
      height: getRandomHeight()
    },
    {
      id: '14',
      img: 'https://i.pinimg.com/1200x/ee/fd/33/eefd33a727eb3b3749d4ac8459679762.jpg',
      url: '/products/studio-chair-2',
      height: getRandomHeight()
    },
    {
      id: '15',
      img: 'https://i.pinimg.com/1200x/32/c4/a7/32c4a78ce9b60d453e4891aec982fdea.jpg',
      url: '/products/designer-chair-2',
      height: getRandomHeight()
    },
    {
      id: '16',
      img: 'https://i.pinimg.com/1200x/28/84/9c/28849c0f9e9e38e0e9a86edd10215ecd.jpg',
      url: '/products/modern-bench-2',
      height: getRandomHeight()
    },
    {
      id: '17',
      img: 'https://i.pinimg.com/736x/ca/9a/fc/ca9afcdc855cb36bb0bb8d3026c9ca4e.jpg',
      url: '/products/elegance-chair-3',
      height: getRandomHeight()
    },
    {
      id: '18',
      img: 'https://i.pinimg.com/736x/f1/07/0b/f1070bc6785acdd96d2ab6bad1e0a73e.jpg',
      url: '/products/modern-dining-table-3',
      height: getRandomHeight()
    },
    {
      id: '19',
      img: 'https://i.pinimg.com/736x/a0/a1/ba/a0a1bae9c3b79137f2d6a6d41ad50feb.jpg',
      url: '/products/comfort-lounge-3',
      height: getRandomHeight()
    },
    {
      id: '20',
      img: 'https://i.pinimg.com/1200x/3a/d2/df/3ad2df6b10efa4dbfd57d2efa81a624a.jpg',
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