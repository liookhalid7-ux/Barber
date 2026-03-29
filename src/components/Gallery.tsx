export default function Gallery() {
  const images = [
    'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1319462/pexels-photo-1319462.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <section id="gallery" className="relative py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-500 font-bold tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Style Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse our collection of signature cuts and styles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-lg">Premium Style</p>
                <p className="text-purple-300 text-sm">By Master Barbers</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+1234567890"
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-purple-500/50"
          >
            Book Your Style
          </a>
        </div>
      </div>
    </section>
  );
}
