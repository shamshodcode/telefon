import React from 'react';
import { Film, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">UzCinema</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              O'zbekiston kino san'atini rivojlantirish va xalqimizning boy madaniy merosini 
              saqlash maqsadida tashkil etilgan onlayn platforma.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Yangi filmlar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Mashhur filmlar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">O'zbek kinolari</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Janrlar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Rejissyorlar</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Kategoriyalar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Drama</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Komediya</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Jangari</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Romantik</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Tarixiy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Aloqa</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">info@uzcinema.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">+998 71 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 UzCinema. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Maxfiylik siyosati
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Foydalanish shartlari
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Yordam
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;