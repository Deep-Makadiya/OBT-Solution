import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-blue-400 transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cloud-solutions" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/database-management" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Database Management
                </Link>
              </li>
              <li>
                <Link to="/services/it-consulting" className="text-gray-400 hover:text-blue-400 transition-colors">
                  IT Consulting & Staffing
                </Link>
              </li>
              <li>
                <Link to="/services/marketing-and-services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Marketing and Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 mr-2" />
                <span className="text-gray-400">
                  459 Northwest Hwy, Irving, TX. 75039
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+12149096232" className="text-gray-400 hover:text-blue-400 transition-colors">
                  (+1) 8573985154
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:hr@obtsolt.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  hr@obtsolt.com
                </a>
              </li>
            </ul>

            {/* Social media icons container */}
            <div className="mt-4 flex flex-col space-y-3">
              <a
                href="https://www.linkedin.com/company/obt-solutions-llc/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
              >
                <Linkedin className="h-5 w-5 mr-2" />
              </a>

              {/* Add more social media links here, for example: */}
              {/* 
              <a 
                href="https://twitter.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
              >
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </a> 
              */}
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} OBT Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-500 text-sm hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
