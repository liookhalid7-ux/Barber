import { Scissors, Sparkles, Crown, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Classic Haircut',
      description: 'Precision cuts tailored to your style and personality',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sparkles,
      title: 'Beard Trim & Design',
      description: 'Expert beard sculpting and maintenance for a sharp look',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Crown,
      title: 'Full Grooming',
      description: 'Complete grooming experience with hot towel and massage',
      image: 'https://images.pexels.com/photos/1319462/pexels-photo-1319462.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-500 font-bold tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Luxury Grooming Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the finest grooming services delivered by master barbers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-purple-900/20 to-black border border-purple-800/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-purple-600 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-yellow-400" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-yellow-400 transition-colors font-semibold group"
                >
                  <Calendar className="w-4 h-4" />
                  Book This Service
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-purple-500/50"
          >
            View All Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
