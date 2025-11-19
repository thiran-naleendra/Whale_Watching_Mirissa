import { MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleBookNow = () => {
    window.open('https://wa.me/94713121061?text=I%27m%20interested%20in%20booking%20a%20whale%20watching%20tour', '_blank');
  };

  return (
    <section
  id="hero"
  className="relative h-screen flex items-center justify-center overflow-hidden"
>
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('https://images.pexels.com/photos/14019366/pexels-photo-14019366.jpeg')",
    }}
  ></div>

  {/* DARK GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-teal-600/70"></div>

  {/* LIGHT BLUR EFFECTS */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
  </div>

  {/* MAIN CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      {/* Experience the Majestic
      <br /> */} <br />
      <span className="text-teal-300">Whale Watching in Mirissa</span>
    </h1>

    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
      Embark on an unforgettable journey to witness blue whales, spinner dolphins, and the breathtaking marine life of Sri Lanka's pristine waters.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onClick={handleBookNow}
        className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-400 hover:text-white transition duration-300 flex items-center space-x-2 shadow-2xl"
      >
        <MessageCircle className="w-6 h-6" />
        <span>Book Your Adventure</span>
      </button>

      {/* <button
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition duration-300"
      >
        Explore Services
      </button> */}
    </div>

    {/* STATS CARDS */}
    
  </div>

  {/* BOUNCE ARROW */}
  {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
   
    <ArrowDown className="w-8 h-8 text-white" />
  </div> */}
</section>

  );
};

export default Hero;
