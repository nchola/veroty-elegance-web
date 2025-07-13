
import { Calendar, Eye } from 'lucide-react';
import ScrollReveal from '@/Animations/TextAnimations/ScrollReveal/ScrollReveal';

const CTASection = () => {
  return (
    <section className="cta bg-white scroll-reveal">
      <div className="max-w-5xl mx-auto px-8 py-32 text-center">
        <ScrollReveal 
          baseOpacity={0.2}
          baseRotation={2.5}
          blurStrength={4}
          containerClassName="mb-8"
          textClassName="text-5xl md:text-6xl font-light text-gray-900 leading-tight"
          rotationEnd="bottom top"
          wordAnimationEnd="bottom top"
        >
          Ready to Create Your Masterpiece?
        </ScrollReveal>
        
        <ScrollReveal 
          baseOpacity={0.15}
          baseRotation={1.5}
          blurStrength={2}
          containerClassName="mb-12"
          textClassName="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          rotationEnd="bottom center"
          wordAnimationEnd="bottom center"
        >
          Let our experts help you find the perfect pieces that reflect your unique style and vision. Experience the Veroty difference today.
        </ScrollReveal>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center scroll-float">
          <button className="btn-primary bg-gray-900 text-white px-10 py-5 hover:bg-gray-800 transition-colors flex items-center justify-center space-x-3 font-light text-lg">
            <Calendar className="w-5 h-5" />
            <span>Schedule Consultation</span>
          </button>
          <button className="btn-secondary border-2 border-gray-900 text-gray-900 px-10 py-5 hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center space-x-3 font-light text-lg">
            <Eye className="w-5 h-5" />
            <span>View Full Collection</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
