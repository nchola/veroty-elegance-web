
import { useState, useEffect } from 'react';
import { Search, MapPin, User, Heart, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const productCategories = [
    {
      title: 'chairs',
      subcategories: [
        'All chairs',
        'Home-office chairs',
        'Chairs with arms',
        'Benches',
        'Chairs without arms'
      ]
    },
    {
      title: 'stools',
      subcategories: [
        'All stools',
        'Adjustable stools',
        'Fixed stools'
      ]
    },
    {
      title: 'tables',
      subcategories: [
        'All the tables',
        'Desks',
        'Extendable tables',
        'Fixed tables'
      ]
    },
    {
      title: 'cabinets & storage',
      subcategories: [
        'All cabinets & storage',
        'Bookcases',
        'TV stands',
        'Sideboards buffets'
      ]
    },
    {
      title: 'sofas',
      subcategories: [
        'All sofas'
      ]
    },
    {
      title: 'lounge chairs',
      subcategories: [
        'All lounge chairs'
      ]
    }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Left Menu */}
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleMenu}
                className="flex flex-col space-y-1 group"
                aria-label="Menu"
              >
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>

              <nav className="hidden lg:flex items-center space-x-8">
                <button 
                  onClick={() => toggleSubmenu('products')}
                  className={`flex items-center space-x-1 text-sm font-light tracking-wide transition-colors ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-gold' 
                      : 'text-white hover:text-gold'
                  }`}
                >
                  <span>products</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <a 
                  href="#inspiration" 
                  className={`text-sm font-light tracking-wide transition-colors ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-gold' 
                      : 'text-white hover:text-gold'
                  }`}
                >
                  inspiration
                </a>
              </nav>
            </div>

            {/* Logo
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="font-serif text-2xl md:text-3xl font-light tracking-wider">
                <span className={`transition-colors ${
                  isScrolled ? 'text-gold' : 'text-gold'
                }`}>Veroty</span>
              </a>
            </div> */}

            {/* Right Service Menu */}
            <div className="flex items-center space-x-4">
              <button 
                className={`p-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label="Store locator"
              >
                <MapPin className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 transition-colors hidden md:block ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label="Login"
              >
                <User className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Submenu - Desktop */}
        {activeSubmenu === 'products' && (
          <div className="hidden lg:block absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {productCategories.map((category, index) => (
                  <div key={category.title} className="space-y-4">
                    <h3 className="text-lg font-serif text-gray-900 font-medium capitalize">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub) => (
                        <li key={sub}>
                          <a 
                            href="#" 
                            className="text-gray-600 hover:text-gold transition-colors text-sm"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          <div className="absolute top-0 left-0 bottom-0 w-80 bg-white overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-2xl text-gold">Veroty</span>
                <button onClick={toggleMenu} className="text-gray-900">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-4">
                <div>
                  <button
                    onClick={() => toggleSubmenu('mobile-products')}
                    className="flex items-center justify-between w-full py-3 text-gray-900 hover:text-gold transition-colors"
                  >
                    <span className="font-light">Products</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeSubmenu === 'mobile-products' ? 'rotate-90' : ''
                    }`} />
                  </button>
                  
                  {activeSubmenu === 'mobile-products' && (
                    <div className="ml-4 mt-2 space-y-3">
                      {productCategories.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-sm font-medium text-gray-900 capitalize mb-2">
                            {category.title}
                          </h4>
                          <ul className="ml-4 space-y-1">
                            {category.subcategories.map((sub) => (
                              <li key={sub}>
                                <a 
                                  href="#" 
                                  className="text-sm text-gray-600 hover:text-gold transition-colors block py-1"
                                >
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href="#inspiration" 
                  className="block py-3 text-gray-900 hover:text-gold transition-colors font-light"
                >
                  Inspiration
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
 