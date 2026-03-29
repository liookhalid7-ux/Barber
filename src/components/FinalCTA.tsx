import { Calendar, Phone, MapPin, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1319462/pexels-photo-1319462.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-purple-900/80 to-black/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Upgrade Your Look Today
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12">
            Experience the finest grooming service in town. Book your appointment now and join thousands of satisfied clients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="tel:+1234567890"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-800 text-white px-12 py-5 rounded-lg font-bold text-xl hover:from-purple-700 hover:to-purple-900 transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105 flex items-center justify-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              Book Now
            </a>
            <a
              href="tel:+1234567890"
              className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-black/50 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-gray-400 text-sm">
                123 Main Street<br />
                Downtown, City Center
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">
                +1 (234) 567-890<br />
                Mon - Sun: 9AM - 9PM
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6 sm:col-span-2 lg:col-span-1">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm">
                info@elpasha.com<br />
                We reply within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
