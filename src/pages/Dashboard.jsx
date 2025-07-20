import React, { useState } from 'react';
import { ChevronUp, ChevronDown, User, Calendar, Mail } from 'lucide-react';

export default function Blog() {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      title: '10 Simple Ways to Start Budgeting Today',
      description: 'Learn the fundamentals of budgeting with these easy-to-follow strategies that anyone can implement immediately.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Sarah Johnson',
      date: 'March 15, 2025',
      category: 'Budgeting Basics'
    },
    {
      title: 'The Psychology of Spending: Understanding Your Money Habits',
      description: 'Discover the psychological factors that influence your spending decisions and learn how to build better financial habits.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. Michael Chen',
      date: 'March 12, 2025',
      category: 'Financial Psychology'
    },
    {
      title: 'Emergency Fund 101: Building Your Financial Safety Net',
      description: 'Step-by-step guide to building an emergency fund that will protect you from unexpected financial challenges.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Emily Rodriguez',
      date: 'March 10, 2025',
      category: 'Emergency Planning'
    },
    {
      title: 'Smart Strategies for Paying Off Debt Faster',
      description: 'Proven methods to accelerate your debt payoff and save thousands in interest payments.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'David Miller',
      date: 'March 8, 2025',
      category: 'Debt Management'
    },
    {
      title: 'Investing on a Budget: Getting Started with $100',
      description: 'Learn how to begin your investment journey even with limited funds and build wealth over time.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Jennifer Park',
      date: 'March 5, 2025',
      category: 'Investing'
    },
    {
      title: 'Side Hustles That Actually Make Money in 2025',
      description: 'Explore legitimate side hustle opportunities that can boost your income and accelerate your financial goals.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Alex Thompson',
      date: 'March 3, 2025',
      category: 'Income Generation'
    },
    {
      title: 'Meal Planning to Save Money: A Complete Guide',
      description: 'Cut your grocery bill in half with strategic meal planning and smart shopping techniques.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Maria Garcia',
      date: 'March 1, 2025',
      category: 'Money Saving'
    },
    {
      title: 'Teaching Kids About Money: Age-Appropriate Lessons',
      description: 'Essential financial lessons to teach children at every age to set them up for future success.',
      image: 'https://images.pexels.com/photos/5849579/pexels-photo-5849579.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Robert Kim',
      date: 'February 28, 2025',
      category: 'Financial Education'
    },
    {
      title: 'The Art of Negotiating Better Deals and Saving Money',
      description: 'Master the art of negotiation to reduce your bills and get better deals on everything you buy.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Lisa Wong',
      date: 'February 25, 2025',
      category: 'Money Saving'
    }
  ];

  const loadMoreBlogs = () => {
    setVisibleBlogs(prev => Math.min(prev + 3, blogPosts.length));
  };

  const showLessBlogs = () => {
    setVisibleBlogs(6);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Financial Wisdom
            <span className="text-orange-300"> & Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Expert advice, practical tips, and inspiring stories to help you master your money and achieve financial freedom.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest financial tips and strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, visibleBlogs).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More/Show Less Buttons */}
          <div className="text-center mt-12">
            {visibleBlogs < blogPosts.length ? (
              <button
                onClick={loadMoreBlogs}
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                <ChevronDown className="h-5 w-5 mr-2" />
                Load More Articles
              </button>
            ) : visibleBlogs > 6 ? (
              <button
                onClick={showLessBlogs}
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                <ChevronUp className="h-5 w-5 mr-2" />
                Show Less
              </button>
            ) : null}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <Mail className="h-12 w-12 text-orange-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Financial Tips
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest financial insights, budgeting tips, 
              and money-saving strategies delivered straight to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Topics
            </h2>
            <p className="text-xl text-gray-600">
              Find articles by category that interest you most
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Budgeting Basics', 'Debt Management', 'Investing', 'Money Saving', 'Financial Education', 'Income Generation'].map((category, index) => (
              <button
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-orange-200 transition-all"
              >
                <span className="text-sm font-medium text-gray-700 hover:text-orange-600">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
