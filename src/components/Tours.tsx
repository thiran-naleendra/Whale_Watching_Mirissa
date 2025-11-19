import {
  Mountain,
  MapPin,
  Camera,
  Palmtree,
  MessageCircle,
} from "lucide-react";

const Tours = () => {
  const handleBookNow = (tourName: string) => {
    window.open(
      `https://wa.me/94713121061?text=I%27m%20interested%20in%20booking%20${encodeURIComponent(
        tourName
      )}`,
      "_blank"
    );
  };

  const tours = [
    {
      title: "Wildlife Safari Experience",
      icon: Camera,
      image:
        "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Discover Sri Lanka's incredible wildlife including leopards in Yala National Park, elephants in their natural habitat, and diverse bird species.",
      highlights: [
        "Leopard spotting in Yala National Park",
        "Elephant watching in natural reserves",
        "Professional wildlife photography opportunities",
        "Expert naturalist guides",
      ],
    },
    {
      title: "Ancient Sigiriya & Cultural Heritage",
      icon: Mountain,
      image:
        "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Explore the magnificent rock fortress of Sigiriya, ancient temples, and UNESCO World Heritage Sites showcasing Sri Lanka's rich history.",
      highlights: [
        "Sigiriya Rock Fortress climb",
        "Ancient cave paintings and frescoes",
        "Polonnaruwa ancient ruins",
        "Traditional village experiences",
      ],
    },
    {
      title: "Pristine Beach Escapes",
      icon: Palmtree,
      image:
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Relax on Sri Lanka's stunning coastline with crystal-clear waters, golden sands, and world-class beach destinations perfect for swimming and sunbathing.",
      highlights: [
        "Secluded beach locations",
        "Turquoise waters and coral reefs",
        "Beachside dining experiences",
        "Sunset viewing spots",
      ],
    },
    {
      title: "Sacred City of Kandy",
      icon: MapPin,
      image:
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Visit the sacred Temple of the Tooth, explore colonial architecture, and immerse yourself in traditional Kandyan culture and performances.",
      highlights: [
        "Temple of the Sacred Tooth Relic",
        "Royal Botanical Gardens",
        "Traditional Kandyan dance shows",
        "Lake and hill country scenery",
      ],
    },
  ];

  return (
    <section id="tours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Sri Lanka
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Extend your adventure beyond the ocean. Discover the island's
            cultural treasures, wildlife wonders, and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour, index) => {
            const Icon = tour.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                    <Icon className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">
                      {tour.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tour.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Tour Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {tour.highlights.map((highlight, idx) => (
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
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleBookNow(tour.title)}
                    className="mt-auto w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-600 transition duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Book This Tour</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Custom Tour Packages
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Want to create your own adventure? We offer personalized tour
            packages tailored to your interests, schedule, and preferences.
          </p>
          <button
            onClick={() => handleBookNow("Custom Tour Package")}
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center space-x-2 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Plan Your Custom Tour</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
