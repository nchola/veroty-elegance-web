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
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '2',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '3',
      img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '4',
      img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '5',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '6',
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '7',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '8',
      img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '9',
      img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '10',
      img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '11',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '12',
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '13',
      img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '14',
      img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '15',
      img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '16',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '17',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '18',
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '19',
      img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
      url: '#',
      height: getRandomHeight()
    },
    {
      id: '20',
      img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      url: '#',
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

  // Auto-scroll loop logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let direction = 1; // 1: down, -1: up
    const scrollStep = 1; // px per interval
    const interval = setInterval(() => {
      if (!container) return;
      if (direction === 1) {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          direction = -1;
        } else {
          container.scrollBy({ top: scrollStep, behavior: 'smooth' });
        }
      } else {
        if (container.scrollTop <= 0) {
          direction = 1;
        } else {
          container.scrollBy({ top: -scrollStep, behavior: 'smooth' });
        }
      }
    }, 20);
    return () => clearInterval(interval);
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