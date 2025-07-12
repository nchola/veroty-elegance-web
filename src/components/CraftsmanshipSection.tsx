
import { Check } from 'lucide-react';

const CraftsmanshipSection = () => {
  const features = [
    "Premium material selection",
    "Handcrafted by master artisans",
    "Quality assurance testing",
    "Lifetime craftsmanship guarantee"
  ];

  return (
    <section className="craftsmanship bg-white scroll-reveal">
      <div className="max-w-none">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 scroll-float-slow">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Craftsmanship Process" 
                className="w-full h-[500px] object-cover shadow-xl image-hover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight scroll-float-subtle">
                Made to 
                <span className="italic font-serif text-gold block mt-2">Perfection</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed scroll-float-slow">
                Every piece undergoes meticulous attention to detail, from initial 
                concept to final finishing. Our master craftsmen ensure each creation 
                meets our exacting standards of excellence and beauty.
              </p>
              <div className="space-y-6 pt-8 scroll-float">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className="w-8 h-8 bg-gold flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
