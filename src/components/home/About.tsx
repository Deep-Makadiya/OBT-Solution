import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import aboutTeam from '../../assets/images/external/about-team.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    "Innovative Approach: We solve challenges, not just fill roles. Using modern tech and methodologies, we help businesses scale with the right tools, talent, and strategies.",
    "Tailored Staffing Solutions: We ensure the right fit—technically and culturally. Our solutions are designed for long-term success for both clients and candidates.",
    "International Talent with Compliance: We specialize in placing international professionals, navigating OPT/CPT, STEM OPT, and H-1B compliance for diverse, legal hiring.",
    "Market Presence & Trust: Trusted since 2021, we've earned a reputation for delivering high-impact staffing and IT solutions across industries.",
    "Client-Centric Focus: We're more than a vendor—we're your partner. We work to align staffing with your long-term goals."
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl relative z-10">
                <img
                  src={aboutTeam}
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 rounded-xl z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 lg:pl-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">OBT Solutions</span>
            </h2>
            <div className="mb-6">
              <p className="text-gray-600 text-lg mb-4">
                <span className="text-xl font-semibold text-blue-600">
                  Out of Box Technology Solutions LLC
                </span>{" "}
                was built with a singular mission: to provide businesses with innovative IT
                staffing and consulting solutions that foster growth, efficiency, and
                success.
              </p>
            </div>

            <p className="text-gray-600 text-lg mb-6">
              In today's fast-paced digital world, companies need partners who can provide not just the right solutions, but the right people to implement them. At OBT Solutions, we stand out by offering tailored staffing solutions and cutting-edge IT consulting that align with your business goals.
            </p>

            <p className="text-gray-600 text-lg mb-8">
              Whether you're a startup, a small business, or an enterprise, we offer the right talent, strategies, and guidance to push your business forward. Our name says it all: <strong>Out of Box Technology Solutions</strong>.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose OBT Solutions:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Learn more about our company
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;