import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Account Types', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Help', href: '#' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`backdrop-blur-sm transition-all duration-300 ${
        isFixed
          ? 'bg-gray-900/50 border-purple-900/20 fixed top-0 left-0 w-full z-50'
          : ` ${isMenuOpen ? "bg-gray-900/50" : "bg-transparent"} pointer-events-auto fixed top-0 left-0 w-full z-50`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full" />
              <span className="text-white font-semibold hidden md:block">Logo</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 cursor-pointer hover:text-white hover:bg-purple-900/20 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <select className="bg-transparent text-gray-300 border-none">
              <option>EN</option>
            </select>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-500/25">
              Log in
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-500/25">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 cursor-pointer hover:text-white hover:bg-purple-900/20 px-3 py-2 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col px-2 space-y-2">
              <select className="bg-transparent text-gray-300 border-none">
                <option>EN</option>
              </select>
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-500/25">
                Log in
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-500/25">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
