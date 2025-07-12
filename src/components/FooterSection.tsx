
import { Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-[#F5F2F0] text-[#525459] pt-12 pb-0 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Logo & Menu */}
        <div className="grid md:grid-cols-4 gap-12 pb-8 border-b border-gray-300">
          {/* Logo */}
          <div className="md:col-span-1 flex flex-col items-start">
            <div className="mb-6">
              {/* Ganti SVG di bawah dengan logo Veroty Anda */}
              <svg width="180" height="36" viewBox="0 0 240 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* ...SVG PATH... */}
                <text x="0" y="30" fontFamily="serif" fontSize="32" fill="#d4af37">Veroty</text>
              </svg>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              Crafted with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> for those who appreciate excellence
            </div>
            <div className="text-xs text-gray-400">
              © 2024 Veroty. All rights reserved.
            </div>
          </div>
          {/* Menu */}
          <div>
            <div className="text-lg font-semibold mb-3">Inspiration</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold transition">Materials</a></li>
              <li><a href="#" className="hover:text-gold transition">Designer</a></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-3">Veroty World</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold transition">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition">News & Blog</a></li>
              <li><a href="#" className="hover:text-gold transition">Legal Area</a></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-3">Download</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold transition">Catalogues</a></li>
              <li><a href="#" className="hover:text-gold transition">Assembly Sheets</a></li>
              <li><a href="#" className="hover:text-gold transition">Data Sheets</a></li>
              <li><a href="#" className="hover:text-gold transition">All Files</a></li>
            </ul>
          </div>
        </div>
        {/* Customer Care & Social */}
        <div className="grid md:grid-cols-2 gap-8 py-8 border-b border-gray-300">
          <div>
            <div className="text-lg font-semibold mb-2">Customer Care</div>
            <div className="text-sm mb-1">Senin - Jumat, 09.00 – 17.00 WIB (Hari Kerja)</div>
            <div className="text-sm mb-1">+62 21 87 953 555</div>
            <div className="text-sm mb-1">ika.veroty@gmail.com</div>
            <div className="text-sm">Kp. Babakan Cikeas No.29 Desa Sentul, Kec. Babakan Madang, Kab. Bogor - Indonesia</div>
            <div className="text-xs text-gray-400 mt-2">Layanan Pengaduan Ditjen PKTN: 0853-1111-1010</div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">Follow Us</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition">Facebook</a>
              <a href="#" className="hover:text-gold transition">Instagram</a>
              <a href="#" className="hover:text-gold transition">Pinterest</a>
              <a href="#" className="hover:text-gold transition">YouTube</a>
            </div>
          </div>
        </div>
        {/* Credits */}
        <div className="py-6 text-xs text-center text-gray-400">
          <span>Website by Veroty Team</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
