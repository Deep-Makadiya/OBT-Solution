import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Server, BarChart, Shield, Code, Database, CheckCircle, ArrowRight, Clock, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const CaseStudyDetailPage = () => {
  const { id } = useParams();

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = {
    "global-finance-corp": {
      title: "Cloud Migration & Infrastructure Optimization",
      client: "Highmark Finance",
      industry: "Finance",
      category: "cloud-solutions",
      categoryName: "Cloud Solutions",
      icon: <Server className="h-6 w-6 text-blue-600" />,
      overview: "Highmark Finance, a leading financial services firm with operations in 15 countries, was facing challenges with their aging on-premises infrastructure. They needed to modernize their systems to improve performance, enhance security, and reduce operational costs.",
      challenge: "The client's legacy infrastructure was becoming increasingly expensive to maintain and was limiting their ability to scale and innovate. They needed a solution that would minimize disruption to their 24/7 operations while ensuring compliance with financial industry regulations.",
      solution: "We developed a comprehensive cloud migration strategy that included a thorough assessment of their existing infrastructure, a detailed migration plan, and a robust security framework. Our team implemented a hybrid cloud approach, leveraging GCP and private cloud resources to meet the client's specific needs.",
      results: [
        "40% reduction in infrastructure costs",
        "99.99% uptime post-migration",
        "50% faster deployment of new features and services",
        "Enhanced security posture with advanced threat detection",
        "Improved disaster recovery capabilities with 60% faster recovery time"
      ],
      quote: {
        text: "The OBT Solution team delivered a flawless cloud migration that exceeded our expectations. Their thorough planning and execution minimized disruption to our operations, and the resulting infrastructure has significantly improved our performance and reduced our costs.",
        author: "Neil Johnson, CTO at Highmark Finance"
      },
      keyMetrics: [
        {
          metric: "40%",
          label: "Cost Reduction",
          icon: <Target className="h-8 w-8 text-green-600" />
        },
        {
          metric: "99.99%",
          label: "System Uptime",
          icon: <Zap className="h-8 w-8 text-yellow-500" />
        },
        {
          metric: "3 Months",
          label: "Implementation Time",
          icon: <Clock className="h-8 w-8 text-blue-600" />
        }
      ],

    },
    "healthtech-innovations": {
      title: "Data Analytics",
      client: "Prime Therapeutics",
      industry: "Healthcare",
      category: "data-analytics",
      categoryName: "Data Analytics",
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      overview: "Prime Therapeutics, a rapidly growing healthcare technology provider, was struggling to harness the value of the vast amounts of patient and operational data they collected. They needed a comprehensive analytics solution to drive better clinical decisions and operational efficiency.",
      challenge: "The client was dealing with siloed data sources, inconsistent data formats, and limited analytical capabilities. They needed a solution that could integrate diverse data sources, ensure HIPAA compliance, and provide actionable insights to clinical and administrative staff.",
      solution: "We designed and implemented a comprehensive data analytics platform that consolidated data from multiple sources, including EHR systems, billing systems, and patient feedback. The solution included data warehousing, ETL processes, advanced analytics models, and interactive dashboards tailored to different user roles.",
      results: [
        "15% improvement in patient outcomes for targeted conditions",
        "22% reduction in average length of stay",
        "30% increase in operational efficiency",
        "Data processing time reduced from days to minutes",
        "Enhanced ability to identify trends and patterns in patient care"
      ],
      quote: {
        text: "The data analytics platform developed by OBT Solution LLC has transformed our ability to make data-driven decisions. We now have immediate access to insights that were previously impossible to obtain, directly improving our patient care and operational efficiency.",
        author: "Himanshu Desai, Principal Data Engineer at Prime Therapeutics"
      },
      keyMetrics: [
        {
          metric: "15%",
          label: "Improved Outcomes",
          icon: <Target className="h-8 w-8 text-green-600" />
        },
        {
          metric: "30%",
          label: "Operational Efficiency",
          icon: <Zap className="h-8 w-8 text-yellow-500" />
        },
        {
          metric: "4 Months",
          label: "Implementation Time",
          icon: <Clock className="h-8 w-8 text-blue-600" />
        }
      ],

    },
    "retail-solutions-inc": {
      title: "Enterprise Cybersecurity Solution",
      client: "Innova Solutions Inc",
      industry: "Technology",
      category: "cybersecurity",
      categoryName: "Cybersecurity",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      overview: "Innova Solutions Inc, a national technology firm with over 500 locations, needed to strengthen their cybersecurity posture after experiencing a minor security incident. They required a comprehensive solution to protect customer data, ensure PCI DSS compliance, and prevent future breaches.",
      challenge: "The client had a complex IT environment spanning hundreds of locations with varying levels of security implementation. They needed a unified security approach that would work across their diverse infrastructure without disrupting their retail operations.",
      solution: "We implemented a multi-layered cybersecurity solution that included network security enhancements, endpoint protection, advanced threat detection, employee security awareness training, and a 24/7 security monitoring system. The solution was designed to provide comprehensive protection while maintaining compliance with relevant regulations.",
      results: [
        "Zero security breaches since implementation",
        "95% reduction in identified vulnerabilities",
        "Achieved PCI DSS compliance across all locations",
        "60% faster detection and response to potential threats",
        "Significant improvement in employee security awareness"
      ],
      quote: {
        text: "OBT Solution LLC cybersecurity solution has given us peace of mind knowing our systems and customer data are well-protected. Their comprehensive approach addressed all our security concerns while ensuring our retail operations continued to run smoothly.",
        author: "Pankaj Shukla, Technical Manager at Innova Solutions Inc"
      },
      keyMetrics: [
        {
          metric: "95%",
          label: "Vulnerability Reduction",
          icon: <Target className="h-8 w-8 text-green-600" />
        },
        {
          metric: "60%",
          label: "Faster Threat Response",
          icon: <Zap className="h-8 w-8 text-yellow-500" />
        },
        {
          metric: "3 Months",
          label: "Implementation Time",
          icon: <Clock className="h-8 w-8 text-blue-600" />
        }
      ],

    },
    "tech-innovators": {
      title: "Custom CRM Development",
      client: "Modis",
      industry: "Technology",
      category: "software-development",
      categoryName: "Software Development",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      overview: "Modis, a growing technology company, was struggling with an off-the-shelf CRM that couldn't adapt to their unique business processes. They needed a custom solution that would integrate with their existing systems and provide a unified view of their customer interactions.",
      challenge: "The client had complex sales processes that spanned multiple departments and involved numerous touchpoints with customers. Their existing CRM was causing inefficiencies, data silos, and was limiting their ability to provide personalized customer experiences.",
      solution: "We developed a custom CRM solution tailored to their specific business processes. The solution included automated workflows, custom reporting, integration with their existing systems, and a user-friendly interface designed for their unique needs. The CRM was built using modern, scalable technologies to ensure it could grow with their business.",
      results: [
        "35% increase in sales team productivity",
        "28% improvement in customer retention rates",
        "Reduced average sales cycle by 20%",
        "Unified view of customer interactions across all departments",
        "Improved data quality and reporting capabilities"
      ],
      quote: {
        text: "The custom CRM solution developed by OBT Solution LLC has revolutionized our sales and customer management processes. It perfectly aligns with our unique business needs and has significantly improved our team's productivity and our customer relationships.",
        author: "Parvez Azhar, CTO at Modis"
      },
      keyMetrics: [
        {
          metric: "35%",
          label: "Productivity Increase",
          icon: <Target className="h-8 w-8 text-green-600" />
        },
        {
          metric: "28%",
          label: "Improved Retention",
          icon: <Zap className="h-8 w-8 text-yellow-500" />
        },
        {
          metric: "5 Months",
          label: "Implementation Time",
          icon: <Clock className="h-8 w-8 text-blue-600" />
        }
      ],

    },
    "global-logistics": {
      title: "Database Optimization & Performance",
      client: "NXGTS",
      industry: "Logistics",
      category: "database-management",
      categoryName: "Database Management",
      icon: <Database className="h-6 w-6 text-blue-600" />,
      overview: "NXGTS, an international transportation and logistics company, was experiencing significant performance issues with their database systems. Slow query times and occasional downtime were impacting their operations and customer service.",
      challenge: "The client's database infrastructure had grown organically over years without proper optimization, resulting in inefficient queries, inadequate indexing, and poor scalability. They needed a solution that would improve performance without disrupting their 24/7 operations.",
      solution: "We conducted a comprehensive assessment of their database environment and implemented a series of optimizations, including query tuning, index optimization, database partitioning, and server configuration improvements. We also implemented a high-availability solution to ensure continuous operation and improved their backup and recovery processes.",
      results: [
        "80% reduction in query response times",
        "99.99% database uptime achieved",
        "Eliminated system bottlenecks during peak periods",
        "Improved scalability to handle 3x the transaction volume",
        "Enhanced backup and recovery capabilities with 70% faster restoration times"
      ],
      quote: {
        text: "The database optimization performed by OBT Solution LLC has transformed our system performance. Operations that used to take minutes now complete in seconds, and we've eliminated the downtime issues that were affecting our business. Their expertise was invaluable.",
        author: "Benjamin Mosioma, Technical Manager at NXGTS"
      },
      keyMetrics: [
        {
          metric: "80%",
          label: "Faster Queries",
          icon: <Target className="h-8 w-8 text-green-600" />
        },
        {
          metric: "99.99%",
          label: "Database Uptime",
          icon: <Zap className="h-8 w-8 text-yellow-500" />
        },
        {
          metric: "2 Months",
          label: "Implementation Time",
          icon: <Clock className="h-8 w-8 text-blue-600" />
        }
      ],

    },
    "edutech-solutions": {
      title: "E-Learning Platform Development",
      client: "Edureka",
      industry: "Education",
      category: "software-development",
      categoryName: "Software Development",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      overview: "Edureka, a provider of educational technology, needed a scalable e-learning platform to deliver interactive content to schools and universities. They required a solution that could support thousands of concurrent users with diverse content types.",
      challenge: "The client needed a platform that could handle a wide variety of content formats, support interactive learning experiences, provide detailed analytics on student engagement, and integrate with existing learning management systems used by educational institutions.",
      solution: "We developed a comprehensive e-learning platform with a microservices architecture to ensure scalability and flexibility. The solution included content management, interactive course delivery, real-time collaboration tools, detailed analytics, and APIs for integration with third-party systems.",
      results: [
        "Platform successfully supporting 10,000+ concurrent users",
        "45% increase in student engagement metrics",
        "Support for all major content formats and interactive elements",
        "Seamless integration with popular LMS platforms",
        "Comprehensive analytics providing valuable insights into learning patterns"
      ],
      quote: {
        text: "OBT Solution LLC delivered an exceptional e-learning platform that has exceeded our expectations. Their focus on scalability, user experience, and integration capabilities has allowed us to provide a superior product to our educational partners.",
        author: "Pallavi Rao, Technical Manager at Edureka"
      },
      keyMetrics: [
        {
          metric: "10,000+",
          label: "Concurrent Users",
          icon: <Target className="h-8 w-8 text-green-600" />
        },
        {
          metric: "45%",
          label: "Engagement Increase",
          icon: <Zap className="h-8 w-8 text-yellow-500" />
        },
        {
          metric: "6 Months",
          label: "Implementation Time",
          icon: <Clock className="h-8 w-8 text-blue-600" />
        }
      ],

    }
  };

  const caseStudy = caseStudies[id];

  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} | Case Study - OBT Solution LLC`;
    } else {
      document.title = 'Case Study - OBT Solution LLC';
    }
    window.scrollTo(0, 0);
  }, [caseStudy, id]);

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
        <p className="mb-8">The case study you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/case-studies"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          View All Case Studies
        </Link>
      </div>
    );
  }

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
          <div className="flex items-center mb-4">
            <div className="mr-2">{caseStudy.icon}</div>
            <span className="text-blue-300 font-medium">{caseStudy.categoryName}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-blue-100 mb-8">
            <p className="text-xl font-medium mr-6 mb-2 sm:mb-0">{caseStudy.client}</p>
            <p className="flex items-center">
              <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
              {caseStudy.industry} Industry
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.keyMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-center text-center">
                <div>
                  {metric.icon}
                  <p className="text-4xl font-bold text-gray-900 mt-4 mb-1">{metric.metric}</p>
                  <p className="text-gray-600">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              {/* Overview Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 mb-8">{caseStudy.overview}</p>

              </div>

              {/* Challenge Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-lg text-gray-600">{caseStudy.challenge}</p>
              </div>

              {/* Solution Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <p className="text-lg text-gray-600 mb-8">{caseStudy.solution}</p>

              </div>

              {/* Results Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
                <ul className="space-y-4 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              {/* Client Quote */}
              <div className="bg-blue-50 p-8 rounded-xl shadow-md mb-8">
                <div className="text-6xl text-blue-200 mb-4">"</div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  {caseStudy.quote.text}
                </blockquote>
                <p className="font-bold text-gray-900">{caseStudy.quote.author}</p>
              </div>

              {/* Related Services */}
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to={`/services/${caseStudy.category}`}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {caseStudy.icon}
                      <span className="ml-2">{caseStudy.categoryName}</span>
                    </Link>
                  </li>
                  {/* Add additional related services if needed */}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Ready for Similar Results?</h3>
                <p className="mb-6">Contact us to discuss how we can help your business achieve comparable success.</p>
                <Link
                  to="/contact"
                  className="inline-block w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-md text-center hover:bg-blue-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped other businesses achieve their technology goals.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;