import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - OBT Solutions';
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:25px_25px]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Contact OBT Solutions
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Ready to transform your business with innovative IT solutions? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* UPDATED GET IN TOUCH SECTION */}
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
                className="lg:col-span-3 p-8 lg:p-12 rounded-r-xl flex flex-col justify-center"
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

                {/* Office Hours */}
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

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-3">
              Find answers to common questions from clients.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What industries do you work with?",
                a: "We partner with healthcare, finance, retail, manufacturing, education, and technology clients."
              },
              {
                q: "How fast can you begin a project?",
                a: "Most projects begin within 1–2 weeks depending on availability and requirements."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, we offer multiple support and maintenance packages tailored to your business."
              },
              {
                q: "How do you ensure data security?",
                a: "We follow industry standards and comply with GDPR, HIPAA, and modern security protocols."
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
