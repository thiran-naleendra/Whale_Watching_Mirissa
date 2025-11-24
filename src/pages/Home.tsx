import { MessageCircle, ArrowDown, Waves, Ship, Camera, Palmtree } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.pexels.com/photos/4666753/pexels-photo-4666753.jpeg',
    'https://images.pexels.com/photos/3635870/pexels-photo-3635870.jpeg',
    'https://images.pexels.com/photos/14019368/pexels-photo-14019368.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => {
    window.open('https://wa.me/94713121061?text=I%27m%20interested%20in%20booking%20a%20whale%20watching%20tour', '_blank');
  };

  const highlights = [
    { number: '3-5', label: 'Hours', description: 'Tour Duration' },
    { number: 'Daily', label: '7am', description: 'Departures' },
    { number: '95%', label: 'Success', description: 'Rate' }
  ];

  const quickServices = [
    {
      icon: Waves,
      title: 'Whale Watching',
      description: 'Experience blue whales and dolphins',
      path: '/services'
    },
    {
      icon: Ship,
      title: 'Boat Tours',
      description: 'Choose your perfect boat experience',
      path: '/services'
    },
    {
      icon: Camera,
      title: 'Gallery',
      description: 'View amazing ocean moments',
     path: '/gallery'
    },
    {
      icon: Palmtree,
      title: 'Sri Lanka Tours',
      description: 'Explore the island beyond ocean',
      path: '/tours'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Experience the Majestic
              <br className="hidden sm:block" />
              <span className="text-teal-300">Blue Whales</span>
            </h1>

           

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
              <button
                onClick={handleBookNow}
                className="w-full sm:w-auto group bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-teal-400 hover:text-white transition duration-300 flex items-center justify-center space-x-2 shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Book Adventure</span>
              </button>

              
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mt-12">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
                  <div className="text-2xl sm:text-4xl font-bold text-white mb-1">{item.number}</div>
                  <div className="text-white text-xs sm:text-sm font-semibold">{item.label}</div>
                  <div className="text-blue-100 text-xs">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <ArrowDown className="w-8 h-8 text-white" />
        </div>

        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`transition-all ${
                idx === currentImageIndex
                  ? 'bg-white w-6 md:w-8 h-2 md:h-2'
                  : 'bg-white/50 w-2 md:w-2 h-2 md:h-2'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Quick Access
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              Start your ocean adventure today
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {quickServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <a
                  key={idx}
                  href={service.path}
                  className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 md:p-8 text-center hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl md:rounded-2xl mb-4 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">Ready for Your Adventure?</h2>
          <p className="text-sm sm:text-base md:text-xl text-blue-100 mb-8">
            Don't miss the chance to witness the magnificent blue whales in their natural habitat.
          </p>
          <button
            onClick={handleBookNow}
            className="bg-white text-blue-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center space-x-2 text-base md:text-lg shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Book via WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
