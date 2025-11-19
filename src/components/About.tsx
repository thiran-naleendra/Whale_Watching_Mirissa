import { Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. All our vessels are equipped with modern safety equipment and operated by licensed professionals.'
    },
    {
      icon: Heart,
      title: 'Eco-Conscious',
      description: 'We practice responsible whale watching, maintaining safe distances and minimizing our environmental impact to protect marine life.'
    },
    {
      icon: Award,
      title: 'Expert Guides',
      description: 'Our experienced crew and naturalist guides bring deep knowledge of marine biology and local waters to enhance your experience.'
    },
    {
      icon: Users,
      title: 'Guest Focused',
      description: 'We are committed to creating unforgettable experiences with personalized service and attention to every detail of your journey.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Ocean Adventure Partner
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Island Breeze Mirissa has been operating premium whale watching tours in Sri Lanka since 2009. Over the years, we have conducted thousands of successful tours, creating unforgettable memories for guests from around the world.
              </p>
              <p>
                Our team combines international whale watching expertise with intimate knowledge of local waters, ensuring the highest standards of service and marine conservation.
              </p>
              <p>
                We take pride in our commitment to protecting marine life while providing exceptional experiences. Our approach balances adventure with responsibility, allowing you to witness these magnificent creatures in their natural habitat ethically and sustainably.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700">Years Operating</div>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-teal-600 mb-2">50K+</div>
                <div className="text-gray-700">Happy Guests</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Whale watching boat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white rounded-3xl p-8 shadow-2xl max-w-xs">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Whale sighting success rate during peak season</div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
