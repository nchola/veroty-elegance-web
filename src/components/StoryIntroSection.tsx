
const StoryIntroSection = () => {
  return (
    <section className="story-intro-section py-16 bg-white">
      <div className="section-container max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-12 md:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex-1 pr-6">
            <div className="m-2024-box">
              <div className="tit text-4xl md:text-5xl font-light mb-6 text-gray-900 font-serif">
                It all starts from the chair...
              </div>
              <div className="txt text-lg text-gray-600 leading-relaxed mb-8">
                Since 1923, we have been producing functional and elegant furniture, because we believe that beauty, functionality, and quality can coexist in every product we make.
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
          
          {/* Right Column - Video */}
          <div className="flex-1">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-auto object-cover"
              >
                <source src="/foldablechair.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntroSection;
