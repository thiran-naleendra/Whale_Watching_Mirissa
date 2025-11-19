import { Phone, Mail, MapPin, MessageCircle, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/94713121061?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20services', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:whalewatchingmirissa@gmail.com';
  };

  const handlePhone = () => {
    window.location.href = 'tel:+94713121061';
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to embark on your ocean adventure? Contact us today to book your experience or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Book Your Adventure Today</h3>

              <div className="space-y-6">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white text-blue-600 rounded-2xl p-6 hover:bg-blue-50 transition duration-300 flex items-center space-x-4 group"
                >
                  <div className="bg-blue-100 rounded-xl p-3 group-hover:bg-blue-200 transition">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-lg">WhatsApp</div>
                    <div className="text-blue-600 text-sm">Instant booking & inquiries</div>
                  </div>
                </button>

                <button
                  onClick={handlePhone}
                  className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white/20 transition duration-300 flex items-center space-x-4 group"
                >
                  <div className="bg-white/20 rounded-xl p-3 group-hover:bg-white/30 transition">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-lg">Phone</div>
                    <div className="text-blue-100 text-sm">+94 71 312 1061</div>
                  </div>
                </button>

                <button
                  onClick={handleEmail}
                  className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white/20 transition duration-300 flex items-center space-x-4 group"
                >
                  <div className="bg-white/20 rounded-xl p-3 group-hover:bg-white/30 transition">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-blue-100 text-sm break-all">whalewatchingmirissa@gmail.com</div>
                  </div>
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-blue-100">
                      Mirissa Harbour<br />
                      Mirissa, Sri Lanka
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tour Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-xl p-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Tour Schedule</h4>
                    <p className="text-gray-600">
                      Daily departures at 7:00 AM<br />
                      Duration: 3-5 hours<br />
                      Please arrive 30 minutes before departure
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 rounded-xl p-3">
                    <Calendar className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Best Season</h4>
                    <p className="text-gray-600">
                      November to April: Peak whale watching season<br />
                      95% success rate during peak months<br />
                      Year-round dolphin sightings
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-xl p-3">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Booking</h4>
                    <p className="text-gray-600">
                      Advance booking recommended<br />
                      Instant confirmation via WhatsApp<br />
                      Flexible cancellation policy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Bring</h3>
              <ul className="space-y-3">
                {[
                  'Sunscreen and hat',
                  'Comfortable clothing',
                  'Camera or smartphone',
                  'Light jacket (mornings can be cool)',
                  'Motion sickness medication (if needed)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready for the Adventure of a Lifetime?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss your chance to witness the magnificent blue whales and dolphins in their natural habitat. Book your tour today!
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center space-x-2 text-lg shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Book via WhatsApp</span>
          </button>
        </div>
      </div>

      <footer className="mt-24 border-t border-gray-200 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2025 Blue Horizon Whale Watching. All rights reserved.</p>
            <p className="text-sm">Operated by Island Breeze Mirissa - Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
