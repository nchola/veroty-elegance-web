
import { Calendar, Eye } from 'lucide-react';
import { ScrollVelocity } from '@/TextAnimations/ScrollVelocity/ScrollVelocity';

const CTASection = () => {
  return (
    <section className="cta bg-white scroll-reveal">
      <div className="max-w-none">
        {/* Scroll Velocity Text Animation at top */}
        <div className="py-8 bg-gray-50">
          <ScrollVelocity
            texts={["Get Started", "Contact Us", "Begin Journey", "Create Together"]}
            velocity={45}
            className="text-gold/30 font-light"
            scrollerClassName="text-4xl md:text-6xl"
          />
        </div>

        <div className="max-w-5xl mx-auto px-8 py-32 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight scroll-float-subtle">
            Ready to Create Your 
            <span className="italic font-serif text-gold block mt-2">Masterpiece?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed scroll-float-slow">
            Let our experts help you find the perfect pieces that reflect your unique style and vision. 
            Experience the Veroty difference today.
          </p>
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
      </div>
    </section>
  );
};

export default CTASection;
