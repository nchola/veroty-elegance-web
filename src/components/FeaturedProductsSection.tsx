
import { Eye } from 'lucide-react';
import LuxuryCarousel from './LuxuryCarousel';
import ScrollReveal from '@/Animations/TextAnimations/ScrollReveal/ScrollReveal';

const FeaturedProductsSection = () => {
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

  return (
    <section className="bg-white py-16 md:py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <ScrollReveal 
            baseOpacity={0.2}
            baseRotation={2.5}
            blurStrength={4}
            containerClassName="mb-6"
            textClassName="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-serif"
            rotationEnd="bottom top"
            wordAnimationEnd="bottom top"
          >
            Signature Collection
          </ScrollReveal>
          
          <ScrollReveal 
            baseOpacity={0.1}
            baseRotation={1}
            blurStrength={2}
            containerClassName="mt-4"
            textClassName="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            rotationEnd="bottom center"
            wordAnimationEnd="bottom center"
          >
            Each piece in our collection represents the pinnacle of design and craftsmanship
          </ScrollReveal>
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
                <ScrollReveal 
                  baseOpacity={0.15}
                  baseRotation={1.5}
                  blurStrength={2}
                  containerClassName="mb-2"
                  textClassName="text-xl md:text-2xl font-light text-gray-900 font-serif"
                  rotationEnd="bottom center"
                  wordAnimationEnd="bottom center"
                >
                  {product.name}
                </ScrollReveal>
                
                <ScrollReveal 
                  baseOpacity={0.1}
                  baseRotation={0.5}
                  blurStrength={1}
                  containerClassName=""
                  textClassName="text-gray-600 text-base md:text-lg"
                  rotationEnd="bottom center"
                  wordAnimationEnd="bottom center"
                >
                  {product.description}
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
