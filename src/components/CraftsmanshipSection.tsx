
import { Check } from 'lucide-react';

const CraftsmanshipSection = () => {
  const features = [
    "Premium material selection",
    "Handcrafted by master artisans",
    "Quality assurance testing",
    "Lifetime craftsmanship guarantee"
  ];

  return (
    <section className="craftsmanship py-20 bg-white scroll-reveal">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Craftsmanship Process" 
              className="w-full h-96 object-cover rounded-lg shadow-xl image-hover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Made to 
              <span className="italic font-serif text-gold block mt-2">Perfection</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every piece undergoes meticulous attention to detail, from initial 
              concept to final finishing. Our master craftsmen ensure each creation 
              meets our exacting standards of excellence and beauty.
            </p>
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
