
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="testimonials py-20 bg-gray-900 text-white scroll-reveal">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-light mb-16">What Our Clients Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-slide">
            <Quote className="w-12 h-12 text-gold mx-auto mb-8" />
            <blockquote className="text-2xl font-light italic mb-8 leading-relaxed">
              "The attention to detail and quality of craftsmanship is unparalleled. 
              Each piece has transformed our space into something extraordinary. 
              Veroty doesn't just create furniture—they create heirlooms."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-name text-lg font-medium mb-2">Sarah Johnson</div>
              <div className="author-title text-gray-400">Interior Designer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
