
import { Eye } from 'lucide-react';
import LuxuryCarousel from './LuxuryCarousel';
import { ScrollVelocity } from '@/TextAnimations/ScrollVelocity/ScrollVelocity';

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
    <section className="featured-products bg-white">
      <div className="max-w-none">
        {/* Scroll Velocity Text Animation */}
        <div className="py-8">
          <ScrollVelocity
            texts={["Signature Collection", "Premium Design", "Luxury Living", "Timeless Elegance"]}
            velocity={-40}
            className="text-gold/20 font-serif italic"
            scrollerClassName="text-5xl md:text-7xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight scroll-float-subtle">
              Signature Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed scroll-float-slow">
              Each piece in our collection represents the pinnacle of design and craftsmanship
            </p>
          </div>

          {/* Luxury Carousel - Full Width */}
          <div className="w-full -mx-8 mb-24 scroll-float">
            <LuxuryCarousel />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <div key={product.id} className={`product-card group cursor-pointer product-hover bg-white overflow-hidden shadow-lg scroll-float-${index % 2 === 0 ? 'slow' : 'subtle'}`}>
                <div className="product-image relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="btn-view opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black px-8 py-4 flex items-center space-x-2 font-light">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
                <div className="product-info p-8 text-center">
                  <h3 className="text-2xl font-light text-gray-900 mb-3 font-serif">{product.name}</h3>
                  <p className="text-gray-600 text-lg">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
