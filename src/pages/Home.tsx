import {
  MessageCircle,
  ArrowDown,
  Waves,
  Ship,
  Camera,
  Palmtree,
  ChevronDown,
} from "lucide-react";
import { Mountain, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sharedboat from "../Images/islandbreezeboat.jpg";
import speedboat from "../Images/speedboatmirissa.jpg";
import bigboat from "../Images/pvtboat.jpg";
import jcats from "../Images/junglecatsmirissa.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const tours = [
    {
      title: "Shared Big Boat",
      icon: Mountain,
      image: sharedboat,
      description:
        "Double Decker Trimaran departs everyday 7am from mirissa harbour and charges as per person rate. it's more common choice of people as it's affordable and offers you breakfast on board. boat has 70 seats and fully safety equipped and staff will help you anytime you need them.if you stay in mirissa we can arrange transport from hotel to harbor.",
    },
    {
      title: "Private Speed Boat",
      icon: Camera,
      image: speedboat,
      description:
        "Private Speed boat is very unique experience that you can get with whale watching.tour takes 3 hours maximum and you can start from 7am or bit later as your convenience. boat can travel up to 30knots per hour speed that reduce travel time but more watching time.this tour is private so you have to pay per boat and can take 5 people max.",
    },
    {
      title: "Private Big Boat",
      icon: Palmtree,
      image: bigboat,
      description:
        "this is perfect option for those who wish to enjoy whale watching with small private groups,ideal for groups between 10-20pax. boat can take up to 35 passengers you can start this boat early morning from 6am or later and change tour time as your plan. we offer you breakfast and ample beverages as your request.Boat has sanitary facilities as well.",
    },
    {
      title: "Snorkeling & Diving",
      icon: MapPin,
      image:
        "https://images.unsplash.com/photo-1658298208155-ab71765747a1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Sri lanka has few famous diving & snorkeling sites,South of sri lanka(mirissa,polhena,weligama unawatuna & hikkaduwa)has calm weather & clear water from december to april and in Eastern province from june to october. no matter if you don't have experience before here you can start your padi training course as well. ",
    },
  ];

  const heroImages = [
    "https://images.pexels.com/photos/4666753/pexels-photo-4666753.jpeg",
    "https://images.pexels.com/photos/3635870/pexels-photo-3635870.jpeg",
    "https://images.pexels.com/photos/14019368/pexels-photo-14019368.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => {
    window.open(
      "https://wa.me/94713121061?text=I%27m%20interested%20in%20booking%20a%20whale%20watching%20tour",
      "_blank"
    );
  };

  const highlights = [
    { number: "3-5", label: "Hours", description: "Tour Duration" },
    { number: "Daily", label: "7am", description: "Departures" },
    { number: "95%", label: "Success", description: "Rate" },
  ];

  const quickServices = [
    {
      icon: Waves,
      title: "Whale Watching",
      description: "Experience blue whales and dolphins",
      path: "/services",
    },
    {
      icon: Ship,
      title: "Boat Tours",
      description: "Choose your perfect boat experience",
      path: "/services",
    },
    {
      icon: Camera,
      title: "Gallery",
      description: "View amazing ocean moments",
      path: "/gallery",
    },
    {
      icon: Palmtree,
      title: "Sri Lanka Tours",
      description: "Explore the island beyond ocean",
      path: "/tours",
    },
  ];

  const faqs = [
    {
      question: "Tour Schedule",
      answer:
        "Tour Starts Everyday by 7am. you should be at mirissa harbor or meeting point 30 min before.free pickup is you stay mirissa",
    },
    {
      question: "How to Get to Mirissa",
      answer:
        "Mirissa is 180km distance from colombo airport,you can come by 2 hours by using new expressways,exit by kokmaduwa point and come to weligama town,from weligama it's 5km towards matara.please contact us for directions.",
    },
    {
      question: "What To see & Travel Duration",
      answer:
        "Last Season Spotted Blue Whales,Bryde Whales,Sperm Whales,Killer Whales,Dolphins & Turtles,So you may lucky to see One or few types of whales & dolphin During tour.Travel time Depend on the time to see very first whale.Normally it's 3-5 Hours",
    },
    {
      question: "What are the conditions?",
      answer:
        "Whales are wild animals,none of human can control their behaviour in vast oceans hence sightings are depend on the day,you will not refund any after the tour in case of no sightings.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
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
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20"
                >
                  <div className="text-2xl sm:text-4xl font-bold text-white mb-1">
                    {item.number}
                  </div>
                  <div className="text-white text-xs sm:text-sm font-semibold">
                    {item.label}
                  </div>
                  <div className="text-blue-100 text-xs">
                    {item.description}
                  </div>
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
                  ? "bg-white w-6 md:w-8 h-2 md:h-2"
                  : "bg-white/50 w-2 md:w-2 h-2 md:h-2"
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
                <Link
                  key={idx}
                  to={service.path}
                  className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 md:p-8 text-center hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl md:rounded-2xl mb-4 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
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
                </div>
              </div>
            );
          })}
        </div>

        <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedFAQ(expandedFAQ === idx ? null : idx)
                        }
                        className="w-full bg-gray-50 hover:bg-gray-100 transition p-5 md:p-6 flex items-center justify-between text-left"
                      >
                        <h3 className="text-base md:text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 md:w-6 md:h-6 text-gray-600 transition-transform ${
                            expandedFAQ === idx ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedFAQ === idx && (
                        <div className="bg-white p-5 md:p-6 border-t border-gray-200">
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full h-96 md:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={jcats}
                    alt="Restaurant"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-blue-100 mb-8">
            Don't miss the chance to witness the magnificent blue whales in
            their natural habitat.
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
