import { Waves, Wind, Anchor, Fish, Droplets, MessageCircle } from 'lucide-react';

const WaterSports = () => {
  const handleBookNow = (activityName: string) => {
    window.open(`https://wa.me/94713121061?text=I%27m%20interested%20in%20booking%20${encodeURIComponent(activityName)}`, '_blank');
  };

  const activities = [
    {
      title: 'Surfing Lessons',
      icon: Waves,
      image: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ride the perfect waves of Sri Lanka with professional instructors. Suitable for all skill levels from beginners to advanced surfers.',
      features: [
        'Expert surf instruction',
        'Equipment provided',
        'Beach safety training',
        'Various difficulty levels'
      ]
    },
    {
      title: 'Snorkeling & Diving',
      icon: Droplets,
      image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Explore vibrant coral reefs and encounter diverse marine life in the crystal-clear waters of Mirissa. Discover underwater paradise.',
      features: [
        'Professional dive guides',
        'All equipment included',
        'Certification courses available',
        'Marine life encounters'
      ]
    },
    {
      title: 'Jet Skiing Adventures',
      icon: Wind,
      image: 'https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience an adrenaline rush as you speed across the ocean on modern, well-maintained jet skis with safety instruction included.',
      features: [
        'Latest model jet skis',
        'Safety briefing included',
        'Guided coastal tours',
        'Photo opportunities'
      ]
    },
    {
      title: 'Sailing Experiences',
      icon: Anchor,
      image: 'https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Set sail on a peaceful journey across Mirissa Bay. Perfect for sunset cruises and experiencing the ocean breeze.',
      features: [
        'Professional crew',
        'Morning and sunset options',
        'Refreshments included',
        'Scenic coastal views'
      ]
    },
    {
      title: 'Deep Sea Fishing',
      icon: Fish,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Try traditional and modern fishing techniques in the abundant waters off Sri Lanka. Both overnight and day trips available.',
      features: [
        'Traditional methods taught',
        'Modern fishing equipment',
        'Experienced local guides',
        'Catch processing available'
      ]
    },
    {
      title: 'White Water Rafting',
      icon: Droplets,
      image: 'https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Navigate thrilling rapids on Sri Lanka\'s pristine rivers. An exciting adventure through lush jungle landscapes.',
      features: [
        'Grade 2-4 rapids',
        'Safety equipment provided',
        'Professional rafting guides',
        'Scenic river journeys'
      ]
    }
  ];

  return (
    <section id="water-sports" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Water Sports & Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive into excitement with our range of thrilling water activities. From peaceful sailing to adrenaline-pumping adventures, there's something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {activity.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {activity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBookNow(activity.title)}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-600 transition duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Activity Packages Available</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Combine multiple water sports activities and save with our special package deals. Perfect for adventure seekers and groups.
          </p>
          <button
            onClick={() => handleBookNow('Water Sports Package')}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center space-x-2 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Inquire About Packages</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WaterSports;
