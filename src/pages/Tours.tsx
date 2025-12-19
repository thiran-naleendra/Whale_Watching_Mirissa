import {
  Mountain,
  MapPin,
  Camera,
  Palmtree,
  MessageCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

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
        "https://images.pexels.com/photos/46254/leopard-wildcat-big-cat-botswana-46254.jpeg",
      description:
        "Discover Sri Lanka's incredible wildlife including leopards in Yala National Park and elephants.",
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
        "https://images.pexels.com/photos/13391116/pexels-photo-13391116.jpeg",
      description:
        "Explore the magnificent rock fortress of Sigiriya and UNESCO World Heritage Sites.",
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
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Relax on stunning coastline with crystal-clear waters and golden sands.",
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
      image: "https://images.pexels.com/photos/322437/pexels-photo-322437.jpeg",
      description:
        "Visit the Temple of the Tooth and explore traditional Kandyan culture.",
      highlights: [
        "Temple of the Sacred Tooth Relic",
        "Royal Botanical Gardens",
        "Traditional Kandyan dance shows",
        "Lake and hill country scenery",
      ],
    },
  ];

  return (
    <>
      <Helmet>
    {/* Primary SEO Meta Tags */}
    <title>Sri Lanka Tour Packages 2025 | Wildlife, Culture & Beach Tours</title>
    <meta name="title" content="Sri Lanka Tour Packages 2025 | Wildlife, Culture & Beach Tours" />
    <meta 
      name="description" 
      content="Explore Sri Lanka with Island Breeze. Customizable 2025 tour packages including Yala wildlife safaris, Sigiriya rock tours, Kandy culture, and scenic tea estates. Book now!" 
    />

    {/* Regional & Activity Keywords */}
    <meta 
      name="keywords" 
      content="sri lanka tour packages 2025, sigiriya rock tour, yala wildlife safari, kandy cultural tours, tea estate tours sri lanka, customized sri lanka itinerary, ella scenic train tours" 
    />

    {/* Canonical URL */}
    <link rel="canonical" href="https://whalewatchingmirissa.com/tours" />

    {/* Open Graph / Facebook (Showcasing the Island's Beauty) */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://whalewatchingmirissa.com/tours" />
    <meta property="og:title" content="Unforgettable Sri Lanka Island Tours | Wildlife & Heritage" />
    <meta 
      property="og:description" 
      content="From golden beaches to misty mountains. Discover our hand-picked Sri Lanka travel packages and custom itineraries for 2025." 
    />
    <meta property="og:image" content="https://whalewatchingmirissa.com/assets/sri-lanka-tours-hero.jpg" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Explore Sri Lanka | 2025 Custom Tour Packages" />
    <meta 
      name="twitter:description" 
      content="Book your 2025 Sri Lanka adventure. Safaris, heritage sites, and tropical escapes tailored to your schedule." 
    />
    <meta name="twitter:image" content="https://whalewatchingmirissa.com/assets/sri-lanka-tours-hero.jpg" />

    {/* Robots & Directives */}
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
</Helmet>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1753442361369-e2079446a2b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Explore the Wonders of Sri Lanka
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
              Adventure, culture, and nature await. Discover unforgettable
              experiences with our curated tours.
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

        {/* Tours Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {tours.map((tour, index) => {
              const Icon = tour.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex items-center space-x-3">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      <h3 className="text-lg md:text-2xl font-bold text-white">
                        {tour.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base flex-1">
                      {tour.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Tour Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {tour.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs md:text-sm"
                          >
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5 text-teal-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0"
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
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-600 transition duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Book This Tour</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Tours Section */}
          <div className="text-center bg-gradient-to-r from-blue-200 to-teal-200 rounded-2xl md:rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Custom Tour Packages
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Want to create your own adventure? We offer personalized tour
              packages tailored to your interests and schedule.
            </p>
            <button
              onClick={() => handleBookNow("Custom Tour Package")}
              className="bg-blue-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center space-x-2 text-sm md:text-lg"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>Plan Your Tour</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
