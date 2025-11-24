import { Menu, X, Waves } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Book a Tour', path: '/services' },
    { label: 'Tours', path: '/tours' },
    { label: 'Activities', path: '/activities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
        src={logo} 
        alt="Logo" 
        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
    />
            <span className="text-lg sm:text-2xl font-bold text-gray-900 hidden sm:inline">Whale Watching in Mirissa</span>
            <span className="text-lg sm:text-2xl font-bold text-gray-900 sm:hidden">Whale Watching in Mirissa</span>
          </Link>

          <div className="hidden md:flex space-x-2 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 transition text-sm lg:text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t max-h-96 overflow-y-auto">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
