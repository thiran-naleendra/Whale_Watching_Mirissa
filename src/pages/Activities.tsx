import { Waves, Wind, Droplets, Fish, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Activities = () => {
  const handleBookNow = (activityName: string) => {
    window.open(
      `https://wa.me/94713121061?text=I%27m%20interested%20in%20booking%20${encodeURIComponent(
        activityName
      )}`,
      "_blank"
    );
  };

  const activities = [
    {
      title: "Surfing Lessons",
      icon: Waves,
      image:
        "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Ride perfect waves with professional instructors for all skill levels.",
      features: [
        "Expert surf instruction",
        "Equipment provided",
        "Beach safety training",
        "Various difficulty levels",
      ],
    },
    {
      title: "Snorkeling & Diving",
      icon: Droplets,
      image:
        "https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Explore vibrant coral reefs and diverse marine life.",
      features: [
        "Professional dive guides",
        "All equipment included",
        "Certification courses available",
        "Marine life encounters",
      ],
    },
    {
      title: "Jet Skiing Adventures",
      icon: Wind,
      image:
        "https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg",
      description:
        "Experience adrenaline rush on modern, well-maintained jet skis.",
      features: [
        "Latest model jet skis",
        "Safety briefing included",
        "Guided coastal tours",
        "Photo opportunities",
      ],
    },
    {
      title: "Sailing Experiences",
      icon: Waves,
      image:
        "https://images.pexels.com/photos/2562096/pexels-photo-2562096.jpeg",
      description: "Peaceful sailing across Mirissa Bay with scenic views.",
      features: [
        "Professional crew",
        "Morning and sunset options",
        "Refreshments included",
        "Scenic coastal views",
      ],
    },
    {
      title: "Deep Sea Fishing",
      icon: Fish,
      image: "https://images.pexels.com/photos/209810/pexels-photo-209810.jpeg",
      description:
        "Try traditional and modern fishing techniques in abundant waters.",
      features: [
        "Traditional methods taught",
        "Modern fishing equipment",
        "Experienced local guides",
        "Catch processing available",
      ],
    },
    {
      title: "White Water Rafting",
      icon: Droplets,
      image:
        "https://images.pexels.com/photos/1732278/pexels-photo-1732278.jpeg",
      description: "Navigate thrilling rapids through lush jungle landscapes.",
      features: [
        "Grade 2-4 rapids",
        "Safety equipment provided",
        "Professional rafting guides",
        "Scenic river journeys",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>
          10 Best Water Sports in Mirissa | Surfing, Diving & Adventures
        </title>
        <meta
          name="title"
          content="10 Best Water Sports in Mirissa | Surfing, Diving & Adventures"
        />
        <meta
          name="description"
          content="Discover top-rated Mirissa activities: Surfing lessons, PADI diving, snorkeling, jet skiing, and deep-sea fishing. Plan your perfect adventure in Sri Lanka today!"
        />

        {/* Keywords Focused on High-Intent Adventure Searches */}
        <meta
          name="keywords"
          content="best water sports mirissa, surfing mirissa lessons, snorkeling tours mirissa, scuba diving sri lanka south coast, jet ski mirissa price, deep sea fishing mirissa, things to do in mirissa 2025"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://whalewatchingmirissa.com/activities"
        />

        {/* Open Graph / Facebook (Visualizing the Action) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://whalewatchingmirissa.com/activities"
        />
        <meta
          property="og:title"
          content="Top Adventure Activities & Water Sports in Mirissa"
        />
        <meta
          property="og:description"
          content="From surfing waves to diving with turtles, experience the ultimate thrill in Mirissa. Book your water sports adventure now!"
        />
        <meta
          property="og:image"
          content="https://whalewatchingmirissa.com/assets/activities-hero.jpg"
        />
        <meta property="og:site_name" content="Whale Watching Mirissa" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mirissa Water Sports & Ocean Adventures"
        />
        <meta
          name="twitter:description"
          content="Experience the best of Mirissa: Surfing, Snorkeling, Diving, and Jet Skiing. Plan your trip with the local experts."
        />
        <meta
          name="twitter:image"
          content="https://whalewatchingmirissa.com/assets/activities-hero.jpg"
        />

        {/* SEO Directives */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section
          className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1752498226651-ca666568d9a2?q=80&w=1679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Dive Into Adventure
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
              Experience thrilling water sports, serene sailing, and
              unforgettable ocean adventures in Mirissa.
            </p>
            <button
              onClick={() => handleBookNow("Custom Water Sports Package")}
              className="bg-blue-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center space-x-2 text-sm md:text-lg"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>Book Your Adventure</span>
            </button>
          </div>
        </section>

        {/* Activities Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                      <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        <h3 className="text-base md:text-xl font-bold text-white">
                          {activity.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 leading-relaxed text-xs md:text-sm flex-1">
                      {activity.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {activity.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs md:text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
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
                      onClick={() => handleBookNow(activity.title)}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 md:py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-600 transition duration-300 flex items-center justify-center space-x-2 text-xs md:text-base"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Activity Packages Section */}
          <div className="bg-blue-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Activity Packages Available
            </h3>
            <p className="text-sm md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Combine multiple water sports and save with our special package
              deals. Perfect for adventure seekers and groups.
            </p>
            <button
              onClick={() => handleBookNow("Water Sports Package")}
              className="bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center space-x-2 text-sm md:text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Inquire About Packages</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
