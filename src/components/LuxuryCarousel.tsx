
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const LuxuryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const furnitureItems = [
    {
      id: 1,
      name: "Sinuosa",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      type: "large",
      layout: "complex"
    },
    {
      id: 2,
      name: "Crystal",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      type: "square",
      layout: "single"
    },
    {
      id: 3,
      name: "Ritratti",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      type: "portrait",
      layout: "single"
    },
    {
      id: 4,
      name: "Alterego",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      type: "large",
      layout: "complex"
    },
    {
      id: 5,
      name: "Vertical",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      type: "tall",
      layout: "single"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % furnitureItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + furnitureItems.length) % furnitureItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderSlide = (item: any, index: number) => {
    if (item.layout === "complex") {
      return (
        <div key={item.id} className="flex flex-col gap-8 h-full">
          <div className="relative group cursor-pointer flex-1">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light font-serif mb-2">{item.name}</h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>Find out more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative group cursor-pointer flex-1">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Stripes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-light font-serif">Stripes</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const aspectClasses = {
      square: "aspect-square",
      portrait: "aspect-[3/4]",
      tall: "aspect-[3/5]"
    };

    return (
      <div key={item.id} className="relative group cursor-pointer h-full">
        <div className={`overflow-hidden rounded-lg h-full ${aspectClasses[item.type as keyof typeof aspectClasses]}`}>
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-light font-serif mb-2">{item.name}</h3>
              <div className="flex items-center space-x-2 text-sm">
                <Eye className="w-4 h-4" />
                <span>Find out more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="luxury-carousel relative px-4 py-16" style={{ padding: '64px 0' }}>
      <div className="carousel-container relative overflow-hidden">
        <div 
          className="carousel-track flex transition-transform duration-700 ease-in-out gap-4"
          style={{ 
            transform: `translateX(-${currentSlide * (100 / 3)}%)`,
            width: `${(furnitureItems.length * 100) / 3}%`
          }}
        >
          {furnitureItems.map((item, index) => (
            <div 
              key={item.id} 
              className="carousel-slide flex-shrink-0 h-96"
              style={{ width: `${100 / furnitureItems.length}%`, marginRight: '16px' }}
            >
              {renderSlide(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
        disabled={currentSlide >= furnitureItems.length - 3}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {furnitureItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold w-8' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LuxuryCarousel;
