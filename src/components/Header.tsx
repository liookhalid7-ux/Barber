import { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-2 rounded-lg">
              <Scissors className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Elpasha Purple Shop</h1>
              <p className="text-xs text-purple-300">صالون الباشا للرجال</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <a
            href="tel:+1234567890"
            className="hidden sm:block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-purple-500/50"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
