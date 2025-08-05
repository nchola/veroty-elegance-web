import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  isLoading: boolean;
  isMenuOpen: boolean;
  isScrolled: boolean;
  activeModal: string | null;
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    duration?: number;
  }>;
  imageLoadingStates: Record<string, boolean>;
  imageErrors: Record<string, string>;
}

const initialState: UIState = {
  isLoading: false,
  isMenuOpen: false,
  isScrolled: false,
  activeModal: null,
  notifications: [],
  imageLoadingStates: {},
  imageErrors: {},
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
    addNotification: (state, action: PayloadAction<Omit<UIState['notifications'][0], 'id'>>) => {
      const id = Date.now().toString();
      state.notifications.push({
        ...action.payload,
        id,
        duration: action.payload.duration || 5000,
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },
    setImageLoading: (state, action: PayloadAction<{ id: string; loading: boolean }>) => {
      const { id, loading } = action.payload;
      state.imageLoadingStates[id] = loading;
    },
    setImageError: (state, action: PayloadAction<{ id: string; error: string }>) => {
      const { id, error } = action.payload;
      state.imageErrors[id] = error;
    },
    clearImageError: (state, action: PayloadAction<string>) => {
      delete state.imageErrors[action.payload];
    },
  },
});

export const {
  setLoading,
  toggleMenu,
  closeMenu,
  setScrolled,
  openModal,
  closeModal,
  addNotification,
  removeNotification,
  setImageLoading,
  setImageError,
  clearImageError,
} = uiSlice.actions;

export default uiSlice.reducer; 