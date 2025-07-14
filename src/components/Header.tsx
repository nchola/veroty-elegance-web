
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

  const menuItems = [
    { name: 'login', href: '#' },
    { name: 'Country: Cambodia', href: '#', isCountry: true },
    { name: 'newsletter', href: '#' },
    { name: 'wishlist', href: '#' },
    { name: 'support', href: '#' },
    { name: 'contract', href: '#' },
    { name: 'contacts', href: '#' },
    { name: 'F.A.Q.', href: '#' },
    { name: 'Find store', href: '#' }
  ];

  const socialLinks = [
    { name: 'facebook', href: '#' },
    { name: 'instagram', href: '#' },
    { name: 'pinterest', href: '#' },
    { name: 'youtube', href: '#' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-3 md:px-8">
          <div className="flex items-center justify-between relative">
            {/* Left Menu */}
            <div className="flex items-center space-x-3 md:space-x-6 flex-1">
              <button
                onClick={toggleMenu}
                className="flex flex-col space-y-1 group z-10"
                aria-label="Menu"
              >
                <span className={`w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>

              <nav className="hidden lg:flex items-center space-x-8">
                <div className="relative">
                  <button 
                    onClick={() => toggleSubmenu('products')}
                    className={`flex items-center space-x-1 text-sm font-light tracking-wide transition-colors relative ${
                      isScrolled 
                        ? 'text-gray-900 hover:text-gold' 
                        : 'text-white hover:text-gold'
                    }`}
                  >
                    <span>products</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                      activeSubmenu === 'products' ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
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

            {/* Logo Tengah */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="VEROTY" 
                  className="h-6 md:h-8 lg:h-10 w-auto transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Service Menu */}
            <div className="flex items-center space-x-1 md:space-x-3 flex-1 justify-end">
              <button 
                className={`p-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button 
                className={`p-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label="Store locator"
              >
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button 
                className={`p-2 transition-colors hidden sm:block ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label="Login"
              >
                <User className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button 
                className={`p-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Submenu - Desktop */}
        {activeSubmenu === 'products' && (
          <div className="hidden lg:block absolute top-full left-0 right-0 bg-white shadow-2xl border-t z-[60] animate-fadeInUp">
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {productCategories.map((category, index) => (
                  <div key={category.title} className="space-y-4">
                    <h3 className="text-lg font-serif text-gray-900 font-medium capitalize hover:text-gold transition-colors cursor-pointer">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub) => (
                        <li key={sub}>
                          <a 
                            href="#" 
                            className="text-gray-600 hover:text-gold transition-colors text-sm block py-1"
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
        <div className="fixed inset-0 z-[45] lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          <div className="fixed top-0 right-0 bottom-0 w-[50vw] min-w-[300px] max-w-[400px] bg-white overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8 border-b pb-4">
                <span className="text-lg font-serif text-gray-900">VEROTY</span>
                <button onClick={toggleMenu} className="text-gray-900 hover:text-gold transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Navigation */}
              <nav className="space-y-2 mb-8">
                <div className="border-b pb-4">
                  <button
                    onClick={() => toggleSubmenu('mobile-products')}
                    className="flex items-center justify-between w-full py-3 text-gray-900 hover:text-gold transition-colors"
                  >
                    <span className="font-light text-sm tracking-wide">products</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                      activeSubmenu === 'mobile-products' ? 'rotate-90' : ''
                    }`} />
                  </button>
                  
                  {activeSubmenu === 'mobile-products' && (
                    <div className="ml-4 mt-3 space-y-4 animate-fadeIn">
                      {productCategories.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-sm font-medium text-gray-900 capitalize mb-2 hover:text-gold transition-colors cursor-pointer">
                            {category.title}
                          </h4>
                          <ul className="ml-3 space-y-1">
                            {category.subcategories.map((sub) => (
                              <li key={sub}>
                                <a 
                                  href="#" 
                                  className="text-xs text-gray-600 hover:text-gold transition-colors block py-1"
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
                  className="block py-3 text-gray-900 hover:text-gold transition-colors font-light text-sm tracking-wide border-b"
                >
                  inspiration
                </a>
              </nav>

              {/* Menu Items */}
              <ul className="space-y-2 mb-8">
                {menuItems.map((item, index) => (
                  <li key={index} className={item.isCountry ? "border-b pb-2 mb-2" : ""}>
                    <a 
                      href={item.href} 
                      className={`block py-2 text-sm transition-colors ${
                        item.isCountry 
                          ? "text-gray-900 font-medium hover:text-gold" 
                          : "text-gray-600 hover:text-gold"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="border-t pt-6">
                <span className="text-sm text-gray-500 mb-4 block">follow us</span>
                <ul className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a 
                        href={social.href} 
                        className="text-sm text-gray-600 hover:text-gold transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
