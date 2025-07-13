import { Eye } from 'lucide-react';
import LuxuryCarousel from './LuxuryCarousel';
import ScrollFloat from '@/Animations/TextAnimations/ScrollFloat/ScrollFloat';
import { useEffect, useRef } from 'react';

const FeaturedProductsSection = () => {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const products = [
    {
      id: 1,
      name: "Elegance Chair",
      description: "Modern comfort meets timeless design",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 2,
      name: "Heritage Collection",
      description: "Crafted with traditional techniques",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 3,
      name: "Contemporary Series",
      description: "Bold designs for modern living",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const resetScrollTimeout = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        section.scrollBy({
          top: window.innerHeight * 0.3,
          behavior: 'smooth'
        });
      }, 2000);
    };

    const handleUserScroll = () => {
      resetScrollTimeout();
    };

    const handleMouseMove = () => {
      resetScrollTimeout();
    };

    const handleKeyDown = () => {
      resetScrollTimeout();
    };

    // Start the initial timeout
    resetScrollTimeout();

    // Add event listeners for user activity
    window.addEventListener('scroll', handleUserScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    section.addEventListener('scroll', handleUserScroll);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('scroll', handleUserScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      section.removeEventListener('scroll', handleUserScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 leading-tight scroll-float-subtle font-serif">
            Signature Collection
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed scroll-float-slow">
            Each piece in our collection represents the pinnacle of design and craftsmanship
          </p>
        </div>

        <div className="w-full mb-16 md:mb-20 lg:mb-24 scroll-float -mx-4 md:-mx-8">
          <LuxuryCarousel />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card group cursor-pointer product-hover bg-white overflow-hidden shadow-lg scroll-float-${index % 2 === 0 ? 'slow' : 'subtle'} rounded-lg`}
            >
              <div className="product-image relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="btn-view opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black px-6 py-3 md:px-8 md:py-4 flex items-center space-x-2 font-light rounded">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
              <div className="product-info p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-2 md:mb-3 font-serif">{product.name}</h3>
                <p className="text-gray-600 text-base md:text-lg">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
