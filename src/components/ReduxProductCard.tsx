import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { 
  fetchProducts,
  setSelectedProduct,
  Product 
} from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';
import { 
  setImageLoading, 
  setImageError, 
  clearImageError 
} from '../store/slices/uiSlice';
import {
  selectFilteredProducts,
  selectProductsLoading,
  selectProductsError,
  selectImageLoadingState,
  selectImageError
} from '../store/selectors';

interface ProductCardProps {
  productId?: string;
}

const ReduxProductCard: React.FC<ProductCardProps> = ({ productId }) => {
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

  const handleImageLoad = (productId: string) => {
    dispatch(setImageLoading({ id: productId, loading: false }));
    dispatch(clearImageError(productId));
  };

  const handleImageError = (productId: string) => {
    dispatch(setImageLoading({ id: productId, loading: false }));
    dispatch(setImageError({ id: productId, error: 'Failed to load image' }));
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const handleProductClick = (product: Product) => {
    dispatch(setSelectedProduct(product));
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">Error: {error}</div>
        <button 
          onClick={() => dispatch(fetchProducts())}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => {
        return (
          <ProductCardItem 
            key={product.id} 
            product={product}
            onImageLoad={handleImageLoad}
            onImageError={handleImageError}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        );
      })}
    </div>
  );
};

// Separate component to handle individual product cards
interface ProductCardItemProps {
  product: Product;
  onImageLoad: (productId: string) => void;
  onImageError: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductCardItem: React.FC<ProductCardItemProps> = ({
  product,
  onImageLoad,
  onImageError,
  onAddToCart,
  onProductClick
}) => {
  const imageLoading = useAppSelector(state => selectImageLoadingState(state, product.id));
  const imageError = useAppSelector(state => selectImageError(state, product.id));

  return (
    <div className="product-card group cursor-pointer">
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
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
              <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
            </div>
          )}
          
          {imageError ? (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="text-sm">Image not available</p>
              </div>
            </div>
          ) : (
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
                height: 'auto',
                opacity: imageLoading ? 0 : 1,
                transition: 'opacity 0.3s ease-in-out'
              }}
              onLoad={() => onImageLoad(product.id)}
              onError={() => onImageError(product.id)}
            />
          )}
        </div>
        
        {/* CTA Button - appears on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 mb-4"></div>
      
      {/* Product Info */}
      <div className="space-y-2" onClick={() => onProductClick(product)}>
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
  );
};

export default ReduxProductCard; 