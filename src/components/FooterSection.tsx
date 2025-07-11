
import { Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif text-gold mb-4">Veroty</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Crafting excellence since 1975. Where timeless design meets uncompromising quality.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Veroty. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">Collections</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Signature Series</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Heritage Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contemporary</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limited Edition</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>info@veroty.com</li>
              <li>New York, NY</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for those who appreciate excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
