import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "OBT Solution LLC transformed our operations with their cloud migration solution. Their team's expertise and dedication to our success made the entire process smooth and efficient.",
      author: "Neil Johnson",
      title: "CTO",
      company: "Highmark Finance",
      rating: 5
    },
    {
      quote: "The data analytics platform implemented by OBT Solution LLC has provided us with invaluable insights that have directly improved our patient care outcomes and operational efficiency.",
      author: "Himanshu Desai",
      title: "Principal Data Engineer",
      company: "Prime Therapeutics",
      rating: 5
    },
    {
      quote: "Working with OBT Solution LLC on our cybersecurity solution was an excellent experience. Their team's proactive approach and attention to detail have significantly enhanced our security posture.",
      author: "Pankaj Shukla",
      title: "Technical Manager",
      company: "Innova Solutions Inc",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experiences working with OBT Solution LLC.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl p-8 md:p-10 flex flex-col items-center text-center space-y-4"
            >
              {/* Company Name */}
              <p className="text-blue-600 font-bold text-lg md:text-xl">
                {testimonials[currentIndex].company}
              </p>

              {/* Quote */}
              <blockquote className="text-gray-700 italic text-base md:text-lg leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Star Rating */}
              <div className="flex items-center justify-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author Name & Title */}
              <p className="text-gray-900 font-semibold mt-2">
                {testimonials[currentIndex].author}, <span className="text-gray-500">{testimonials[currentIndex].title}</span>
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
