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
      id: "CS2040",
      family: "ABREY",
      model: "CS2040",
      description: "Wooden chair with upholstered seat and backrest",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&h=320&q=80"
    },
    {
      id: "CS2041",
      family: "ABREY",
      model: "CS2041",
      description: "Upholstered armchair with wooden base",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&h=320&q=80"
    },
    {
      id: "CS2095",
      family: "ADÈL",
      model: "CS2095", 
      description: "Wooden chair with a padded seat and backrest",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&h=320&q=80"
    },
    {
      id: "CS2099",
      family: "ADÈL",
      model: "CS2099",
      description: "Wooden armchair, padded",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&h=320&q=80"
    },
    {
      id: "CS2202",
      family: "ADÈL",
      model: "CS2202",
      description: "Wooden armchair in wood and Vienna straw",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&h=320&q=80"
    },
    {
      id: "CS1452-A",
      family: "AIDA",
      model: "CS1452-A",
      description: "Chair with metal frame and comfort padding",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&h=320&q=80"
    },
    {
      id: "CS2247",
      family: "ANIME",
      model: "CS2247",
      description: "Wooden chair with upholstered seat and backrest",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&h=320&q=80",
      isNew: true
    },
    {
      id: "CS2249",
      family: "FAY",
      model: "CS2249",
      description: "Padded chair with a metal base",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&h=320&q=80",
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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