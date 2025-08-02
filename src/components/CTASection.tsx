
import { ArrowRight } from 'lucide-react';

const InspirationSection = () => {
  const inspirationImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      alt: "Modern dining room with elegant furniture"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", 
      alt: "Contemporary living space with premium seating"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
      alt: "Sophisticated interior design composition"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      alt: "Luxury living room arrangement"
    }
  ];

  return (
    <section className="section-seamless bg-white full-bleed py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-0">
          {inspirationImages.map((item, index) => (
            <div key={item.id} className="relative group overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  height: index < 2 ? '50vh' : '50vh',
                  minHeight: '300px'
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex items-center justify-center p-8 lg:p-16 xl:p-24">
          <div className="max-w-lg">
            <h2 className="font-secondary text-5xl lg:text-6xl xl:text-7xl font-light mb-8 text-foreground leading-tight">
              inspiration
            </h2>
            <div className="space-y-6 mb-10">
              <p className="font-primary text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Find inspiration by exploring our living spaces. Discover fantastic furniture compositions, delve into the details of the living rooms created for you by Veroty stylists.
              </p>
            </div>
            <button className="group inline-flex items-center text-lg font-primary text-foreground hover:text-primary transition-colors">
              explore our rooms
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
