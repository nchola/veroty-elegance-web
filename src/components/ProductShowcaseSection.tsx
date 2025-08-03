import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductShowcaseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showcaseProducts = [
    {
      id: 1,
      name: "Glen",
      designer: "Gino Carollo",
      description: "A chair with a strong identity, where the geometric precision of the lines blends seamlessly with the softness of its curves, ensuring comfort, visual balance, and timeless elegance.",
      image: "/src/assets/furniture/chair-1.jpg",
      designerImage: "/src/assets/furniture/chair-2.jpg",
      detailImage: "/src/assets/furniture/chair-3.jpg"
    },
    {
      id: 2,
      name: "Sandy",
      designer: "Gabriele & Oscar Buratti",
      description: "A table with an elegant and versatile design, featuring distinctive drop-shaped legs that enhance every type of top and pair stylishly with all chairs in the Veroty collection.",
      image: "/src/assets/furniture/table-1.jpg",
      designerImage: "/src/assets/furniture/table-2.jpg",
      detailImage: "/src/assets/furniture/bench-1.jpg"
    },
    {
      id: 3,
      name: "Vanilla",
      designer: "Mask Design Studio",
      description: "A refined chair, with armchair-like proportions and fashion-inspired details such as fabric ruching and a belt-like band around the backrest.",
      image: "/src/assets/furniture/chair-4.jpg",
      designerImage: "/src/assets/furniture/bench-2.jpg",
      detailImage: "/src/assets/furniture/chair-2.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (showcaseProducts.length * 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (showcaseProducts.length * 2)) % (showcaseProducts.length * 2));
  };

  const renderProductCard = (product, index) => (
    <div 
      key={`product-${index}`}
      className="min-w-[320px] md:min-w-[400px] lg:min-w-[480px] mr-4"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="furniture-image h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
          <div className="text-white">
            <div className="text-2xl md:text-3xl font-normal mb-2" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400
            }}>
              {product.name}
            </div>
            <div className="text-base text-white/80 mb-4" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px'
            }}>
              designed by {product.designer}
            </div>
            <div className="text-sm md:text-base text-white/90 leading-relaxed" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: 1.7
            }}>
              {product.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesignerCard = (product, index) => (
    <div 
      key={`designer-${index}`}
      className="min-w-[320px] md:min-w-[400px] lg:min-w-[480px] mr-4"
    >
      <div className="flex flex-col gap-6 md:gap-8 h-full">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={product.detailImage}
            alt={`${product.name} detail`}
            className="furniture-image-wide h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="flex gap-4 md:gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-lg flex-shrink-0">
            <img 
              src={product.designerImage}
              alt={product.designer}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="text-2xl md:text-3xl font-normal text-gray-900 mb-2" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400
            }}>
              {product.designer}
            </div>
            <div className="text-base text-gray-500 mb-4" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px'
            }}>
              designed by
            </div>
            <a 
              href={`/designer/${product.designer.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px'
              }}
            >
              Find out more
              <svg 
                className="w-4 h-4 ml-2 text-red-500 group-hover:translate-x-1 transition-transform duration-200" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const slides = [];
  showcaseProducts.forEach((product, index) => {
    slides.push(renderProductCard(product, index));
    slides.push(renderDesignerCard(product, index));
  });

  return (
    <section className="section-seamless bg-white py-16 md:py-24" style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#525459',
      WebkitFontSmoothing: 'antialiased',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'transparent',
      padding: '64px 0'
    }}>
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slides.length)}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 px-4 md:px-6 lg:px-8">
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;