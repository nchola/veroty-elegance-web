
const StoryIntroSection = () => {
  // Common styles to avoid repetition
  const commonStyles = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#525459',
    WebkitFontSmoothing: 'antialiased' as const,
    boxSizing: 'border-box' as const,
    WebkitTapHighlightColor: 'transparent',
    visibility: 'visible' as const
  };

  const imageWrapperStyle = {
    width: '100%',
    aspectRatio: '16/9',
    maxWidth: '100%',
    overflow: 'hidden'
  };

  const arrowIcon = (
    <svg 
      className="w-4 h-4 ml-2 text-red-500 group-hover:translate-x-1 transition-transform duration-200" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  const PromotionalBox = ({ imageSrc, imageAlt, title, description, linkText, linkHref }) => (
    <div className="m-2024-box flex-1 min-w-0">
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="furniture-image-wide h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="padding p-6 md:p-8">
        <div className="tit text-2xl md:text-3xl font-normal text-gray-900 mb-3 md:mb-4" style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400
        }}>
          {title}
        </div>
        <div className="txt text-base text-gray-700 mb-4 md:mb-6 leading-relaxed" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          lineHeight: 1.7,
          color: '#525459'
        }}>
          {description}
        </div>
        <div className="cta-arr left">
          <a 
            href={linkHref}
            className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px'
            }}
          >
            {linkText}
            {arrowIcon}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Original Story Intro Section */}
      <section className="bg-white py-12 md:py-16 lg:py-24" style={commonStyles}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight" style={{
                fontFamily: 'calligarisregular'
              }}>
                It all starts from the chair...
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{
                fontFamily: 'calligarisregular',
                color: '#525459'
              }}>
                Since 1923, we have been producing functional and elegant furniture, because we believe that beauty, functionality, and quality can coexist in every product we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Promotional Sections */}
      <section className="section m-2024-columns bg-white" style={{
        ...commonStyles,
        padding: '16px 0',
        objectPosition: 'center 75%'
      }}>
        <div className="columns--2">
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <PromotionalBox
              imageSrc="https://i.pinimg.com/1200x/21/00/d5/2100d5ac1ac3ce911b4989f6a87782ef.jpg"
              imageAlt="Salone del Mobile 2025"
              title="salone del mobile 2025"
              description="Discover the new design for your living space at Salone del Mobile."
              linkText="Find out more"
              linkHref="/salone-del-mobile-2025"
            />
            
            <PromotionalBox
              imageSrc="https://i.pinimg.com/1200x/a6/e4/4c/a6e44c09867933e449f3f9b7d7a1a7a6.jpg"
              imageAlt="Borbonese x veroty"
              title="borbonese x veroty"
              description="An exclusive collaboration: the iconic OP suede by Borbonese meets veroty design."
              linkText="Discover more"
              linkHref="/calligaris-x-borbonese"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StoryIntroSection;
