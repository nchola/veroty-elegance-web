
import { Calendar, Eye } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta py-20 bg-white scroll-reveal">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Ready to Create Your 
          <span className="italic font-serif text-gold block mt-2">Masterpiece?</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let our experts help you find the perfect pieces that reflect your unique style and vision. 
          Experience the Veroty difference today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 font-light">
            <Calendar className="w-5 h-5" />
            <span>Schedule Consultation</span>
          </button>
          <button className="btn-secondary border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center space-x-2 font-light">
            <Eye className="w-5 h-5" />
            <span>View Full Collection</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
