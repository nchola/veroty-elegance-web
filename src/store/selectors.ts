import { RootState } from './index';

// Products Selectors
export const selectAllProducts = (state: RootState) => state.products.items;
export const selectProductsLoading = (state: RootState) => state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;
export const selectFilters = (state: RootState) => state.products.filters;

// Filtered products selector
export const selectFilteredProducts = (state: RootState) => {
  const { items, filters } = state.products;
  
  return items.filter(product => {
    const categoryMatch = !filters.category || product.category === filters.category;
    const familyMatch = !filters.family || product.family.toLowerCase().includes(filters.family.toLowerCase());
    const priceMatch = product.price && product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    
    return categoryMatch && familyMatch && priceMatch;
  });
};

// Masonry Selectors
export const selectMasonryItems = (state: RootState) => state.products.masonryItems;
export const selectMasonryVisibleItems = (state: RootState) => state.products.masonryVisibleItems;
export const selectMasonryLoading = (state: RootState) => state.products.masonryLoading;
export const selectMasonryDisplayItems = (state: RootState) => {
  const { masonryItems, masonryVisibleItems } = state.products;
  return masonryItems.slice(0, masonryVisibleItems);
};
export const selectMasonryHasMore = (state: RootState) => {
  const { masonryItems, masonryVisibleItems } = state.products;
  return masonryVisibleItems < masonryItems.length;
};

// UI Selectors
export const selectIsLoading = (state: RootState) => state.ui.isLoading;
export const selectIsMenuOpen = (state: RootState) => state.ui.isMenuOpen;
export const selectIsScrolled = (state: RootState) => state.ui.isScrolled;
export const selectActiveModal = (state: RootState) => state.ui.activeModal;
export const selectNotifications = (state: RootState) => state.ui.notifications;
export const selectImageLoadingState = (state: RootState, id: string) => 
  state.ui.imageLoadingStates[id] || false;
export const selectImageError = (state: RootState, id: string) => 
  state.ui.imageErrors[id] || null;

// Cart Selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartIsOpen = (state: RootState) => state.cart.isOpen;
export const selectCartTotalItems = (state: RootState) => state.cart.totalItems;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectCartItemCount = (state: RootState) => state.cart.items.length; 