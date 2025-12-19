import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Calendar,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/94713121061?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20services",
      "_blank"
    );
  };

  const handleEmail = () => {
    window.location.href = "mailto:whalewatchingmirissa@gmail.com";
  };

  const handlePhone = () => {
    window.location.href = "tel:+94713121061";
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>
          Contact Us | Book Whale Watching Mirissa | 2025 Tour Bookings
        </title>
        <meta
          name="title"
          content="Contact Us | Book Whale Watching Mirissa | 2025 Tour Bookings"
        />
        <meta
          name="description"
          content="Get in touch with Island Breeze Mirissa. Book your whale watching tour via WhatsApp, Phone, or Email. Daily departures at 7 AM from Mirissa Harbor. Instant confirmation!"
        />

        {/* Local SEO & Booking Keywords */}
        <meta
          name="keywords"
          content="book whale watching mirissa, mirissa whale watching contact number, whale watching mirissa harbor location, whale tour price mirissa, island breeze mirissa booking, whale watching sri lanka whatsapp"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://whalewatchingmirissa.com/contact" />

        {/* Open Graph / Facebook (Designed for trust) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://whalewatchingmirissa.com/contact"
        />
        <meta
          property="og:title"
          content="Contact Island Breeze Mirissa | Book Your Ocean Adventure"
        />
        <meta
          property="og:description"
          content="Ready for the adventure of a lifetime? Contact us for instant bookings and inquiries about our 2025 whale and dolphin tours."
        />
        <meta
          property="og:image"
          content="https://whalewatchingmirissa.com/assets/contact-hero.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Whale Watching Mirissa"
        />
        <meta
          name="twitter:description"
          content="Instant booking via WhatsApp. Call or email us to reserve your spot for the best whale watching experience in Sri Lanka."
        />

        {/* Robots & Directives */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 md:pt-24 pb-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to embark on your ocean adventure? Contact us to book or ask
              questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                  Book Your Adventure Today
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-white text-blue-600 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-blue-50 transition duration-300 flex items-center space-x-4 group text-left"
                  >
                    <div className="bg-blue-100 rounded-lg md:rounded-xl p-3 group-hover:bg-blue-200 transition flex-shrink-0">
                      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base md:text-lg">
                        WhatsApp
                      </div>
                      <div className="text-blue-600 text-xs md:text-sm">
                        Instant booking & inquiries
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handlePhone}
                    className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/20 transition duration-300 flex items-center space-x-4 group text-left"
                  >
                    <div className="bg-white/20 rounded-lg md:rounded-xl p-3 group-hover:bg-white/30 transition flex-shrink-0">
                      <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base md:text-lg">
                        Phone
                      </div>
                      <div className="text-blue-100 text-xs md:text-sm break-all">
                        +94 71 312 1061
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleEmail}
                    className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/20 transition duration-300 flex items-center space-x-4 group text-left"
                  >
                    <div className="bg-white/20 rounded-lg md:rounded-xl p-3 group-hover:bg-white/30 transition flex-shrink-0">
                      <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base md:text-lg">
                        Email
                      </div>
                      <div className="text-blue-100 text-xs md:text-sm break-all">
                        whalewatchingmirissa@gmail.com
                      </div>
                    </div>
                  </button>
                </div>

                <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-white/20">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1 md:mb-2 text-base md:text-lg">
                        Location
                      </div>
                      <div className="text-blue-100 text-sm md:text-base">
                        Mirissa Harbour
                        <br />
                        Mirissa, Sri Lanka
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Tour Information
                </h3>

                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg md:rounded-xl p-3 flex-shrink-0">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                        Tour Schedule
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        Daily departures at 7:00 AM
                        <br />
                        Duration: 3-5 hours
                        <br />
                        Please arrive 30 minutes before departure
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 rounded-lg md:rounded-xl p-3 flex-shrink-0">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                        Best Season
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        November to April: Peak whale watching season
                        <br />
                        95% success rate during peak months
                        <br />
                        Year-round dolphin sightings
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg md:rounded-xl p-3 flex-shrink-0">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                        Booking
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        Advance booking recommended
                        <br />
                        Instant confirmation via WhatsApp
                        <br />
                        Flexible cancellation policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl md:rounded-3xl p-6 md:p-8">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  What to Bring
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Sunscreen and hat",
                    "Comfortable clothing",
                    "Camera or smartphone",
                    "Light jacket (mornings can be cool)",
                    "Motion sickness medication (if needed)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for the Adventure of a Lifetime?
            </h3>
            <p className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't miss your chance to witness the magnificent blue whales and
              dolphins. Book your tour today!
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center space-x-2 text-base md:text-lg shadow-xl"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>Book via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
