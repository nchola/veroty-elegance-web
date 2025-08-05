import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts } from '../store/slices/productsSlice';
import { 
  selectFilteredProducts,
  selectProductsLoading,
  selectProductsError 
} from '../store/selectors';
import Header from './Header';

const CleanAllProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectFilteredProducts);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);

  // Fetch products on component mount
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

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
          style={{
            objectPosition: 'center 25%' // Naikkan gambar 25% ke atas
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
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-600 mb-4">Error: {error}</div>
              <button 
                onClick={() => dispatch(fetchProducts())}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Retry
              </button>
            </div>
          ) : (
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
                    {product.price && (
                      <div className="text-lg font-semibold text-gray-900">
                        ${product.price.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CleanAllProducts; 