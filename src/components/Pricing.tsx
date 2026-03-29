import { Check, Crown, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Cut',
      price: '$35',
      popular: false,
      features: [
        'Classic Haircut',
        'Hair Wash',
        'Basic Styling',
        '30 Minutes',
      ],
    },
    {
      name: 'Premium Grooming',
      price: '$65',
      popular: true,
      features: [
        'Premium Haircut',
        'Beard Trim & Design',
        'Hot Towel Treatment',
        'Face Massage',
        'Premium Styling Products',
        '60 Minutes',
      ],
    },
    {
      name: 'VIP Experience',
      price: '$120',
      popular: false,
      features: [
        'Signature Haircut',
        'Full Beard Service',
        'Hot Towel & Face Mask',
        'Scalp & Face Massage',
        'Luxury Styling Products',
        'Complimentary Beverage',
        'Priority Booking',
        '90 Minutes',
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-500 font-bold tracking-wider uppercase text-sm">
            Pricing Plans
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Choose Your Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select the perfect grooming package tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b ${
                plan.popular
                  ? 'from-purple-900/40 to-black border-2 border-yellow-500 transform scale-105 shadow-2xl shadow-purple-500/30'
                  : 'from-purple-900/20 to-black border border-purple-800/30'
              } rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                {plan.name === 'VIP Experience' && (
                  <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                )}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+1234567890"
                className={`block w-full text-center py-4 rounded-lg font-bold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700 shadow-lg hover:shadow-yellow-500/50'
                    : 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 shadow-lg hover:shadow-purple-500/30'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
