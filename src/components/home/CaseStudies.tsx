import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import caseStudy1 from '../../assets/images/external/highmark.png';
import caseStudy2 from '../../assets/images/external/prime.png';
import caseStudy3 from '../../assets/images/external/innova.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CaseStudyCard = ({ title, client, industry, imgSrc, link, delay }) => {
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
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <p className="text-sm font-medium text-blue-300 mb-1">{industry}</p>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-300">{client}</p>
        </div>
      </div>
      <Link
        to={link}
        className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
      >
        View Case Study
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
          <ArrowRight className="h-5 w-5" />
        </span>
      </Link>
    </motion.div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Cloud Migration & Infrastructure Optimization",
      client: "Highmark Finance",
      industry: "Finance",
      imgSrc: caseStudy1,
      link: "/case-studies/global-finance-corp",
      delay: 0.1,
    },
    {
      title: "Data Analytics",
      client: "Prime Therapeutics",
      industry: "Healthcare",
      imgSrc: caseStudy2,
      link: "/case-studies/healthtech-innovations",
      delay: 0.2,
    },
    {
      title: "Enterprise Cybersecurity Solution",
      client: "Innova Solutions Inc",
      industry: "Technology",
      imgSrc: caseStudy3,
      link: "/case-studies/retail-solutions-inc",
      delay: 0.3,
    },
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
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Take a look at how we've helped businesses transform their operations and achieve their goals through our innovative IT solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;