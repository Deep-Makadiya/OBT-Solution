import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BarChart, Server, Shield, Code, Database, Lightbulb, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logoTransparent from '../../assets/images/logo-final-transparent-v3.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('dark'); // 'dark' | 'light'
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    {
      title: 'Services',
      path: '/services',
      dropdown: true,
      items: [
        { title: 'Cloud Solutions', path: '/services/cloud-solutions', icon: <Server className="h-5 w-5 mr-2" /> },
        { title: 'IT Consulting & Staffing', path: '/services/it-consulting', icon: <Lightbulb className="h-5 w-5 mr-2" /> },
        { title: 'Cybersecurity', path: '/services/cybersecurity', icon: <Shield className="h-5 w-5 mr-2" /> },
        { title: 'Software Development', path: '/services/software-development', icon: <Code className="h-5 w-5 mr-2" /> },
        { title: 'Database Management', path: '/services/database-management', icon: <Database className="h-5 w-5 mr-2" /> },
        { title: 'Data Analytics', path: '/services/data-analytics', icon: <BarChart className="h-5 w-5 mr-2" /> },
        { title: 'Marketing and Services', path: '/services/marketing-and-services', icon: <TrendingUp className="h-5 w-5 mr-2" /> },
      ]
    },
    { title: 'Case Studies', path: '/case-studies' },
    { title: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Manage scroll state for padding/size
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect Theme
      const checkY = 40; // Approx center of header
      const checkX = window.innerWidth / 2;

      // Use elementsFromPoint to pierce through the fixed header
      const elements = document.elementsFromPoint(checkX, checkY);

      // Find the first element that has a data-theme attribute
      const themeElement = elements.find(el => el.hasAttribute('data-theme'));

      if (themeElement) {
        const theme = themeElement.getAttribute('data-theme');
        setHeaderTheme(theme || 'light');
      } else {
        // Fallback if no theme section found
        setHeaderTheme(window.scrollY < 50 && location.pathname === '/' ? 'dark' : 'light');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  // Determine styles based on theme
  const isDarkTheme = headerTheme === 'dark';

  // Header Background: Dark Theme -> Transparent, Light Theme -> White
  const headerBgClass = isDarkTheme ? 'bg-transparent' : 'bg-white shadow-md';
  const paddingClass = isScrolled ? 'py-1' : 'py-2';

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${headerBgClass} ${paddingClass}`;

  // Text Colors
  const textColorClass = isDarkTheme ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-blue-600';
  const activeLinkClass = 'border-blue-500';
  const hamburgerColorClass = isDarkTheme ? 'text-white' : 'text-gray-800';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logoTransparent}
              alt="OBT Solutions"
              className={`h-20 w-auto scale-[3.5] origin-left ml-4 transition-all duration-300`}
              style={{
                filter: !isDarkTheme
                  ? 'brightness(0) saturate(100%) invert(18%) sepia(88%) saturate(2331%) hue-rotate(218deg) brightness(93%) contrast(98%)'
                  : 'none'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              !link.dropdown ? (
                <Link
                  key={index}
                  to={link.path}
                  className={`font-medium transition-colors ${textColorClass} ${location.pathname === link.path ? `border-b-2 ${activeLinkClass}` : ''
                    }`}
                >
                  {link.title}
                </Link>
              ) : (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center font-medium transition-colors ${textColorClass} ${location.pathname.startsWith(link.path) ? `border-b-2 ${activeLinkClass}` : ''
                      }`}
                  >
                    {link.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20"
                      >
                        {link.items?.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100"
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${hamburgerColorClass}`} />
            ) : (
              <Menu className={`h-6 w-6 ${hamburgerColorClass}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {!link.dropdown ? (
                      <Link
                        to={link.path}
                        className={`block py-2 font-medium text-gray-800 hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : ''
                          }`}
                      >
                        {link.title}
                      </Link>
                    ) : (
                      <div>
                        <button
                          className={`flex items-center w-full py-2 font-medium text-gray-800 hover:text-blue-600 ${location.pathname.startsWith(link.path) ? 'text-blue-600' : ''
                            }`}
                          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        >
                          {link.title}
                          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {servicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-2"
                            >
                              {link.items?.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="flex items-center py-2 text-gray-700 hover:text-blue-600"
                                >
                                  {item.icon}
                                  <span>{item.title}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;