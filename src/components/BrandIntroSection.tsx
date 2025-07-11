
const BrandIntroSection = () => {
  return (
    <section id="brand-intro" className="brand-intro py-20 bg-white scroll-reveal">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              It All Starts From 
              <span className="italic font-serif text-gold block mt-2">The Vision</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over five decades, we have been at the forefront of innovation, 
              creating masterpieces that transcend mere functionality to become 
              works of art. Every piece tells a story of dedication, craftsmanship, 
              and unwavering commitment to excellence.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 font-serif">50+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 font-serif">1000+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Masterpieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 font-serif">50</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Countries</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Craftsmanship" 
              className="w-full h-96 object-cover rounded-lg shadow-2xl image-hover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white font-serif text-lg text-center">Since<br/>1975</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroSection;
