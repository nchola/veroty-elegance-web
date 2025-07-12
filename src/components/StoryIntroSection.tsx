
const StoryIntroSection = () => {
  return (
    <section className="section m-2024-split py-16 bg-white">
      <div className="split--1">
        <div className="flex items-stretch min-h-[600px]">
          {/* Video Section - Left Side */}
          <figure className="flex-1 m-0 p-0">
            <video 
              width="100%" 
              height="100%" 
              autoPlay 
              muted 
              playsInline 
              loop 
              preload="auto"
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            >
              <source src="/foldablechair.mp4" type="video/mp4" />
            </video>
          </figure>
          
          {/* Text Content - Right Side */}
          <div className="flex-1 flex items-center">
            <div className="m-2024-box p-12 lg:p-16">
              <div className="tit text-4xl lg:text-5xl font-light mb-6 text-gray-900 font-serif leading-tight">
                must have: extendable tables
              </div>
              <div className="txt text-lg text-gray-600 leading-relaxed mb-8">
                For a small home or a spacious living room, for a compact dining area or a significant open space: an extendable table is always an excellent choice.
              </div>
              <div className="cta-arr left">
                <a 
                  href="#brand-intro" 
                  className="inline-flex items-center text-gray-900 hover:text-gold transition-colors duration-300 font-medium"
                >
                  Discover more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntroSection;
