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
      image: "https://i.pinimg.com/1200x/80/d2/6d/80d26d9e1dceb2e323a90492b7eb45f4.jpg",
      isNew: true
    },
    {
      id: "MD002",
      family: "MODERN",
      model: "Dining Table",
      description: "Scandinavian-inspired oak dining table",
      image: "https://i.pinimg.com/736x/0d/21/8b/0d218bb08727f3ca6e837ff78f6ce370.jpg"
    },
    {
      id: "CL003",
      family: "COMFORT",
      model: "Lounge Chair",
      description: "Ergonomic lounge chair with premium upholstery",
      image: "https://i.pinimg.com/736x/13/08/61/130861e2b75178a1d4b71004048245e3.jpg",
      isNew: true
    },
    {
      id: "EX004",
      family: "EXECUTIVE",
      model: "Professional Desk",
      description: "Professional workspace desk with clean lines",
      image: "https://i.pinimg.com/736x/84/09/10/84091029223bf84ff71ca3df1ad7cc7a.jpg"
    },
    {
      id: "GD005",
      family: "GARDEN",
      model: "Outdoor Bench",
      description: "Outdoor seating solution for modern landscapes",
      image: "https://i.pinimg.com/1200x/a6/e4/4c/a6e44c09867933e449f3f9b7d7a1a7a6.jpg"
    },
    {
      id: "ST006",
      family: "STUDIO",
      model: "Minimalist Chair",
      description: "Minimalist design chair for contemporary spaces",
      image: "https://i.pinimg.com/1200x/21/00/d5/2100d5ac1ac3ce911b4989f6a87782ef.jpg",
      isNew: true
    },
    {
      id: "DS007",
      family: "DESIGNER",
      model: "Artistic Chair",
      description: "Artistic chair with bold contemporary styling",
      image: "https://i.pinimg.com/1200x/d9/1e/23/d91e23be5f418397016a9ac020ae6d0f.jpg"
    },
    {
      id: "MB008",
      family: "MODERN",
      model: "Versatile Bench",
      description: "Versatile bench for indoor and outdoor use",
      image: "https://i.pinimg.com/736x/e5/28/8c/e5288c1381500f9f56adeaf35bdd1060.jpg",
      isNew: true
    },
    {
      id: "CH009",
      family: "CLASSIC",
      model: "Heritage Chair",
      description: "Classic design with modern comfort",
      image: "https://i.pinimg.com/736x/9f/70/7b/9f707b0a4a917a9a282121c841ea50ac.jpg"
    },
    {
      id: "TB010",
      family: "TRADITIONAL",
      model: "Wooden Table",
      description: "Traditional craftsmanship meets modern aesthetics",
      image: "https://i.pinimg.com/736x/bb/ff/5e/bbff5e73f30bfa89c699c3f12470b157.jpg"
    },
    {
      id: "LC011",
      family: "LUXURY",
      model: "Comfort Chair",
      description: "Luxury comfort with premium materials",
      image: "https://i.pinimg.com/1200x/f8/ab/64/f8ab64a33f700c5fd67f24f5f6a06961.jpg"
    },
    {
      id: "DT012",
      family: "DESIGN",
      model: "Modern Table",
      description: "Contemporary design table for modern homes",
      image: "https://i.pinimg.com/1200x/2e/8e/ad/2e8eadffad3291cecf859aa57c1ec5d7.jpg"
    }
  ]);

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          .furniture-image {
            object-fit: contain !important;
            object-position: center center !important;
            max-width: 100% !important;
            max-height: 100% !important;
            width: auto !important;
            height: auto !important;
          }
          
          .product-card .aspect-\\[4\\/3\\] {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }
        `
      }} />
      
      <Header />
      
      {/* Full-Bleed Hero Section */}
      <section className="full-bleed section-seamless relative h-[60vh] bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="All Products"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center 95%'
          }}
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
                  
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={product.image}
                      alt={`${product.model} ${product.family}`}
                      className="furniture-image transition-transform duration-500 group-hover:scale-105"
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center center',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto'
                      }}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        const container = img.parentElement;
                        if (container) {
                          container.innerHTML = `
                            <div class="flex items-center justify-center w-full h-full text-gray-400">
                              <div class="text-center">
                                <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <p class="text-sm">Image not available</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        const container = img.parentElement;
                        if (container) {
                          // Pastikan gambar selalu menggunakan contain untuk menghindari cropping
                          img.style.objectFit = 'contain';
                          img.style.objectPosition = 'center center';
                          img.style.maxWidth = '100%';
                          img.style.maxHeight = '100%';
                          img.style.width = 'auto';
                          img.style.height = 'auto';
                          
                          // Background gradient yang konsisten
                          container.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)';
                        }
                      }}
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