import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Server, BarChart, Shield, Code, Database, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import highmarkImg from '../assets/images/external/highmark.png';
import primeImg from '../assets/images/external/prime.png';
import innovaImg from '../assets/images/external/innova.png';
import modisImg from '../assets/images/external/modis.png';
import nxgtsImg from '../assets/images/external/nxgts.png';
import edurekaImg from '../assets/images/external/edureka.png';



const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = 'Case Studies - OBT Solution LLC';
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      id: "global-finance-corp",
      title: "Cloud Migration & Infrastructure Optimization",
      client: "Highmark Finance",
      industry: "Finance",
      category: "cloud-solutions",
      categoryName: "Cloud Solutions",
      icon: <Server className="h-5 w-5" />,
      description: "Helped a leading financial services firm migrate their legacy systems to a secure cloud environment, reducing costs by 40% and improving performance.",
      imgSrc: highmarkImg,
    },
    {
      id: "healthtech-innovations",
      title: "Data Analytics",
      client: "Prime Therapeutics",
      industry: "Healthcare",
      category: "data-analytics",
      categoryName: "Data Analytics",
      icon: <BarChart className="h-5 w-5" />,
      description: "Developed a comprehensive data analytics solution for a healthcare provider, enabling them to improve patient outcomes and optimize operations.",
      imgSrc: primeImg,
    },
    {
      id: "retail-solutions-inc",
      title: "Enterprise Cybersecurity Solution",
      client: "Innova Solutions",
      industry: "Technology",
      category: "cybersecurity",
      categoryName: "Cybersecurity",
      icon: <Shield className="h-5 w-5" />,
      description: "Implemented a robust cybersecurity framework for a national retail chain, protecting customer data and preventing potential breaches.",
      imgSrc: innovaImg,
    },
    {
      id: "tech-innovators",
      title: "Custom CRM Development",
      client: "Modis",
      industry: "Technology",
      category: "software-development",
      categoryName: "Software Development",
      icon: <Code className="h-5 w-5" />,
      description: "Built a tailored CRM solution for a technology company, integrating with their existing systems and improving customer management processes.",
      imgSrc: modisImg,
    },
    {
      id: "global-logistics",
      title: "Database Optimization & Performance",
      client: "NXGTS",
      industry: "Transportation",
      category: "database-management",
      categoryName: "Database Management",
      icon: <Database className="h-5 w-5" />,
      description: "Optimized database performance for a logistics company, reducing query times by 80% and improving overall system reliability.",
      imgSrc: nxgtsImg,
    },
    {
      id: "edutech-solutions",
      title: "E-Learning Platform Development",
      client: "Edureka",
      industry: "Education",
      category: "software-development",
      categoryName: "Software Development",
      icon: <Code className="h-5 w-5" />,
      description: "Created a scalable e-learning platform for an education technology provider, supporting thousands of concurrent users with interactive content.",
      imgSrc: edurekaImg,
    }
  ];

  const categories = [
    { id: 'all', name: 'All Case Studies' },
    { id: 'cloud-solutions', name: 'Cloud Solutions', icon: <Server className="h-5 w-5" /> },
    { id: 'data-analytics', name: 'Data Analytics', icon: <BarChart className="h-5 w-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="h-5 w-5" /> },
    { id: 'software-development', name: 'Software Development', icon: <Code className="h-5 w-5" /> },
    { id: 'database-management', name: 'Database Management', icon: <Database className="h-5 w-5" /> }
  ];

  const filteredCaseStudies = filter === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === filter);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our success stories and learn how we've helped businesses across various industries overcome their technology challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium mr-4">Filter by:</span>
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap flex items-center ${filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {category.icon && <span className="mr-2">{category.icon}</span>}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {filter === 'all' ? 'All Case Studies' : `${categories.find(c => c.id === filter)?.name}`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              {filter === 'all'
                ? 'Discover how we\'ve helped organizations across industries achieve their technology goals.'
                : `Explore our successful ${categories.find(c => c.id === filter)?.name} projects and implementations.`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden h-48">
                  <img src={study.imgSrc} alt={study.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center text-sm font-medium text-blue-300 mb-2">
                      <span className="mr-2">{study.icon}</span>
                      {study.categoryName}
                    </div>
                    <h3 className="text-xl font-bold text-white">{study.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 font-medium">{study.client}</span>
                    <span className="text-gray-500 text-sm">{study.industry}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can help you achieve similar results for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;