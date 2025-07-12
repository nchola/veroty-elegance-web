
import { ScrollVelocity } from '@/TextAnimations/ScrollVelocity/ScrollVelocity';

const BrandIntroSection = () => {
  return (
    <section id="brand-intro" className="brand-intro bg-white scroll-reveal">
      <div className="max-w-none">
        {/* Scroll Velocity Text Animation */}
        <div className="py-8 border-t border-gray-100">
          <ScrollVelocity
            texts={["Excellence", "Craftsmanship", "Innovation", "Quality"]}
            velocity={50}
            className="text-gray-200 font-light"
            scrollerClassName="text-6xl md:text-8xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight scroll-float-subtle">
                It All Starts From 
                <span className="italic font-serif text-gold block mt-2">The Vision</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed scroll-float-slow">
                For over five decades, we have been at the forefront of innovation, 
                creating masterpieces that transcend mere functionality to become 
                works of art. Every piece tells a story of dedication, craftsmanship, 
                and unwavering commitment to excellence.
              </p>
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
            <div className="relative scroll-float-slow">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Craftsmanship" 
                className="w-full h-[500px] object-cover shadow-2xl image-hover"
              />
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gold flex items-center justify-center shadow-xl scroll-float">
                <span className="text-white font-serif text-xl text-center leading-tight">Since<br/>1975</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroSection;
