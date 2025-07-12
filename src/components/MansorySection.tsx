
import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';
import Masonry from '@/Animations/Masonry/Masonry';

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
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Luxury furniture images data - reduced heights by 60%
  const luxuryFurnitureItems = [
    {
      id: '1',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      url: '#',
      height: 240 // reduced from 600
    },
    {
      id: '2',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      url: '#',
      height: 320 // reduced from 800
    },
    {
      id: '3',
      img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      url: '#',
      height: 280 // reduced from 700
    },
    {
      id: '4',
      img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      url: '#',
      height: 260 // reduced from 650
    },
    {
      id: '5',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      url: '#',
      height: 300 // reduced from 750
    },
    {
      id: '6',
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
      url: '#',
      height: 240 // reduced from 600
    },
    {
      id: '7',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      url: '#',
      height: 340 // reduced from 850
    },
    {
      id: '8',
      img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
      url: '#',
      height: 280 // reduced from 700
    },
    {
      id: '9',
      img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      url: '#',
      height: 260 // reduced from 650
    },
    {
      id: '10',
      img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      url: '#',
      height: 320 // reduced from 800
    },
    {
      id: '11',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      url: '#',
      height: 240 // reduced from 600
    },
    {
      id: '12',
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
      url: '#',
      height: 300 // reduced from 750
    },
    {
      id: '13',
      img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
      url: '#',
      height: 260 // reduced from 650
    },
    {
      id: '14',
      img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      url: '#',
      height: 280 // reduced from 700
    },
    {
      id: '15',
      img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      url: '#',
      height: 320 // reduced from 800
    },
    {
      id: '16',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      url: '#',
      height: 260 // reduced from 650
    },
    {
      id: '17',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      url: '#',
      height: 300 // reduced from 750
    },
    {
      id: '18',
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
      url: '#',
      height: 240 // reduced from 600
    },
    {
      id: '19',
      img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
      url: '#',
      height: 340 // reduced from 850
    },
    {
      id: '20',
      img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      url: '#',
      height: 280 // reduced from 700
    }
  ];

  return (
    <section className="masonry-section py-16 bg-gradient-to-b from-white to-gray-50" id="masonry">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
          <span className="font-serif italic text-gold">Our Collection</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our curated selection of luxury furniture pieces, each crafted with precision and timeless elegance
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-4">
        <div className="h-[500px] w-full">
          <Masonry
            items={luxuryFurnitureItems}
            ease="power3.out"
            duration={0.8}
            stagger={0.08}
            animateFrom="random"
            scaleOnHover={true}
            hoverScale={1.05}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="flex justify-center mt-12"
        onClick={scrollToNext}
      >
        <div className="text-primary animate-bounce cursor-pointer hover:text-gold transition-colors">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default MansorySection;
