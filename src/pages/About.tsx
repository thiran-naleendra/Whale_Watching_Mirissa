import { Award, Heart, Shield, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety is our top priority. All vessels equipped with modern safety equipment and licensed professionals.",
    },
    {
      icon: Heart,
      title: "Eco-Conscious",
      description:
        "We practice responsible whale watching, maintaining safe distances and minimizing environmental impact.",
    },
    {
      icon: Award,
      title: "Expert Guides",
      description:
        "Our experienced crew brings deep knowledge of marine biology and local waters to enhance your experience.",
    },
    {
      icon: Users,
      title: "Guest Focused",
      description:
        "Committed to creating unforgettable experiences with personalized service and attention to detail.",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          About Island Breeze Mirissa | 15+ Years Trusted Whale Tours
        </title>
        <meta
          name="title"
          content="About Island Breeze Mirissa | 15+ Years Trusted Whale Tours"
        />
        <meta
          name="description"
          content="Learn about Island Breeze Mirissa. Since 2009, we've provided safe, eco-friendly whale watching in Sri Lanka with expert guides and a 95% sighting success rate. Meet our team!"
        />

        {/* Keywords Focused on Company Trust & Ethics */}
        <meta
          name="keywords"
          content="island breeze mirissa, whale watching mirissa team, ethical whale watching sri lanka, mirissa boat tour operators, professional whale guides mirissa, ocean conservation sri lanka"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://whalewatchingmirissa.com/about" />

        {/* Open Graph / Facebook (Visualizing Trust) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://whalewatchingmirissa.com/about"
        />
        <meta
          property="og:title"
          content="Island Breeze Mirissa | Leading Whale Tour Operator Since 2009"
        />
        <meta
          property="og:description"
          content="15 years of ocean expertise. Join Island Breeze for safe, ethical, and professional whale and dolphin watching adventures in Mirissa."
        />
        <meta
          property="og:image"
          content="https://whalewatchingmirissa.com/assets/about-team-image.jpg"
        />
        <meta property="og:site_name" content="Whale Watching Mirissa" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Island Breeze Whale Watching Mirissa"
        />
        <meta
          name="twitter:description"
          content="Discover our story. 15 years, 50,000+ happy guests, and the best whale sighting rates in Sri Lanka."
        />
        <meta
          name="twitter:image"
          content="https://whalewatchingmirissa.com/assets/about-team-image.jpg"
        />

        {/* SEO Directives */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Whale Watching Mirissa" />
      </Helmet>
      <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Your Trusted Ocean Adventure Partner
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  Island Breeze Mirissa has been operating premium whale
                  watching tours in Sri Lanka since 2009. Over the years, we
                  have conducted thousands of successful tours, creating
                  unforgettable memories for guests from around the world.
                </p>
                <p>
                  Our team combines international whale watching expertise with
                  intimate knowledge of local waters, ensuring the highest
                  standards of service and marine conservation.
                </p>
                <p>
                  We take pride in our commitment to protecting marine life
                  while providing exceptional experiences. Our approach balances
                  adventure with responsibility, allowing you to witness these
                  magnificent creatures in their natural habitat ethically and
                  sustainably.
                </p>
              </div>

              <div className="mt-8 md:mt-12 grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-700 text-sm md:text-base">
                    Years Operating
                  </div>
                </div>
                <div className="bg-teal-50 rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                    50K+
                  </div>
                  <div className="text-gray-700 text-sm md:text-base">
                    Happy Guests
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1569670380685-4582bf29a24a?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Whale watching boat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl max-w-xs">
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-blue-100 text-xs md:text-sm leading-relaxed">
                  Whale sighting success rate during peak season
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl md:rounded-2xl mb-4 md:mb-6">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Google Map Section */}
          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Find Us in Mirissa
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.17177714299646!2d80.45188434633727!3d5.947744846058508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f49f8c43a3d%3A0x4a1f5cfc9defc101!2sWhale%20watching%20Mirissa!5e1!3m2!1sen!2slk!4v1764729926525!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
