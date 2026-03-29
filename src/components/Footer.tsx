import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-2 rounded-lg">
                <Scissors className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Elpasha Purple Shop</h3>
                <p className="text-xs text-purple-300">صالون الباشا للرجال</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Premium grooming experience for modern men. Where style meets sophistication.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9AM - 9PM</li>
              <li>Saturday - Sunday: 10AM - 8PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Elpasha Purple Shop. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-purple-900/30 hover:bg-purple-600 p-2 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="bg-purple-900/30 hover:bg-purple-600 p-2 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="bg-purple-900/30 hover:bg-purple-600 p-2 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
