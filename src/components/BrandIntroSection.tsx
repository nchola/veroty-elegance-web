import { ScrollVelocity } from '@/Animations/ScrollVelocity/ScrollVelocity';
const BrandIntroSection = () => {
  return <section id="brand-intro" className="section m-2024-split pt-20 pb-0 my-[220px] mx-[211px] px-[2px] py-[8px]">
      <div className="max-w-7xl mx-auto px-8 py-px my-[150px]">
        <div className="grid md:grid-cols-2 gap-20 items-center my-px px-[12px]">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-gray-900 tracking-tight uppercase">
              must have: <span className="text-gold lowercase font-serif font-bold">extendable tables</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic mb-2">
              For a small home or a spacious living room, for a compact dining area or a significant open space: an extendable table is always an excellent choice.
            </p>
            
          </div>
          <div className="relative scroll-float-slow">
            <video src="/foldablesofa2.mp4" autoPlay muted loop playsInline className="w-full h-[500px] object-contain shadow-2xl image-hover rounded-lg" />
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gold flex items-center justify-center shadow-xl scroll-float">
              <span className="text-white font-serif text-xl text-center leading-tight">Since<br />2000</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BrandIntroSection;