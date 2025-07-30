
const StoryIntroSection = () => {
  // Common styles to avoid repetition
  const commonStyles = {
    fontFamily: 'calligarisregular',
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#525459',
    WebkitFontSmoothing: 'antialiased',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    visibility: 'visible'
  };

  const imageWrapperStyle = {
    width: '611px',
    height: '345px',
    aspectRatio: '611/345'
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
    <div className="m-2024-box flex-1">
      <div className="image-wrapper" style={imageWrapperStyle}>
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="padding bg-white p-8">
        <div className="tit fs30 text-3xl font-bold text-gray-900 mb-4">
          {title}
        </div>
        <div className="txt fs16 text-base text-gray-700 mb-6">
          {description}
        </div>
        <div className="cta-arr left">
          <a 
            href={linkHref}
            className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group"
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
      <section className="bg-white py-16 md:py-24" style={commonStyles}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight" style={{
                fontFamily: 'calligarisregular'
              }}>
                It all starts from the chair...
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{
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
      <section className="section m-2024-columns" style={{
        ...commonStyles,
        padding: '0px 0'
      }}>
        <div className="columns--2">
          <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 md:px-8">
            <PromotionalBox
              imageSrc="https://i.pinimg.com/736x/b8/86/cc/b886cc4fcee55f2bf89d1a57c8cd2a7d.jpg"
              imageAlt="Salone del Mobile 2025"
              title="Salone del Mobile 2025"
              description="Discover the new design for your living space at Salone del Mobile."
              linkText="Find out more"
              linkHref="/AS/en/salone-del-mobile-2025"
            />
            
            <PromotionalBox
              imageSrc="https://i.pinimg.com/736x/0b/c6/cd/0bc6cd7d7a3b5273c20609ab7a31d547.jpg"
              imageAlt="Borbonese x Calligaris"
              title="Borbonese x Calligaris"
              description="An exclusive collaboration: the iconic OP suede by Borbonese meets Calligaris design."
              linkText="Discover more"
              linkHref="/AS/en/calligaris-x-borbonese"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StoryIntroSection;
