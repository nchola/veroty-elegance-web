
const StoryIntroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 font-serif leading-tight">
              It all starts from the chair...
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Since 1923, we have been producing functional and elegant furniture, because we believe that beauty, functionality, and quality can coexist in every product we make.
            </p>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 font-serif leading-tight">
              It All Starts From<br />The Vision
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              For over five decades, we have been at the forefront of innovation, creating masterpieces that transcend mere functionality to become works of art. Every piece tells a story of dedication, craftsmanship, and unwavering commitment to excellence.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 font-serif mb-2">50+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 font-serif mb-2">1000+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Masterpieces</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 font-serif mb-2">50</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntroSection;
