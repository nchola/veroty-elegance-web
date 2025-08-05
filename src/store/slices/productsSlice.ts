import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Types
export interface Product {
  id: string;
  family: string;
  model: string;
  description: string;
  image: string;
  isNew?: boolean;
  category: 'chair' | 'table' | 'bench' | 'sofa' | 'storage';
  price?: number;
  designer?: string;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
}

export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  filters: {
    category: string;
    family: string;
    priceRange: [number, number];
  };
  selectedProduct: Product | null;
  // Add masonry-specific state
  masonryItems: MasonryItem[];
  masonryVisibleItems: number;
  masonryLoading: boolean;
}

// Image URL configuration - centralized and maintainable
const IMAGE_URLS = {
  chairs: [
    'https://i.pinimg.com/1200x/80/d2/6d/80d26d9e1dceb2e323a90492b7eb45f4.jpg',
    'https://i.pinimg.com/736x/13/08/61/130861e2b75178a1d4b71004048245e3.jpg',
    'https://i.pinimg.com/1200x/21/00/d5/2100d5ac1ac3ce911b4989f6a87782ef.jpg',
    'https://i.pinimg.com/1200x/d9/1e/23/d91e23be5f418397016a9ac020ae6d0f.jpg',
    'https://i.pinimg.com/736x/9f/70/7b/9f707b0a4a917a9a282121c841ea50ac.jpg',
    'https://i.pinimg.com/736x/ca/9a/fc/ca9afcdc855cb36bb0bb8d3026c9ca4e.jpg',
    'https://i.pinimg.com/736x/f1/07/0b/f1070bc6785acdd96d2ab6bad1e0a73e.jpg',
    'https://i.pinimg.com/736x/a0/a1/ba/a0a1bae9c3b79137f2d6a6d41ad50feb.jpg',
  ],
  tables: [
    'https://i.pinimg.com/736x/0d/21/8b/0d218bb08727f3ca6e837ff78f6ce370.jpg',
    'https://i.pinimg.com/736x/84/09/10/84091029223bf84ff71ca3df1ad7cc7a.jpg',
    'https://i.pinimg.com/736x/bb/ff/5e/bbff5e73f30bfa89c699c3f12470b157.jpg',
    'https://i.pinimg.com/1200x/2e/8e/ad/2e8eadffad3291cecf859aa57c1ec5d7.jpg',
    'https://i.pinimg.com/1200x/3a/d2/df/3ad2df6b10efa4dbfd57d2efa81a624a.jpg',
  ],
  benches: [
    'https://i.pinimg.com/1200x/a6/e4/4c/a6e44c09867933e449f3f9b7d7a1a7a6.jpg',
    'https://i.pinimg.com/736x/e5/28/8c/e5288c1381500f9f56adeaf35bdd1060.jpg',
    'https://i.pinimg.com/1200x/ef/3c/3c/ef3c3c89ab82e50bba3994d8a6b2cba5.jpg',
    'https://i.pinimg.com/1200x/ee/fd/33/eefd33a727eb3b3749d4ac8459679762.jpg',
    'https://i.pinimg.com/1200x/32/c4/a7/32c4a78ce9b60d453e4891aec982fdea.jpg',
    'https://i.pinimg.com/1200x/28/84/9c/28849c0f9e9e38e0e9a86edd10215ecd.jpg',
  ],
  sofas: [
    'https://i.pinimg.com/1200x/f8/ab/64/f8ab64a33f700c5fd67f24f5f6a06961.jpg',
  ],
  storage: [
    'https://i.pinimg.com/736x/8e/46/46/8e4646598d2731cd3b7b682447dafe82.jpg',
    'https://i.pinimg.com/1200x/37/e0/6b/37e06bb006dfbcf1a9fad7ba056d70c2.jpg',
  ],
};

// Helper function to get random image from category
const getRandomImage = (category: string): string => {
  const images = IMAGE_URLS[category as keyof typeof IMAGE_URLS] || IMAGE_URLS.chairs;
  return images[Math.floor(Math.random() * images.length)];
};

// Helper function to get random height for masonry
const getRandomHeight = (): number => {
  return Math.floor(Math.random() * 220) + 180; // 180-400px
};

// Masonry item interface
export interface MasonryItem {
  id: string;
  img: string;
  url: string;
  height: number;
  category: string;
  name: string;
}

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call - in real app, this would be an actual API endpoint
      const response = await new Promise<Product[]>((resolve) => {
        setTimeout(() => {
          const products: Product[] = [
            {
              id: "EL001",
              family: "ELEGANCE",
              model: "Chair Premium",
              description: "Premium leather chair with sophisticated design",
              image: getRandomImage('chairs'),
              category: 'chair',
              isNew: true,
              price: 1299,
              designer: "Gino Carollo",
              dimensions: { width: 65, height: 85, depth: 75 }
            },
            {
              id: "MD002",
              family: "MODERN",
              model: "Dining Table",
              description: "Scandinavian-inspired oak dining table",
              image: getRandomImage('tables'),
              category: 'table',
              price: 899,
              designer: "Gabriele & Oscar Buratti",
              dimensions: { width: 180, height: 75, depth: 90 }
            },
            {
              id: "CL003",
              family: "COMFORT",
              model: "Lounge Chair",
              description: "Ergonomic lounge chair with premium upholstery",
              image: getRandomImage('chairs'),
              category: 'chair',
              isNew: true,
              price: 1599,
              designer: "Mask Design Studio",
              dimensions: { width: 75, height: 95, depth: 85 }
            },
            {
              id: "EX004",
              family: "EXECUTIVE",
              model: "Professional Desk",
              description: "Professional workspace desk with clean lines",
              image: getRandomImage('tables'),
              category: 'table',
              price: 699,
              designer: "Studio Design",
              dimensions: { width: 140, height: 75, depth: 70 }
            },
            {
              id: "GD005",
              family: "GARDEN",
              model: "Outdoor Bench",
              description: "Outdoor seating solution for modern landscapes",
              image: getRandomImage('benches'),
              category: 'bench',
              price: 449,
              designer: "Outdoor Living",
              dimensions: { width: 120, height: 45, depth: 40 }
            },
            {
              id: "ST006",
              family: "STUDIO",
              model: "Minimalist Chair",
              description: "Minimalist design chair for contemporary spaces",
              image: getRandomImage('chairs'),
              category: 'chair',
              isNew: true,
              price: 599,
              designer: "Minimal Studio",
              dimensions: { width: 55, height: 80, depth: 65 }
            }
          ];
          resolve(products);
        }, 1000); // Simulate network delay
      });
      
      return response;
    } catch (error) {
      return rejectWithValue('Failed to fetch products');
    }
  }
);

// Async thunk for fetching masonry items
export const fetchMasonryItems = createAsyncThunk(
  'products/fetchMasonryItems',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call for masonry items
      const response = await new Promise<MasonryItem[]>((resolve) => {
        setTimeout(() => {
          const masonryItems: MasonryItem[] = [
            {
              id: '1',
              img: getRandomImage('chairs'),
              url: '/products/elegance-chair',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Elegance Chair'
            },
            {
              id: '2',
              img: getRandomImage('tables'),
              url: '/products/modern-dining-table',
              height: getRandomHeight(),
              category: 'table',
              name: 'Modern Dining Table'
            },
            {
              id: '3',
              img: getRandomImage('chairs'),
              url: '/products/comfort-lounge',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Comfort Lounge'
            },
            {
              id: '4',
              img: getRandomImage('tables'),
              url: '/products/executive-desk',
              height: getRandomHeight(),
              category: 'table',
              name: 'Executive Desk'
            },
            {
              id: '5',
              img: getRandomImage('benches'),
              url: '/products/garden-bench',
              height: getRandomHeight(),
              category: 'bench',
              name: 'Garden Bench'
            },
            {
              id: '6',
              img: getRandomImage('chairs'),
              url: '/products/studio-chair',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Studio Chair'
            },
            {
              id: '7',
              img: getRandomImage('chairs'),
              url: '/products/designer-chair',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Designer Chair'
            },
            {
              id: '8',
              img: getRandomImage('benches'),
              url: '/products/modern-bench',
              height: getRandomHeight(),
              category: 'bench',
              name: 'Modern Bench'
            },
            {
              id: '9',
              img: getRandomImage('chairs'),
              url: '/products/elegance-chair-2',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Elegance Chair II'
            },
            {
              id: '10',
              img: getRandomImage('tables'),
              url: '/products/modern-dining-table-2',
              height: getRandomHeight(),
              category: 'table',
              name: 'Modern Dining Table II'
            },
            {
              id: '11',
              img: getRandomImage('sofas'),
              url: '/products/comfort-lounge-2',
              height: getRandomHeight(),
              category: 'sofa',
              name: 'Comfort Lounge II'
            },
            {
              id: '12',
              img: getRandomImage('tables'),
              url: '/products/executive-desk-2',
              height: getRandomHeight(),
              category: 'table',
              name: 'Executive Desk II'
            },
            {
              id: '13',
              img: getRandomImage('benches'),
              url: '/products/garden-bench-2',
              height: getRandomHeight(),
              category: 'bench',
              name: 'Garden Bench II'
            },
            {
              id: '14',
              img: getRandomImage('chairs'),
              url: '/products/studio-chair-2',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Studio Chair II'
            },
            {
              id: '15',
              img: getRandomImage('chairs'),
              url: '/products/designer-chair-2',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Designer Chair II'
            },
            {
              id: '16',
              img: getRandomImage('benches'),
              url: '/products/modern-bench-2',
              height: getRandomHeight(),
              category: 'bench',
              name: 'Modern Bench II'
            },
            {
              id: '17',
              img: getRandomImage('chairs'),
              url: '/products/elegance-chair-3',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Elegance Chair III'
            },
            {
              id: '18',
              img: getRandomImage('tables'),
              url: '/products/modern-dining-table-3',
              height: getRandomHeight(),
              category: 'table',
              name: 'Modern Dining Table III'
            },
            {
              id: '19',
              img: getRandomImage('chairs'),
              url: '/products/comfort-lounge-3',
              height: getRandomHeight(),
              category: 'chair',
              name: 'Comfort Lounge III'
            },
            {
              id: '20',
              img: getRandomImage('tables'),
              url: '/products/executive-desk-3',
              height: getRandomHeight(),
              category: 'table',
              name: 'Executive Desk III'
            }
          ];
          resolve(masonryItems);
        }, 500); // Simulate network delay
      });
      
      return response;
    } catch (error) {
      return rejectWithValue('Failed to fetch masonry items');
    }
  }
);

// Initial state
const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    category: '',
    family: '',
    priceRange: [0, 2000],
  },
  selectedProduct: null,
  // Add masonry-specific state
  masonryItems: [],
  masonryVisibleItems: 0,
  masonryLoading: false,
};

// Slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload;
    },
    setFamilyFilter: (state, action: PayloadAction<string>) => {
      state.filters.family = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.filters.priceRange = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        category: '',
        family: '',
        priceRange: [0, 2000],
      };
    },
    // Masonry-specific actions
    setMasonryVisibleItems: (state, action: PayloadAction<number>) => {
      state.masonryVisibleItems = action.payload;
    },
    loadMoreMasonryItems: (state) => {
      if (state.masonryLoading) return;
      state.masonryLoading = true;
    },
    setMasonryLoading: (state, action: PayloadAction<boolean>) => {
      state.masonryLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Masonry-specific cases
      .addCase(fetchMasonryItems.pending, (state) => {
        state.masonryLoading = true;
        state.error = null;
      })
      .addCase(fetchMasonryItems.fulfilled, (state, action) => {
        state.masonryLoading = false;
        state.masonryItems = action.payload;
        state.masonryVisibleItems = 12; // Start with 12 items
      })
      .addCase(fetchMasonryItems.rejected, (state, action) => {
        state.masonryLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { 
  setSelectedProduct, 
  setCategoryFilter, 
  setFamilyFilter, 
  setPriceRange, 
  clearFilters,
  // Masonry-specific actions
  setMasonryVisibleItems,
  loadMoreMasonryItems,
  setMasonryLoading,
} = productsSlice.actions;

export default productsSlice.reducer; 