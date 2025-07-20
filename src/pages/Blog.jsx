import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const [currentBlogSet, setCurrentBlogSet] = useState(0);

  const blogPosts = [
    {
      title: '10 Essential Budgeting Tips for Beginners',
      description: 'Master the basics of personal finance with these proven strategies that will set you up for financial success.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Budgeting Basics',
    },
    {
      title: 'How to Create an Emergency Fund That Actually Works',
      description: 'Learn the step-by-step process to build a robust emergency fund that will protect you from unexpected expenses.',
      author: 'Mike Chen',
      date: '2024-01-12',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Emergency Planning',
    },
    {
      title: 'The Psychology of Spending: Why We Overspend',
      description: 'Understand the mental triggers that lead to overspending and learn practical strategies to overcome them.',
      author: 'Emily Davis',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/4386327/pexels-photo-4386327.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Psychology',
    },
    {
      title: 'Investment Strategies for Young Professionals',
      description: 'Start your investment journey with confidence using these time-tested strategies designed for career starters.',
      author: 'David Wilson',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Investing',
    },
    {
      title: 'Debt-Free Living: A Complete Roadmap',
      description: 'Transform your financial life with our comprehensive guide to eliminating debt and building wealth.',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/4386245/pexels-photo-4386245.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Debt Management',
    },
    {
      title: 'Smart Technology for Personal Finance',
      description: 'Discover the latest fintech tools and apps that can revolutionize how you manage your money.',
      author: 'Mike Chen',
      date: '2024-01-03',
      image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Technology',
    },
  ];

  const blogsPerPage = 3;
  const maxSets = Math.ceil(blogPosts.length / blogsPerPage);

  const nextBlogSet = () => {
    setCurrentBlogSet((prev) => (prev + 1) % maxSets);
  };

  const prevBlogSet = () => {
    setCurrentBlogSet((prev) => (prev - 1 + maxSets) % maxSets);
  };

  const getCurrentBlogs = () => {
    const start = currentBlogSet * blogsPerPage;
    return blogPosts.slice(start, start + blogsPerPage);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Financial Wisdom & <span className="text-yellow-300">Expert Insights</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and strategies in personal finance and budgeting.
          </p>
        </div>
      </section>

      {/* Blog Posts Carousel */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentBlogs().map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevBlogSet}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex space-x-2 items-center">
                {Array.from({ length: maxSets }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBlogSet(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentBlogSet ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextBlogSet}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get the latest financial tips and insights delivered directly to your inbox.
            </p>

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                No spam, unsubscribe at any time. Your privacy is our priority.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Budgeting Basics', 'Emergency Planning', 'Psychology', 'Investing', 'Debt Management', 'Technology'].map(
              (category, index) => (
                <button
                  key={index}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="font-medium text-gray-700">{category}</span>
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
