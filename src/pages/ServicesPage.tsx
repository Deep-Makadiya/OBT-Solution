import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Server, BarChart, Shield, Code, Database, Lightbulb, Network, Phone, ArrowRight, Search, TrendingUp, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Services - OBT Solutions';
    window.scrollTo(0, 0);
  }, []);

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Secure, scalable, and cost-effective cloud infrastructure designed to optimize your operations and meet your business needs.",
      icon: <Server className="h-12 w-12 text-blue-600" />,
      features: [
        "Cloud migration & strategy",
        "Hybrid cloud architecture",
        "Cloud security implementation",
        "Infrastructure as Code (IaC)",
        "Managed cloud services"
      ]
    },
    {
      id: "it-consulting",
      title: "IT Consulting & staffing",
      description: "Strategic guidance to help you make informed decisions about your technology investments and IT roadmap.",
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      features: [
        "IT strategy development",
        "Technology assessment",
        "Digital transformation planning",
        "Vendor selection assistance",
        "IT governance & compliance"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security measures, threat detection, and prevention strategies.",
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      features: [
        "Security assessment & planning",
        "Network security implementation",
        "Endpoint protection",
        "Security monitoring & response",
        "Compliance management"
      ]
    },
    {
      id: "software-development",
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs and challenges.",
      icon: <Code className="h-12 w-12 text-blue-600" />,
      features: [
        "Web application development",
        "Mobile app development",
        "API development & integration",
        "Legacy system modernization",
        "DevOps implementation"
      ]
    },
    {
      id: "database-management",
      title: "Database Management",
      description: "Efficient database design, optimization, and maintenance to ensure peak performance and data integrity.",
      icon: <Database className="h-12 w-12 text-blue-600" />,
      features: [
        "Database architecture & design",
        "Performance optimization",
        "Data migration & integration",
        "High availability implementation",
        "Backup & disaster recovery"
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and visualization solutions.",
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      features: [
        "Business intelligence implementation",
        "Data warehouse design",
        "Predictive analytics",
        "Machine learning solutions",
        "Real-time analytics dashboards"
      ]
    }
  ];

  const allServices = [
    ...services,
    {
      id: "marketing-and-services",
      title: "Marketing and Services",
      description: "Comprehensive digital marketing solutions including SEO and digital campaigns to boost your online presence and drive business growth.",
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      features: [
        "Search Engine Optimization (SEO)",
        "Digital Marketing Campaigns",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Performance Analytics & Reporting"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We begin by understanding your business goals, challenges, and current technology landscape through in-depth consultations.",
      icon: <Lightbulb className="h-8 w-8 text-white" />
    },
    {
      title: "Strategy & Planning",
      description: "Based on our findings, we develop a comprehensive strategy and implementation plan tailored to your specific needs.",
      icon: <Network className="h-8 w-8 text-white" />
    },
    {
      title: "Implementation",
      description: "Our expert team executes the plan with precision, ensuring minimal disruption to your business operations.",
      icon: <Code className="h-8 w-8 text-white" />
    },
    {
      title: "Support & Optimization",
      description: "We provide ongoing support and continuously optimize your solutions to ensure they evolve with your business.",
      icon: <Phone className="h-8 w-8 text-white" />
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              We provide comprehensive IT solutions designed to help your business thrive in today's digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Complete Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From IT infrastructure to digital marketing, we provide comprehensive solutions to drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[5rem]">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure we deliver solutions that truly address your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 z-10">
                    {step.icon}
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-blue-200 z-0"></div>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our IT solutions can help you achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;