import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">Hello Mirissa</h3>
          <p className="text-sm text-gray-400">
            Explore Sri Lanka with us! From beaches to wildlife, we offer
            unforgettable experiences tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/tours" className="hover:text-white transition">
                Tours
              </a>
            </li>
            <li>
              <a href="/activities" className="hover:text-white transition">
                Activities
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" /> Ganidu Rochana Whale
              Watching Mirissa Hill Side,Mirissa. Srilanka.
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400" /> +94 71 312 1061
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400" />{" "}
              whalewatchingmirissa@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-teal-400" />
              <a
                href="https://wa.me/94713121061"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WebX Tech Solutions. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
