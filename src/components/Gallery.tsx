const Gallery = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/892548/pexels-photo-892548.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Blue Whale Breach',
      category: 'Whales'
    },
    {
      url: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Spinner Dolphins',
      category: 'Dolphins'
    },
    {
      url: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ocean Adventure',
      category: 'Tours'
    },
    {
      url: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Whale Tail',
      category: 'Whales'
    },
    {
      url: 'https://images.pexels.com/photos/2765870/pexels-photo-2765870.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coastal Beauty',
      category: 'Scenery'
    },
    {
      url: 'https://images.pexels.com/photos/3622517/pexels-photo-3622517.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Marine Life',
      category: 'Wildlife'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Captured Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the magic through our lens. These incredible encounters await you on your journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-teal-300 font-semibold mb-1">{image.category}</div>
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Share your experiences with us on social media using #BlueHorizonMirissa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
