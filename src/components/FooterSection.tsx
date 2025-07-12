
import { Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-none px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-serif text-gold mb-6">Veroty</h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Crafting excellence since 1975. Where timeless design meets uncompromising quality.
              </p>
              <p className="text-sm text-gray-500">
                © 2024 Veroty. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-light mb-6">Collections</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Signature Series</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Heritage Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Contemporary</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Limited Edition</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-light mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>+1 (555) 123-4567</li>
                <li>info@veroty.com</li>
                <li>New York, NY</li>
                <li>London, UK</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-16 pt-12 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2 text-lg">
              <span>Crafted with</span>
              <Heart className="w-5 h-5 text-red-500" />
              <span>for those who appreciate excellence</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
