
import { Quote } from 'lucide-react';
import ScrollReveal from '@/Animations/TextAnimations/ScrollReveal/ScrollReveal';

const TestimonialSection = () => {
  return (
    <section className="testimonials bg-white text-gray-900 scroll-reveal border-t border-gray-100 my-[100px] py-0">
      <div className="max-w-5xl mx-auto px-8 py-32 text-center">
        <ScrollReveal 
          baseOpacity={0.2}
          baseRotation={2}
          blurStrength={3}
          containerClassName="mb-20"
          textClassName="text-5xl md:text-6xl font-light leading-tight"
          rotationEnd="bottom top"
          wordAnimationEnd="bottom top"
        >
          What Our Clients Say
        </ScrollReveal>
        
        <div className="testimonial-slider">
          <div className="testimonial-slide scroll-float-slow">
            <Quote className="w-16 h-16 text-gold mx-auto mb-12 scroll-float" />
            
            <ScrollReveal 
              baseOpacity={0.15}
              baseRotation={1.5}
              blurStrength={3}
              containerClassName="mb-12"
              textClassName="text-3xl md:text-4xl font-light italic leading-relaxed text-gray-800"
              rotationEnd="bottom center"
              wordAnimationEnd="bottom center"
            >
              "The attention to detail and quality of craftsmanship is unparalleled. Each piece has transformed our space into something extraordinary. Veroty doesn't just create furniture—they create heirlooms."
            </ScrollReveal>
            
            <div className="testimonial-author scroll-float-subtle">
              <ScrollReveal 
                baseOpacity={0.1}
                baseRotation={1}
                blurStrength={2}
                containerClassName="mb-2"
                textClassName="text-xl font-medium text-gray-900"
                rotationEnd="bottom center"
                wordAnimationEnd="bottom center"
              >
                Sarah Johnson
              </ScrollReveal>
              
              <ScrollReveal 
                baseOpacity={0.1}
                baseRotation={0.5}
                blurStrength={1}
                containerClassName=""
                textClassName="text-gray-500 text-lg"
                rotationEnd="bottom center"
                wordAnimationEnd="bottom center"
              >
                Interior Designer
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
