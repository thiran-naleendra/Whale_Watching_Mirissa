import { Ship, Users, Zap, MessageCircle } from 'lucide-react';

const Services = () => {
  const handleBookNow = (serviceName: string) => {
    window.open(
      `https://wa.me/94713121061?text=I%27m%20interested%20in%20booking%20${encodeURIComponent(
        serviceName
      )}`,
      "_blank"
    );
  };

  const services = [
    {
      title: "Shared Whale Watching Tour",
      icon: Users,
      price: "LKR 12,000",
      description:
        "Join fellow ocean enthusiasts on our spacious double-decker boat. Perfect for families and groups seeking an affordable adventure.",
      features: [
        "Accommodates up to 70 passengers",
        "Complimentary breakfast on board",
        "Expert navigation team",
        "Safety equipment provided",
        "Comfortable seating areas",
        "Observation deck access",
      ],
    },
    {
      title: "Private Speed Boat Experience",
      icon: Zap,
      price: "LKR 12,000",
      description:
        "An exclusive, intimate experience for those who value privacy. Get closer to the action with our agile speed boat.",
      features: [
        "Maximum 6-8 passengers",
        "Flexible 3-hour duration",
        "Personalized route planning",
        "Quick positioning for sightings",
        "Premium comfort",
        "Professional guide included",
      ],
    },
    {
      title: "Private Charter",
      icon: Ship,
      price: "LKR 12,000",
      description:
        "The ultimate luxury whale watching experience. Your private boat, your schedule, your unforgettable journey.",
      features: [
        "Exclusive boat charter",
        "Customizable itinerary",
        "Extended tour options available",
        "VIP service and amenities",
        "Gourmet refreshments",
        "Photography assistance",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect whale watching experience tailored to your preferences.
          </p>
        </div>

        {/* GRID FIXED HEIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 h-full flex flex-col"
              >
                {/* Top Section */}
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-8">
                  <Icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-teal-100">{service.price}</div>
                </div>

                {/* Bottom Section */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Fixed Description Height */}
                  <p className="text-gray-600 mb-6 leading-relaxed min-h-[70px]">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
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

                  {/* Button stays at bottom */}
                  <button
                    onClick={() => handleBookNow(service.title)}
                    className="mt-auto w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-full font-semibold hover:from-blue-700 hover:to-teal-600 transition duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Reserve Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
