import { Ship, Users, Zap, MessageCircle } from "lucide-react";

const Services = () => {
  const handleBookNow = (serviceName: string) => {
    window.open(
      `https://wa.me/94713121061?text=I%27m%20interested%20in%20booking%20${encodeURIComponent(
        serviceName
      )}`,
      "_blank"
    );
  };

//   const handleBookNow = () => {
//   window.open("https://www.google.com", "_blank");   //booking page
// };


  const services = [
    {
      title: "Shared Whale Watching Tour",
      icon: Users,
      price: "LKR 12,000",
      description:
        "Join fellow ocean enthusiasts on our spacious double-decker boat. Perfect for families and groups.",
      features: [
        "Accommodates up to 70 passengers",
        "Complimentary breakfast on board",
        "Expert navigation team",
        "Safety equipment provided",
        "Comfortable seating areas",
      ],
    },
    {
      title: "Private Speed Boat Experience",
      icon: Zap,
      price: "Custom",
      description:
        "An exclusive experience for those who value privacy. Get closer with our agile speed boat.",
      features: [
        "Maximum 6-8 passengers",
        "Flexible 3-hour duration",
        "Personalized route planning",
        "Quick positioning for sightings",
        "Professional guide included",
      ],
    },
    {
      title: "Private Charter Tour",
      icon: Ship,
      price: "Premium",
      description:
        "The ultimate luxury whale watching. Your private boat, your schedule, your journey.",
      features: [
        "Exclusive boat charter",
        "Customizable itinerary",
        "Extended tour options available",
        "VIP service and amenities",
        "Gourmet refreshments",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12 md:pb-24">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your Adventure
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
            Select the perfect whale watching experience. Every tour includes
            expert guides and unforgettable encounters.
          </p>
          <button
            onClick={() => handleBookNow("Custom Tour Package")}
            className="bg-blue-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center space-x-2 text-sm md:text-lg"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>Plan Your Adventure</span>
          </button>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-6 md:p-8">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="text-2xl md:text-3xl font-bold text-teal-100">
                    {service.price}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm md:text-base"
                      >
                        <svg
                          className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBookNow(service.title)}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-600 transition duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Reserve Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 rounded-2xl md:rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Whale Season Special
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Book tickets early for the best rates and guaranteed
                availability. Peak season offers the highest chance of
                spectacular sightings.
              </p>
              <button
                onClick={() => handleBookNow("Whale Season Tour")}
                className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center space-x-2 text-sm md:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "95%", label: "Success Rate" },
                { stat: "15+", label: "Years Experience" },
                { stat: "50K+", label: "Happy Guests" },
                { stat: "100%", label: "Safety Record" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 md:p-6 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                    {item.stat}
                  </div>
                  <div className="text-gray-600 text-xs md:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
