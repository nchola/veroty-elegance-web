
import ScrollReveal from '@/Animations/TextAnimations/ScrollReveal/ScrollReveal';

const StoryIntroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <ScrollReveal 
              baseOpacity={0.2}
              baseRotation={2}
              blurStrength={3}
              containerClassName="mb-4"
              textClassName="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 font-serif leading-tight"
              rotationEnd="bottom top"
              wordAnimationEnd="bottom top"
            >
              It all starts from the chair...
            </ScrollReveal>
            
            <ScrollReveal 
              baseOpacity={0.1}
              baseRotation={1}
              blurStrength={2}
              containerClassName="mt-6"
              textClassName="text-base md:text-lg text-gray-600 leading-relaxed"
              rotationEnd="bottom center"
              wordAnimationEnd="bottom center"
            >
              Since 1923, we have been producing functional and elegant furniture, because we believe that beauty, functionality, and quality can coexist in every product we make.
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntroSection;
