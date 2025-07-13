
import ScrollReveal from '@/Animations/TextAnimations/ScrollReveal/ScrollReveal';

const BrandIntroSection = () => {
  return (
    <section id="brand-intro" className="bg-white py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <ScrollReveal 
              baseOpacity={0.15}
              baseRotation={3}
              blurStrength={4}
              containerClassName="mb-6"
              textClassName="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 tracking-tight uppercase leading-tight"
              rotationEnd="bottom top"
              wordAnimationEnd="bottom top"
            >
              must have: extendable tables
            </ScrollReveal>
            
            <ScrollReveal 
              baseOpacity={0.1}
              baseRotation={1.5}
              blurStrength={2}
              containerClassName="mt-4"
              textClassName="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-light italic"
              rotationEnd="bottom center"
              wordAnimationEnd="bottom center"
            >
              For a small home or a spacious living room, for a compact dining area or a significant open space: an extendable table is always an excellent choice.
            </ScrollReveal>
          </div>
          
          <div className="relative scroll-float-slow">
            <video 
              src="/foldablesofa2.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-64 md:h-80 lg:h-96 object-cover shadow-2xl image-hover rounded-lg" 
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:-bottom-8 lg:-right-8 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-gold flex items-center justify-center shadow-xl scroll-float rounded-lg z-10">
              <span className="text-white font-serif text-sm md:text-lg lg:text-xl text-center leading-tight">Since<br />2000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroSection;
