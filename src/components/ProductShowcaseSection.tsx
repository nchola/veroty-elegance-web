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
      image: "https://i.pinimg.com/1200x/80/d2/6d/80d26d9e1dceb2e323a90492b7eb45f4.jpg",
      designerImage: "https://i.pinimg.com/736x/13/08/61/130861e2b75178a1d4b71004048245e3.jpg",
      detailImage: "https://i.pinimg.com/1200x/21/00/d5/2100d5ac1ac3ce911b4989f6a87782ef.jpg"
    },
    {
      id: 2,
      name: "Sandy",
      designer: "Gabriele & Oscar Buratti",
      description: "A table with an elegant and versatile design, featuring distinctive drop-shaped legs that enhance every type of top and pair stylishly with all chairs in the Veroty collection.",
      image: "https://i.pinimg.com/736x/0d/21/8b/0d218bb08727f3ca6e837ff78f6ce370.jpg",
      designerImage: "https://i.pinimg.com/736x/84/09/10/84091029223bf84ff71ca3df1ad7cc7a.jpg",
      detailImage: "https://i.pinimg.com/1200x/a6/e4/4c/a6e44c09867933e449f3f9b7d7a1a7a6.jpg"
    },
    {
      id: 3,
      name: "Vanilla",
      designer: "Mask Design Studio",
      description: "A refined chair, with armchair-like proportions and fashion-inspired details such as fabric ruching and a belt-like band around the backrest.",
      image: "https://i.pinimg.com/1200x/d9/1e/23/d91e23be5f418397016a9ac020ae6d0f.jpg",
      designerImage: "https://i.pinimg.com/736x/e5/28/8c/e5288c1381500f9f56adeaf35bdd1060.jpg",
      detailImage: "https://i.pinimg.com/736x/13/08/61/130861e2b75178a1d4b71004048245e3.jpg"
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
      className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[360px] mr-6"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg group" style={{
        maxHeight: '450px',
        maxWidth: '100%'
      }}>
        <img 
          src={product.image}
          alt={product.name}
          className="furniture-image w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          loading="lazy"
          style={{
            objectPosition: 'center top',
            maxHeight: '450px',
            width: '100%',
            height: '100%'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-5 lg:p-6">
          <div className="text-white">
            <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mb-2" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400
            }}>
              {product.name}
            </div>
            <div className="text-sm md:text-base text-white/80 mb-2 md:mb-3" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px'
            }}>
              designed by {product.designer}
            </div>
            <div className="text-sm md:text-base text-white/90 leading-relaxed" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(13px, 1.1vw, 16px)',
              lineHeight: 1.5
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
      className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[360px] mr-6"
    >
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 h-full">
        <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-lg group" style={{
          maxHeight: '220px',
          maxWidth: '100%'
        }}>
          <img 
            src={product.detailImage}
            alt={`${product.name} detail`}
            className="furniture-image-wide w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            style={{
              objectPosition: 'center center',
              maxHeight: '220px',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        
        <div className="flex gap-3 md:gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 overflow-hidden rounded-lg flex-shrink-0 shadow-md">
            <img 
              src={product.designerImage}
              alt={product.designer}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                objectPosition: 'center center'
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-gray-900 mb-2 truncate" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400
            }}>
              {product.designer}
            </div>
            <div className="text-sm md:text-base text-gray-500 mb-2 md:mb-3" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px'
            }}>
              designed by
            </div>
            <a 
              href={`/designer/${product.designer.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(13px, 1.1vw, 16px)'
              }}
            >
              Find out more
              <svg 
                className="w-3 h-3 md:w-4 md:h-4 ml-2 text-red-500 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" 
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
    <section className="section-seamless bg-white py-16 md:py-20 lg:py-24" style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#525459',
      WebkitFontSmoothing: 'antialiased',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'transparent'
    }}>
      {/* Intro Section */}
      <div className="intro max-w-none mx-auto text-center mb-12 md:mb-16 lg:mb-20 px-4 md:px-6 lg:px-8" style={{
        paddingBottom: '24px'
      }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 text-slate-900 tracking-tight" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 400,
          marginBottom: '24px'
        }}>
          Living Room Furniture System
        </h2>
        <div className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-4xl mx-auto" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          lineHeight: 1.7
        }}>
          <p className="mb-8">
            A modular sideboard programme with three or four doors, designed to offer maximum compositional freedom.
            Seven door options, five base types and the possibility of adding a ceramic top allow for bespoke solutions to suit every style.
          </p>
          <div className="inline-flex items-center group">
            <a 
              href="/all-products" 
              className="text-slate-900 font-medium hover:text-slate-600 transition-colors duration-300 relative"
              style={{
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Discover the selection
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <svg className="w-4 h-4 ml-2 text-red-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

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
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
        </button>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;