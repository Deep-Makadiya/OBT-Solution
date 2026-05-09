import React, { useEffect } from 'react';
import { CheckCircle, Users, TrendingUp, Award, Target, Zap, Globe, Shield } from 'lucide-react';

import meetDalsania from '../assets/images/external/meet-dalsania.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - OBT Solutions';
    window.scrollTo(0, 0);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expertiseRef, expertiseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [leadershipRef, leadershipInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whyChooseUs = [
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Innovative Approach",
      description: "We solve challenges, not just fill roles. Using modern tech and methodologies, we help businesses scale with the right tools, talent, and strategies."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Tailored Staffing Solutions",
      description: "We ensure the right fit—technically and culturally. Our solutions are designed for long-term success for both clients and candidates."
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "International Talent with Compliance",
      description: "We specialize in placing international professionals, navigating OPT/CPT, STEM OPT, and H-1B compliance for diverse, legal hiring."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Market Presence & Trust",
      description: "we've earned a reputation for delivering high-impact staffing and IT solutions across industries."
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Client-Centric Focus",
      description: "We're more than a vendor—we're your partner. We work to align staffing with your long-term goals."
    }
  ];

  const expertise = [
    "Cloud Solutions (AWS, GCP)",
    "Data Analytics & Artificial Intelligence",
    "Cybersecurity",
    "Software Development",
    "Database Management",
    "Marketing and Services",
    "SEO (Search Engine Optimization): Boost your online visibility with tailored strategies",
    "Digital Marketing: Full-service campaigns to grow your brand and revenue"
  ];

  const clientChoiceReasons = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Innovation & Agility"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Experience & Expertise"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Trusted Partnership"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Talent Network"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us – OBT Solutions LLC</h1>
            <p className="text-2xl text-blue-100 mb-8 font-medium">
              Empowering businesses through innovative IT solutions.
            </p>
            <p className="text-xl text-blue-100">
              <span className="font-bold text-white">Out of box technology solutions</span> was built with a singular mission: to provide businesses with innovative IT staffing and consulting solutions that foster growth, efficiency, and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In today's fast-paced digital world, companies need partners who can provide not just the right solutions, but the right people to implement them. At OBT Solutions, we stand out by offering tailored staffing solutions and cutting-edge IT consulting & staffing that align with your business goals. Our name says it all: <strong className="whitespace-nowrap">Out of Box Technology Solutions</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a startup, a small business, or an enterprise, we offer the right talent, strategies, and guidance to push your business forward.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose OBT Solutions Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why OBT Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring innovation, expertise, and a client-focused approach to every project.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] flex">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md text-left w-full flex flex-col"
                >
                  <div className="flex justify-start mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section ref={expertiseRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise Includes</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={expertiseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start bg-white p-6 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section ref={leadershipRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-left mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Young Visionary CEO Leading with Passion</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-left"
            >
              <div className="mb-6 text-center">
                <img
                  src={meetDalsania}
                  alt="Meet Dalsania - CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Dalsania</h3>
                <p className="text-blue-600 font-medium">CEO & Founder</p>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Meet Dalsania, a visionary young CEO, leads OBT Solutions with energy, innovation, and a deeply client-focused mindset. His leadership drives forward-thinking strategies and long-term client success.
              </p>
              <p className="text-lg text-gray-600">
                Supporting Meet is a team of seasoned professionals with decades of industry experience. Every challenge is addressed with insight, precision, and care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Clients Choose OBT Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {clientChoiceReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{reason.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;