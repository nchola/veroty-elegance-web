import { useState } from 'react';
import Header from '@/components/Header';

interface Product {
  id: string;
  family: string;
  model: string;
  description: string;
  image: string;
  isNew?: boolean;
}

const AllProducts = () => {
  const [products] = useState<Product[]>([
    {
      id: "EL001",
      family: "ELEGANCE",
      model: "Chair Premium",
      description: "Premium leather chair with sophisticated design",
      image: "/src/assets/furniture/chair-1.jpg",
      isNew: true
    },
    {
      id: "MD002",
      family: "MODERN",
      model: "Dining Table",
      description: "Scandinavian-inspired oak dining table",
      image: "/src/assets/furniture/table-1.jpg"
    },
    {
      id: "CL003",
      family: "COMFORT",
      model: "Lounge Chair",
      description: "Ergonomic lounge chair with premium upholstery",
      image: "/src/assets/furniture/chair-2.jpg",
      isNew: true
    },
    {
      id: "EX004",
      family: "EXECUTIVE",
      model: "Professional Desk",
      description: "Professional workspace desk with clean lines",
      image: "/src/assets/furniture/table-2.jpg"
    },
    {
      id: "GD005",
      family: "GARDEN",
      model: "Outdoor Bench",
      description: "Outdoor seating solution for modern landscapes",
      image: "/src/assets/furniture/bench-1.jpg"
    },
    {
      id: "ST006",
      family: "STUDIO",
      model: "Minimalist Chair",
      description: "Minimalist design chair for contemporary spaces",
      image: "/src/assets/furniture/chair-3.jpg",
      isNew: true
    },
    {
      id: "DS007",
      family: "DESIGNER",
      model: "Artistic Chair",
      description: "Artistic chair with bold contemporary styling",
      image: "/src/assets/furniture/chair-4.jpg"
    },
    {
      id: "MB008",
      family: "MODERN",
      model: "Versatile Bench",
      description: "Versatile bench for indoor and outdoor use",
      image: "/src/assets/furniture/bench-2.jpg",
      isNew: true
    }
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Full-Bleed Hero Section */}
      <section className="full-bleed section-seamless relative h-[60vh] bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="All Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-heading-1 mb-4">Our Collection</h1>
            <p className="text-body-large max-w-2xl mx-auto px-8">
              Discover our complete range of luxury furniture, 
              crafted with precision and timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Products Listing Section */}
      <section className="full-bleed section-seamless py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card group cursor-pointer">
                {/* Product Image */}
                <div className="relative overflow-hidden mb-4">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-black text-white px-3 py-1 text-small font-medium uppercase tracking-wide">
                        NEW
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-[436/320] bg-gray-100 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={`${product.model} ${product.family}`}
                      className="furniture-image h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* CTA Button - appears on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
                      Configure
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 mb-4"></div>
                
                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-heading-3 text-small font-medium uppercase tracking-wide">
                      {product.family}
                    </h3>
                    <span className="text-small text-gray-600 font-mono">
                      {product.model}
                    </span>
                  </div>
                  <p className="text-small text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;