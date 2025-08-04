
import { useLazyVideo } from '@/hooks/useLazyVideo';

const SwitchingChair = () => {
  const { videoProps, isLoaded } = useLazyVideo('/switchSofa.mp4', {
    rootMargin: '200px', // Load when 200px away
    preload: false // Don't preload since it's below fold
  });
  return (
    <section id="switching-chair" className="section-seamless bg-white py-20 md:py-16 relative z-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video Section - Left Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-xs lg:max-w-sm">
              {/* Video Container with Portrait Ratio */}
              <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
                  </div>
                )}
                <video 
                  {...videoProps}
                  autoPlay={isLoaded}
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                  style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                />
                
                {/* Video Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-gold/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gold/20 scroll-float">
                <span className="text-gold font-serif text-sm md:text-base font-bold">360°</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-gold rounded-full shadow-lg flex items-center justify-center scroll-float-slow">
                <span className="text-white font-serif text-xs md:text-sm font-bold">↻</span>
              </div>

              {/* Decorative Lines */}
              <div className="absolute -top-8 -left-8 w-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="order-1 lg:order-2 space-y-8 md:space-y-10">
            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
                <span className="block">Transform</span>
                <span className="block text-gold font-serif font-bold">Your Space</span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                Experience the magic of furniture that adapts to your lifestyle
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-body-large text-gray-700 leading-relaxed">
                Watch as our innovative furniture transforms before your eyes. From a comfortable chair to a versatile sofa, 
                each piece is designed to maximize your living space while maintaining elegance and functionality.
              </p>
              
              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm md:text-base text-gray-600">Space-saving design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm md:text-base text-gray-600">Smooth transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm md:text-base text-gray-600">Premium materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm md:text-base text-gray-600">Aesthetic appeal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchingChair;
