import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with innovative IT solutions? Get in touch with our team today.
          </p>
        </motion.div>

        {/* Main Content Box */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[320px]">

            {/* LEFT BLUE INFO SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-blue-700 text-white p-8 lg:p-12 rounded-l-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="mb-8 text-blue-100">
                Contact us using the details below. We're here to help with your IT project needs.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-300 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold">Call Us</h4>
                    <a href="tel:+12149096232" className="text-blue-100 hover:text-white transition-colors">(+1) 857-398-5154</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-300 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold">Email Us</h4>
                    <a href="mailto:hr@obtsolt.com" className="text-blue-100 hover:text-white transition-colors">hr@obtsolt.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT WHITE OFFICE INFO SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 p-8 lg:p-12 rounded-r-xl space-y-6"
            >

              {/* Office Location */}
              <div className="mb-8 bg-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-bold text-gray-900">Our Location</h4>
                </div>
                <p className="text-gray-700 mb-2">459 Northwest Hwy, Irving, Texas 75039</p>
                <a
                  href="https://www.google.com/maps/place/459+Northwest+Hwy,+Irving,+TX+75039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  View on Google Maps
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>

              {/* Hours of Operation */}
              <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-bold text-gray-900">Hours of Operation</h4>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li className="flex justify-between py-1">
                    <span>Mon–Fri</span>
                    <span>8:00 AM – 5:00 PM CST</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Saturday</span>
                    <span>10:00 AM – 2:00 PM CST</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
