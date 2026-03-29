import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-purple-900/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-yellow-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase">
              Premium Grooming Experience
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            Elpasha Purple Shop
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl text-purple-300 font-light mb-3">
            صالون الباشا للرجال
          </p>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Premium Grooming Experience for Modern Men
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#pricing"
              className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-800 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-900 transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </a>
            <a
              href="tel:+1234567890"
              className="group w-full sm:w-auto bg-white text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5K+</div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Master Barbers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
