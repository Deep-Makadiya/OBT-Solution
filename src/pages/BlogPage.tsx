import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Tag, ArrowRight, Search, Filter, Server, BarChart, Shield, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const BlogPage = () => {
  useEffect(() => {
    document.title = 'Blog - OBT Solution LLC';
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'cloud-solutions', name: 'Cloud Solutions', icon: <Server className="h-5 w-5" /> },
    { id: 'data-analytics', name: 'Data Analytics', icon: <BarChart className="h-5 w-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="h-5 w-5" /> },
    { id: 'software-development', name: 'Software Development', icon: <Code className="h-5 w-5" /> },
    { id: 'database-management', name: 'Database Management', icon: <Database className="h-5 w-5" /> }
  ];

  const blogPosts = [
    {
      id: 'cloud-migration-strategies',
      title: 'Cloud Migration Strategies for Enterprise Applications',
      excerpt: 'Discover the most effective strategies for migrating enterprise applications to the cloud while minimizing risk and maximizing ROI.',
      author: 'Neil Johnson',
      date: 'May 15, 2023',
      category: 'cloud-solutions',
      categoryName: 'Cloud Solutions',

    },
    {
      id: 'data-analytics-healthcare',
      title: 'How Data Analytics is Transforming Healthcare Delivery',
      excerpt: 'Explore how healthcare providers are leveraging data analytics to improve patient outcomes, optimize operations, and reduce costs.',
      author: 'Michael Chen',
      date: 'April 28, 2023',
      category: 'data-analytics',
      categoryName: 'Data Analytics',

    },
    {
      id: 'cybersecurity-threats-2023',
      title: 'Top Cybersecurity Threats to Watch in 2023',
      excerpt: 'Stay ahead of the curve with our comprehensive analysis of emerging cybersecurity threats and how to protect your business.',
      author: 'Emily Rodriguez',
      date: 'March 12, 2023',
      category: 'cybersecurity',
      categoryName: 'Cybersecurity',

    },
    {
      id: 'microservices-architecture',
      title: 'The Benefits and Challenges of Microservices Architecture',
      excerpt: 'Understand the advantages and potential pitfalls of adopting a microservices architecture for your software applications.',
      author: 'David Lee',
      date: 'February 19, 2023',
      category: 'software-development',
      categoryName: 'Software Development',

    },
    {
      id: 'database-performance-optimization',
      title: 'Essential Techniques for Database Performance Optimization',
      excerpt: 'Learn proven methods to optimize your database performance and ensure your applications run smoothly at scale.',
      author: 'Robert Chen',
      date: 'January 30, 2023',
      category: 'database-management',
      categoryName: 'Database Management',

    },
    {
      id: 'ai-machine-learning-business',
      title: 'Practical Applications of AI and Machine Learning for Business',
      excerpt: 'Discover how businesses across industries are implementing AI and machine learning to drive innovation and competitive advantage.',
      author: 'Jennifer Patel',
      date: 'January 15, 2023',
      category: 'data-analytics',
      categoryName: 'Data Analytics',

    }
  ];

  const filteredPosts = blogPosts
    .filter(post =>
      (selectedCategory === 'all' || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    );

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-100 mb-8">
              Insights, trends, and expertise from our team of IT professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center overflow-x-auto pb-2">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700 font-medium mr-4 whitespace-nowrap">Filter by:</span>
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap flex items-center ${selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {category.icon && <span className="mr-2">{category.icon}</span>}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Link to={`/blog/${post.id}`} className="block">

                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-blue-600 font-medium mb-2">
                      <Tag className="h-4 w-4 mr-1" />
                      {post.categoryName}
                    </div>
                    <Link to={`/blog/${post.id}`} className="block">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Posts Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any blog posts matching your search criteria. Please try a different search term or filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;