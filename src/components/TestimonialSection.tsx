
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="testimonials py-32 bg-white text-gray-900 scroll-reveal border-t border-gray-100">
      <div className="max-w-none px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-20 leading-tight">What Our Clients Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial-slide">
              <Quote className="w-16 h-16 text-gold mx-auto mb-12" />
              <blockquote className="text-3xl md:text-4xl font-light italic mb-12 leading-relaxed text-gray-800">
                "The attention to detail and quality of craftsmanship is unparalleled. 
                Each piece has transformed our space into something extraordinary. 
                Veroty doesn't just create furniture—they create heirlooms."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name text-xl font-medium mb-2 text-gray-900">Sarah Johnson</div>
                <div className="author-title text-gray-500 text-lg">Interior Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
