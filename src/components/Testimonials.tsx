import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael Anderson',
      role: 'Business Executive',
      text: 'Best barbershop experience in the city. The attention to detail and professionalism is unmatched. I never go anywhere else.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'Entrepreneur',
      text: 'The VIP experience is worth every penny. From the moment you walk in, you feel like royalty. Exceptional service and incredible results.',
      rating: 5,
    },
    {
      name: 'James Thompson',
      role: 'Creative Director',
      text: 'These guys are true artists. They understand modern styles and always deliver exactly what I want. Highly recommend for any professional.',
      rating: 5,
    },
    {
      name: 'Robert Chen',
      role: 'Tech Founder',
      text: 'Premium quality service with outstanding results. The barbers are skilled, friendly, and always consistent. This is my go-to place.',
      rating: 5,
    },
  ];

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-500 font-bold tracking-wider uppercase text-sm">
            Client Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by thousands of satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-900/20 to-black border border-purple-800/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Quote className="w-10 h-10 text-purple-500 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-purple-800/30 pt-4">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-purple-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
