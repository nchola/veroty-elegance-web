import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { 
  fetchMasonryItems,
  setMasonryVisibleItems,
  setMasonryLoading
} from '../store/slices/productsSlice';
import {
  selectMasonryDisplayItems,
  selectMasonryLoading,
  selectMasonryHasMore,
  selectMasonryItems
} from '../store/selectors';
import Masonry from '@/Animations/Masonry/Masonry';
import ScrollVelocity from '@/Animations/ScrollVelocity/ScrollVelocity';
import { throttle } from '@/utils/performance';

const MansorySection = () => {
  const dispatch = useAppDispatch();
  
  // Redux state
  const displayItems = useAppSelector(selectMasonryDisplayItems);
  const loading = useAppSelector(selectMasonryLoading);
  const hasMore = useAppSelector(selectMasonryHasMore);
  const allItems = useAppSelector(selectMasonryItems);
  
  // UI state (tetap di component)
  const masonryRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch masonry data on component mount
  useEffect(() => {
    if (allItems.length === 0) {
      dispatch(fetchMasonryItems());
    }
  }, [dispatch, allItems.length]);

  // Parallax effect (UI logic - tetap di component)
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-background');
      if (hero) {
        (hero as HTMLElement).style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
      }
    }, 16);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#brand-intro');
    nextSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Load more items logic (business logic - pindah ke Redux)
  const loadMoreItems = useCallback(() => {
    if (loading || !hasMore) return;
    
    dispatch(setMasonryLoading(true));
    
    // Simulate loading delay
    setTimeout(() => {
      const currentVisible = displayItems.length;
      const newVisible = Math.min(currentVisible + 4, allItems.length);
      dispatch(setMasonryVisibleItems(newVisible));
      dispatch(setMasonryLoading(false));
    }, 300);
  }, [loading, hasMore, displayItems.length, allItems.length, dispatch]);

  // Intersection Observer untuk infinite scroll (UI logic)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loading) {
            loadMoreItems();
          }
        });
      },
      {
        rootMargin: '200px',
        threshold: 0.1
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreItems, loading]);

  // Auto-scroll on hover logic (UI logic - tetap di component)
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

  // Mobile-first auto-scroll dengan natural loading (UI logic)
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
            if (hasMore && !loading) {
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
  }, [hasMore, loading, loadMoreItems]);

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
      {hasMore && (
        <div 
          ref={observerRef}
          className="w-1 h-1 opacity-0 pointer-events-none"
        />
      )}
    </section>
  );
};

export default MansorySection;