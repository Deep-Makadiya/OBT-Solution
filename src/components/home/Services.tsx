import React from 'react';
import { Link } from 'react-router-dom';
import { Server, BarChart, Shield, Code, Database, ArrowRight, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, description, icon, link, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
      >
        Learn More
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
          <ArrowRight className="h-5 w-5" />
        </span>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure designed to optimize your operations and reduce costs.",
      icon: <Server className="h-6 w-6 text-blue-600" />,
      link: "/services/cloud-solutions",
      delay: 0.1,
    },
    {
      title: "IT Consulting & Staffing",
      description: "Strategic guidance to help you make informed decisions about your technology investments and IT roadmap.",
      icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
      link: "/services/it-consulting",
      delay: 0.2,
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security measures and threat detection systems.",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      link: "/services/cybersecurity",
      delay: 0.3,
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs and challenges.",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      link: "/services/software-development",
      delay: 0.4,
    },
    {
      title: "Database Management",
      description: "Efficient database design, optimization, and maintenance to ensure peak performance.",
      icon: <Database className="h-6 w-6 text-blue-600" />,
      link: "/services/database-management",
      delay: 0.5,
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics and visualization tools.",
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      link: "/services/data-analytics",
      delay: 0.6,
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive IT solutions to help your business thrive in today's digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;