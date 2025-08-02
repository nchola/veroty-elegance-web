
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Random height generator for masonry effect
function getRandomHeight() {
  return Math.floor(Math.random() * 120) + 280; // 280-400px
}

const FeaturedProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured furniture products with random heights
  const featuredProducts = [
    {
      id: 1,
      name: "sophia",
      subtitle: "Find out more",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      height: getRandomHeight()
    },
    {
      id: 2,
      name: "oleandro chair",
      subtitle: "Design: Archirivolto",
      description: "Find out more",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      height: getRandomHeight()
    },
    {
      id: 3,
      name: "oleandro",
      subtitle: "create your version",
      description: "Find out more",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
      height: getRandomHeight()
    },
    {
      id: 4,
      name: "kitchen collection",
      subtitle: "Modern sophistication",
      description: "Find out more",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      height: getRandomHeight()
    },
    {
      id: 5,
      name: "dining essence",
      subtitle: "Elegant compositions",
      description: "Find out more", 
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
      height: getRandomHeight()
    },
    {
      id: 6,
      name: "contemporary living",
      subtitle: "Timeless design",
      description: "Find out more",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
      height: getRandomHeight()
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <section className="section-seamless bg-white py-0 full-bleed">
      {/* Hero Slider Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden"></div>
              </div>
              
              {/* Content Section */}
              <div className="flex items-center justify-center p-8 lg:p-16 bg-white">
                <div className="text-center lg:text-left max-w-md">
                  <h1 className="font-primary text-5xl lg:text-7xl font-light mb-4 text-foreground">
                    {product.name}
                  </h1>
                  {product.subtitle && (
                    <p className="font-primary text-lg lg:text-xl text-muted-foreground mb-6">
                      {product.subtitle}
                    </p>
                  )}
                  <button className="group inline-flex items-center text-lg font-primary text-foreground hover:text-primary transition-colors">
                    {product.description || "Find out more"}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-accent" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg z-10"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg z-10"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Additional Products Grid - Mobile First */}
      <div className="px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <div
              key={`grid-${product.id}`}
              className="group cursor-pointer"
              style={{ height: `${product.height}px` }}
            >
              <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-primary text-xl lg:text-2xl font-light mb-2">
                      {product.name}
                    </h3>
                    <button className="inline-flex items-center text-sm font-primary hover:text-accent transition-colors">
                      Find out more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
