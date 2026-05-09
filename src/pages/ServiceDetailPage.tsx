import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Server, BarChart, Shield, Code, Database, Lightbulb, CheckCircle, ArrowRight, Search, Megaphone, TrendingUp } from 'lucide-react';
import serviceCloud from '../assets/images/external/service-cloud.jpg';
import serviceAnalytics from '../assets/images/external/service-analytics.jpg';
import serviceCybersecurity from '../assets/images/external/service-cybersecurity.jpg';
import serviceSoftware from '../assets/images/external/service-software.jpg';
import serviceDatabase from '../assets/images/external/service-database.jpg';
import serviceConsulting from '../assets/images/external/service-consulting.jpg';
import serviceMarketing from '../assets/images/external/service-marketing.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [subServicesRef, subServicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = {
    "cloud-solutions": {
      title: "Cloud Solutions",
      description: "Secure, scalable, and cost-effective cloud infrastructure designed to optimize your operations and meet your business needs.",
      icon: <Server className="h-16 w-16 text-blue-600" />,
      longDescription: "Our cloud solutions are designed to help businesses of all sizes leverage the power of cloud computing to improve efficiency, reduce costs, and drive innovation. Whether you're looking to migrate your existing infrastructure to the cloud, optimize your current cloud environment, or implement a hybrid solution, our team of experts can help.",
      features: [
        {
          title: "Cloud Migration & Strategy",
          description: "We help you develop a comprehensive cloud strategy and execute a seamless migration with minimal disruption to your operations."
        },
        {
          title: "Hybrid Cloud Architecture",
          description: "Leverage the benefits of both public and private cloud environments with our hybrid cloud solutions tailored to your specific needs."
        },
        {
          title: "Cloud Security Implementation",
          description: "Protect your cloud environment with robust security measures designed to safeguard your data and applications."
        },
        {
          title: "Infrastructure as Code (IaC)",
          description: "Automate your infrastructure deployment and management with our Infrastructure as Code solutions."
        },
        {
          title: "Managed Cloud Services",
          description: "Let our team handle the day-to-day management of your cloud environment, allowing you to focus on your core business."
        }
      ],
      benefits: [
        "Reduced IT infrastructure costs",
        "Improved scalability and flexibility",
        "Enhanced disaster recovery capabilities",
        "Increased operational efficiency",
        "Access to the latest technologies"
      ],
      image: serviceCloud
    },
    "data-analytics": {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and visualization solutions.",
      icon: <BarChart className="h-16 w-16 text-blue-600" />,
      longDescription: "In today's data-driven world, the ability to extract meaningful insights from your data is crucial for making informed business decisions. Our data analytics solutions help you collect, process, analyze, and visualize your data to uncover patterns, trends, and correlations that can drive your business forward.",
      features: [
        {
          title: "Business Intelligence Implementation",
          description: "Deploy comprehensive BI solutions that transform raw data into meaningful insights for strategic decision-making."
        },
        {
          title: "Data Warehouse Design",
          description: "Create efficient, scalable data warehouses that consolidate data from multiple sources for easier analysis and reporting."
        },
        {
          title: "Predictive Analytics",
          description: "Leverage advanced statistical techniques and machine learning to forecast trends and anticipate future outcomes."
        },
        {
          title: "Machine Learning Solutions",
          description: "Implement custom machine learning models to automate processes, detect anomalies, and make data-driven predictions."
        },
        {
          title: "Real-time Analytics Dashboards",
          description: "Develop interactive dashboards that provide up-to-the-minute insights into your business performance."
        }
      ],
      benefits: [
        "Data-driven decision making",
        "Improved operational efficiency",
        "Enhanced customer experiences",
        "Identification of new revenue opportunities",
        "Competitive advantage through data insights"
      ],
      image: serviceAnalytics
    },
    "cybersecurity": {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security measures, threat detection, and prevention strategies.",
      icon: <Shield className="h-16 w-16 text-blue-600" />,
      longDescription: "In an increasingly connected world, cybersecurity is more important than ever. Our comprehensive cybersecurity solutions help you identify and address vulnerabilities, protect your critical assets, and respond effectively to security incidents, ensuring your business remains secure and resilient.",
      features: [
        {
          title: "Security Assessment & Planning",
          description: "Evaluate your current security posture and develop a comprehensive security strategy aligned with your business objectives."
        },
        {
          title: "Network Security Implementation",
          description: "Protect your network infrastructure with advanced firewalls, intrusion detection systems, and secure access controls."
        },
        {
          title: "Endpoint Protection",
          description: "Secure all endpoints (devices, servers, workstations) with robust protection against malware, ransomware, and other threats."
        },
        {
          title: "Security Monitoring & Response",
          description: "Continuously monitor your environment for security threats and respond quickly to potential incidents."
        },
        {
          title: "Compliance Management",
          description: "Ensure your security measures meet relevant regulatory requirements and industry standards."
        }
      ],
      benefits: [
        "Protection of sensitive data",
        "Reduced risk of security breaches",
        "Compliance with regulatory requirements",
        "Enhanced business continuity",
        "Improved stakeholder confidence"
      ],
      image: serviceCybersecurity
    },
    "software-development": {
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs and challenges.",
      icon: <Code className="h-16 w-16 text-blue-600" />,
      longDescription: "Off-the-shelf software doesn't always meet the unique needs of your business. Our custom software development services provide tailored solutions designed specifically for your business processes, helping you improve efficiency, enhance customer experiences, and gain a competitive edge.",
      features: [
        {
          title: "Web Application Development",
          description: "Create responsive, scalable web applications that deliver exceptional user experiences across all devices."
        },
        {
          title: "Mobile App Development",
          description: "Build native and cross-platform mobile applications that engage users and extend your business reach."
        },
        {
          title: "API Development & Integration",
          description: "Develop robust APIs and seamlessly integrate with third-party systems to extend your software capabilities."
        },
        {
          title: "Legacy System Modernization",
          description: "Update and transform your outdated systems into modern, scalable, and maintainable applications."
        },
        {
          title: "DevOps Implementation",
          description: "Streamline your software development lifecycle with automated processes and continuous integration/deployment."
        }
      ],
      benefits: [
        "Solutions tailored to your specific needs",
        "Improved operational efficiency",
        "Enhanced user experience",
        "Better integration with existing systems",
        "Competitive advantage through unique software"
      ],
      image: serviceSoftware
    },
    "database-management": {
      title: "Database Management",
      description: "Efficient database design, optimization, and maintenance to ensure peak performance and data integrity.",
      icon: <Database className="h-16 w-16 text-blue-600" />,
      longDescription: "Effective database management is crucial for maintaining data integrity, ensuring optimal performance, and supporting business operations. Our database management services help you design, implement, optimize, and maintain database systems that meet your specific business requirements and scale with your growth.",
      features: [
        {
          title: "Database Architecture & Design",
          description: "Create efficient, scalable database structures tailored to your specific data requirements and business processes."
        },
        {
          title: "Performance Optimization",
          description: "Identify and address performance bottlenecks to ensure your databases operate at peak efficiency."
        },
        {
          title: "Data Migration & Integration",
          description: "Seamlessly transfer data between systems and integrate databases from different sources."
        },
        {
          title: "High Availability Implementation",
          description: "Design and implement high availability solutions to minimize downtime and ensure continuous access to your data."
        },
        {
          title: "Backup & Disaster Recovery",
          description: "Develop comprehensive backup strategies and disaster recovery plans to protect your valuable data."
        }
      ],
      benefits: [
        "Improved data accuracy and integrity",
        "Enhanced database performance",
        "Reduced downtime and data loss risk",
        "Scalable database infrastructure",
        "Efficient data management processes"
      ],
      image: serviceDatabase
    },
    "it-consulting": {
      title: "IT Consulting & Staffing",
      description: "Strategic guidance to help you make informed decisions about your technology investments and IT roadmap.",
      icon: <Lightbulb className="h-16 w-16 text-blue-600" />,
      longDescription: "Making the right technology decisions is essential for business success in today's digital world. Our IT consulting & staffing services provide expert guidance to help you develop and implement an IT strategy that aligns with your business goals, optimizes your technology investments, and drives innovation.",
      features: [
        {
          title: "IT Strategy Development",
          description: "Create a comprehensive IT roadmap aligned with your business objectives and industry best practices."
        },
        {
          title: "Technology Assessment",
          description: "Evaluate your current technology environment and identify opportunities for improvement and optimization."
        },
        {
          title: "Digital Transformation Planning",
          description: "Develop a strategic plan for leveraging digital technologies to transform your business processes and customer experiences."
        },
        {
          title: "Vendor Selection Assistance",
          description: "Navigate the complex vendor landscape with expert guidance to choose the right technology partners."
        },
        {
          title: "IT Governance & Compliance",
          description: "Establish effective IT governance frameworks and ensure compliance with relevant regulations and standards."
        }
      ],
      benefits: [
        "Aligned IT and business strategies",
        "Optimized technology investments",
        "Reduced IT-related risks",
        "Improved decision-making",
        "Future-ready technology foundation"
      ],
      image: serviceConsulting
    },
    "marketing-and-services": {
      title: "Marketing and Services",
      description: "Comprehensive digital marketing solutions including SEO and digital campaigns to boost your online presence and drive business growth.",
      icon: <TrendingUp className="h-16 w-16 text-blue-600" />,
      longDescription: "In today's digital landscape, having a strong online presence is crucial for business success. Our marketing and services solutions help you reach your target audience, improve your search engine visibility, and drive meaningful engagement that converts into business growth.",
      features: [
        {
          title: "Search Engine Optimization (SEO)",
          description: "Improve your website's visibility in search results with comprehensive SEO strategies that drive organic traffic and increase your online presence."
        },
        {
          title: "Digital Marketing Campaigns",
          description: "Create and execute targeted digital marketing campaigns across multiple channels to reach your ideal customers and drive conversions."
        },
        {
          title: "Social Media Marketing",
          description: "Build and engage your audience across social media platforms with strategic content and community management."
        },
        {
          title: "Content Marketing Strategy",
          description: "Develop compelling content that resonates with your audience and establishes your brand as an industry authority."
        },
        {
          title: "Performance Analytics & Reporting",
          description: "Track, measure, and optimize your marketing efforts with detailed analytics and comprehensive reporting."
        }
      ],
      benefits: [
        "Increased online visibility and brand awareness",
        "Higher search engine rankings",
        "Improved customer engagement and conversion rates",
        "Data-driven marketing decisions",
        "Measurable ROI on marketing investments"
      ],
      image: serviceMarketing,
      subServices: [
        {
          id: "seo",
          title: "Search Engine Optimization (SEO)",
          description: "Boost your online visibility with tailored SEO strategies that drive organic traffic and improve search rankings.",
          icon: <Search className="h-12 w-12 text-blue-600" />,
          features: [
            "Keyword research and strategy",
            "On-page optimization",
            "Technical SEO audits",
            "Link building campaigns",
            "Local SEO optimization",
            "SEO performance tracking"
          ],
          benefits: [
            "Higher search engine rankings",
            "Increased organic website traffic",
            "Better user experience",
            "Improved local visibility",
            "Long-term sustainable growth"
          ]
        },
        {
          id: "digital-marketing",
          title: "Digital Marketing",
          description: "Full-service digital marketing campaigns designed to grow your brand, engage customers, and drive revenue.",
          icon: <Megaphone className="h-12 w-12 text-blue-600" />,
          features: [
            "Pay-per-click (PPC) advertising",
            "Social media advertising",
            "Email marketing campaigns",
            "Content marketing",
            "Conversion rate optimization",
            "Marketing automation"
          ],
          benefits: [
            "Targeted audience reach",
            "Increased brand awareness",
            "Higher conversion rates",
            "Improved customer retention",
            "Measurable marketing ROI"
          ]
        }
      ]
    }
  };

  const service = services[id];

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - OBT Solution LLC`;
    } else {
      document.title = 'Service - OBT Solution LLC';
    }
    window.scrollTo(0, 0);
  }, [service, id]);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/services"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          View All Services
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
          <div className="max-w-3xl">
            <div className="mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-blue-100">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 mb-6">{service.longDescription}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-100 w-64 h-48 rounded-xl -z-10"></div>
              <div className="absolute -top-8 -left-8 bg-teal-100 w-48 h-40 rounded-xl -z-10"></div>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our {service.title} Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of {service.title.toLowerCase()} services to meet your specific business needs.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow w-full flex flex-col"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 flex-grow">{feature.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Services Section for Marketing and Services */}
          {service.subServices && (
            <section ref={subServicesRef} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={subServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose from our specialized marketing services designed to meet your specific business goals.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {service.subServices.map((subService, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={subServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg"
                  >
                    <div className="mb-6">
                      {subService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{subService.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{subService.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {subService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {subService.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Get Started with {subService.title}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our {service.title.toLowerCase()} services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;