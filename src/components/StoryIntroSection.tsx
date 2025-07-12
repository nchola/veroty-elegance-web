
const StoryIntroSection = () => {
  return (
    <section className="story-intro-section py-16 bg-white">
      <div className="section-container max-w-4xl mx-auto px-4">
        <div className="single text-center">
          <div className="tit text-4xl md:text-5xl font-light mb-6 text-gray-900 font-serif">
            It all starts from the chair...
          </div>
          <div className="txt text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Since 1923, we have been producing functional and elegant furniture, because we believe that beauty, functionality, and quality can coexist in every product we make.
          </div>
          <div className="grid grid-cols-3 gap-12 pt-12 scroll-float">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 font-serif mb-2">50+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Years Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 font-serif mb-2">1000+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Masterpieces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 font-serif mb-2">50</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntroSection;
