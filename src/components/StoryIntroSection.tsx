
const StoryIntroSection = () => {
  return (
    <section className="section m-2024-split py-16 bg-white">
      <div className="split--1">
        <div className="flex">
          {/* Left Side Content */}
          <div className="flex-1">
            <div className="m-2024-box p-12 lg:p-16">
              <div className="tit text-4xl lg:text-5xl font-light mb-6 text-gray-900 font-serif leading-tight">
                It all starts from the chair...
              </div>
              <div className="txt text-lg text-gray-600 leading-relaxed">
                Since 1923, we have been producing functional and elegant furniture, because we believe that beauty, functionality, and quality can coexist in every product we make
              </div>
            </div>
          </div>
          
          {/* Right Side Content */}
          <div className="flex-1">
            <div className="m-2024-box p-12 lg:p-16">
              <div className="tit text-4xl lg:text-5xl font-light mb-6 text-gray-900 font-serif leading-tight">
                It All Starts From The Vision
              </div>
              <div className="txt text-lg text-gray-600 leading-relaxed mb-8">
                For over five decades, we have been at the forefront of innovation, creating masterpieces that transcend mere functionality to become works of art. Every piece tells a story of dedication, craftsmanship, and unwavering commitment to excellence.
              </div>
              
              {/* Statistics */}
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">50+</div>
                  <div className="text-sm text-gray-600">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Masterpieces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">50</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntroSection;
