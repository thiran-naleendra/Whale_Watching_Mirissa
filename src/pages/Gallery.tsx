const Gallery = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/892548/pexels-photo-892548.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Blue Whale Fluke',
      category: 'Whales'
    },
    {
      url: 'https://images.pexels.com/photos/15739643/pexels-photo-15739643.jpeg',
      title: 'Blue Whale Spout',
      category: 'Whales'
    },
    {
      url: 'https://images.pexels.com/photos/2347462/pexels-photo-2347462.jpeg',
      title: 'Spinner Dolphins',
      category: 'Dolphins'
    },
    {
      url: 'https://media.istockphoto.com/id/928962242/photo/arctic-blue-whales.jpg?s=612x612&w=0&k=20&c=ls8uZmkk9jTQFGlR4LqUgVgbe0sSyZEE1LaziSoBx3s=',
      title: 'Blue Whale-mottled grey',
      category: 'Whales'
    },
    {
      url: 'https://whalewatchingazores.com/blog/wp-content/uploads/2007/07/pilot-whales.jpg',
      title: 'Pilot Whales',
      category: 'Whales'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIzNZnwIaX55c8hlAB123_RHl4QRIvQ8SHA&s',
      title: 'Blue Whale Nose',
      category: 'Whales'
    },
    {
      url: 'https://www.obri-oceanu.com/i/images/67/killerwhale-04-builtforthekillv_1110x.jpg',
      title: 'Killer Whale',
      category: 'Whales'
    },
    {
      url: 'https://news.flinders.edu.au/wp-content/uploads/2018/01/Whale-2.jpg',
      title: 'Blue Whale',
      category: 'Whales'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-12 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Captured Moments
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the magic through our lens. These incredible encounters await you on your journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-56 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <div className="text-xs md:text-sm text-teal-300 font-semibold mb-1 md:mb-2">{image.category}</div>
                  <h3 className="text-base md:text-lg font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Share your experiences with us on social media using <span className="font-semibold text-blue-600">#BlueHorizonMirissa</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
