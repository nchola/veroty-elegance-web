# 🪑 Veroty Elegance - Luxury Furniture E-commerce

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.8.2-purple.svg)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive e-commerce platform for luxury furniture built with React, TypeScript, and Redux Toolkit. Features infinite scroll, advanced filtering, and smooth animations.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [🛠️ Development](#️-development)
- [🏗️ Project Structure](#️-project-structure)
- [📱 Pages & Components](#-pages--components)
- [🔧 Configuration](#-configuration)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 🛍️ E-commerce Functionality
- **Product Catalog** - Browse luxury furniture with infinite scroll
- **Advanced Filtering** - Filter by category, family, and price range
- **Shopping Cart** - Add, remove, and manage cart items
- **Product Details** - Comprehensive product information and images
- **Responsive Design** - Optimized for desktop, tablet, and mobile

### 🎨 User Experience
- **Smooth Animations** - GSAP and Framer Motion powered animations
- **Masonry Layout** - Dynamic grid layout for product display
- **Lazy Loading** - Optimized image and video loading
- **Infinite Scroll** - Seamless product browsing experience
- **Loading States** - Skeleton loaders and loading indicators

### 🏗️ Architecture
- **Redux Toolkit** - Centralized state management
- **TypeScript** - Type-safe development
- **Component Architecture** - Modular and reusable components
- **Performance Optimized** - Code splitting and bundle optimization

## 🚀 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **React Router DOM 6.26.2** - Client-side routing

### State Management
- **Redux Toolkit 2.8.2** - Modern Redux with simplified patterns
- **React Redux 9.2.0** - React bindings for Redux

### Styling & UI
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Build Tools
- **Vite 5.4.1** - Fast build tool and dev server
- **SWC** - Fast JavaScript/TypeScript compiler
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Animation & Effects
- **Framer Motion 12.23.3** - Production-ready motion library
- **GSAP 3.13.0** - Professional animation library
- **Embla Carousel** - Lightweight carousel library

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Installation

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or **yarn** / **pnpm**)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd veroty-elegance-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

### Development Workflow

1. **Feature Development**
   ```bash
   # Create feature branch
   git checkout -b feature/your-feature-name
   
   # Make changes and test
   npm run dev
   
   # Lint code
   npm run lint
   
   # Commit changes
   git add .
   git commit -m "feat: add your feature description"
   ```

2. **Testing**
   - Run development server: `npm run dev`
   - Test all pages and components
   - Verify responsive design
   - Check browser console for errors

## 🏗️ Project Structure

```
src/
├── 📁 components/           # React components
│   ├── 📁 ui/              # shadcn/ui components
│   ├── Header.tsx          # Main navigation
│   ├── FooterSection.tsx   # Site footer
│   ├── HeroSection.tsx     # Landing hero
│   ├── MansorySection.tsx  # Product masonry grid
│   ├── ProductShowcaseSection.tsx  # Product carousel
│   ├── FeaturedProductsSection.tsx # Featured products
│   └── ...                 # Other components
│
├── 📁 pages/               # Route pages
│   ├── Index.tsx           # Home page
│   ├── AllProducts.tsx     # Products catalog
│   └── NotFound.tsx        # 404 page
│
├── 📁 store/               # Redux store
│   ├── 📁 slices/          # Redux slices
│   │   ├── productsSlice.ts
│   │   ├── cartSlice.ts
│   │   └── uiSlice.ts
│   ├── selectors.ts        # Redux selectors
│   ├── hooks.ts            # Typed Redux hooks
│   └── index.ts            # Store configuration
│
├── 📁 hooks/               # Custom React hooks
│   ├── useLazyImage.tsx    # Image lazy loading
│   ├── useLazyVideo.tsx    # Video lazy loading
│   ├── useMobile.tsx       # Mobile detection
│   └── useToast.ts         # Toast notifications
│
├── 📁 utils/               # Utility functions
│   └── performance.ts      # Performance utilities
│
├── 📁 Animations/          # Animation components
│   ├── 📁 Masonry/         # Masonry animations
│   ├── 📁 TextAnimations/  # Text effects
│   └── 📁 BackgroundAnimations/ # Background effects
│
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles
```

This project is still on progress. 