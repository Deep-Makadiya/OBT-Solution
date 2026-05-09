import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../assets/images/external/hero-bg.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-gradient-to-r from-blue-900 to-indigo-900">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Innovative IT Solutions for Your <span className="text-blue-400">Digital Success</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-xl">
                Empower your business with cutting-edge technology and data-driven strategies tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/services"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-xl shadow-2xl">
                <img
                  src={heroBg}
                  alt="OBT Solution LLC"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-lg font-semibold">Chosen by Companies that Expect Quality</p>
                </div>
              </div>

              <div className="absolute -top-10 -left-10 bg-teal-500 text-white p-4 rounded-lg shadow-lg transform rotate-3">
                <p className="text-lg font-semibold">99.9% Uptime</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;