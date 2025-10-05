import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="VedaDite" className='h-20'/>
            <Link 
              to="/" 
              className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-300"
              onClick={() => handleMenuClick('')}
            >
              VedaDiet
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => handleMenuClick(item.name)}
                >
                  {item.name}
                  
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transition-all duration-300 transform ${
                      isActivePath(item.path) 
                        ? 'scale-x-100 opacity-100' 
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                  
                  {/* Ripple effect on click */}
                  {activeMenu === item.name && (
                    <span className="absolute inset-0 bg-green-100 rounded-md animate-ping opacity-75" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signin"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
              onClick={() => handleMenuClick('Sign In')}
            >
              Sign In
            </Link>
            <Link
              to="/free-trial"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() => handleMenuClick('Start Free Trial')}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-green-600 bg-green-50 transform scale-105'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
                onClick={() => handleMenuClick(item.name)}
              >
                {item.name}
                {activeMenu === item.name && (
                  <span className="block w-full h-0.5 bg-green-600 mt-1 transition-all duration-300" />
                )}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 pb-3 border-t border-gray-200 space-y-2">
              <Link
                to="/signin"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-300"
                onClick={() => handleMenuClick('Sign In')}
              >
                Sign In
              </Link>
              <Link
                to="/free-trial"
                className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                onClick={() => handleMenuClick('Start Free Trial')}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;