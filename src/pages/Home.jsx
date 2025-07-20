import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const budgetCategories = [
    { name: 'Food & Groceries', color: 'bg-blue-500', spent: '₹8,500', budget: '₹15,000' },
    { name: 'Transportation', color: 'bg-green-500', spent: '₹6,200', budget: '₹8,000' },
    { name: 'Entertainment', color: 'bg-yellow-500', spent: '₹6,500', budget: '₹5,000' },
    { name: 'Utilities & Bills', color: 'bg-red-500', spent: '₹11,200', budget: '₹12,000' },
    { name: 'Healthcare', color: 'bg-purple-500', spent: '₹3,200', budget: '₹7,000' },
    { name: 'Education', color: 'bg-indigo-500', spent: '₹4,800', budget: '₹10,000' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer, Bangalore',
      content: 'BudgetWala ne mere financial planning ko bilkul badal diya hai. Visual insights amazing hain!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Analyst, Delhi',
      content: 'Budget alerts ne mujhe overspending se bachaya hai. Highly recommended for Indian families!',
      rating: 5,
    },
    {
      name: 'Anita Patel',
      role: 'Teacher, Mumbai',
      content: 'Simple, elegant, aur powerful. Ye app budgeting ko actually enjoyable banata hai.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % budgetCategories.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + budgetCategories.length) % budgetCategories.length);
  };

  return (
    <div className="min-h-screen">
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <input
            type="text"
            placeholder="Budget categories, expenses, ya insights search kariye..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Hero Text */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Apne <span className="text-yellow-300">Financial Future</span> Ko Control Kariye
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Smart budgeting made simple. Expenses track kariye, goals set kariye, aur financial freedom achieve kariye hamari intuitive platform ke saath.
              </p>
              <Link
                to="/dashboard"
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                Aaj Hi Budgeting Shuru Kariye
              </Link>
            </div>

            {/* Right Hero Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Aaj Hi Shuru Kariye</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Aapka Naam"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <input
                  type="email"
                  placeholder="Aapka Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <textarea
                  rows={4}
                  placeholder="Hum aapki budget mein kaise madad kar sakte hain?"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Message Bhejiye
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Categories Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Budget Categories</h2>
          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                onClick={prevCategory}
                className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {budgetCategories.slice(currentCategory, currentCategory + 3).map((category, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className={`w-12 h-12 ${category.color} rounded-lg mb-4`}></div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <div className="text-sm text-gray-600">
                      <p>Spent: <span className="font-medium">{category.spent}</span></p>
                      <p>Budget: <span className="font-medium">{category.budget}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={nextCategory}
                className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* First Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Smart Budget Tracking</h2>
              <p className="text-lg text-gray-600 mb-8">
                Hamara intelligent system automatically aapke expenses ko categorize karta hai aur real-time insights provide karta hai.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-blue-600 rounded-full" /><span>Real-time expense tracking</span></li>
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-blue-600 rounded-full" /><span>Custom budget categories</span></li>
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-blue-600 rounded-full" /><span>Intelligent alerts</span></li>
              </ul>
            </div>
            <img
              src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Budget Tracking"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Second Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Financial Goals"
              className="rounded-2xl shadow-2xl order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Financial Goals Achieve Kariye</h2>
              <p className="text-lg text-gray-600 mb-8">
                Visual insights ke saath goals track kariye aur personal recommendations ke saath apna future secure kariye.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-green-600 rounded-full" /><span>Visual progress tracking</span></li>
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-green-600 rounded-full" /><span>Milestone celebrations</span></li>
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-green-600 rounded-full" /><span>Personalized recommendations</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Hamare Users Kya Kehte Hain</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg italic mb-6">"{testimonials[currentTestimonial].content}"</p>
            <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
            <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
