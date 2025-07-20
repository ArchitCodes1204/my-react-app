import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, UtensilsCrossed, Car, Gamepad2, Zap, Home as HomeIcon, ShoppingBag } from 'lucide-react';

export default function Home() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const categories = [
    { name: 'Food & Dining', icon: UtensilsCrossed, color: 'bg-red-100 text-red-600', budget: '$500' },
    { name: 'Transportation', icon: Car, color: 'bg-blue-100 text-blue-600', budget: '$300' },
    { name: 'Entertainment', icon: Gamepad2, color: 'bg-purple-100 text-purple-600', budget: '$200' },
    { name: 'Utilities', icon: Zap, color: 'bg-green-100 text-green-600', budget: '$400' },
    { name: 'Housing', icon: HomeIcon, color: 'bg-yellow-100 text-yellow-600', budget: '$1200' },
    { name: 'Shopping', icon: ShoppingBag, color: 'bg-pink-100 text-pink-600', budget: '$250' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'BudgetPro has completely transformed how I manage my finances. The visual insights help me stay on track and the alerts prevent overspending.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      content: 'I love the category-based budgeting system. It makes it so easy to see where my money is going and helps me make better financial decisions.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      content: 'The expense tracking is incredibly intuitive. I can add expenses on the go and the app automatically categorizes them. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev + 1) % Math.ceil(categories.length / 3));
  };

  const prevCategory = () => {
    setCurrentCategoryIndex((prev) => (prev - 1 + Math.ceil(categories.length / 3)) % Math.ceil(categories.length / 3));
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Take Control of Your
                <span className="text-yellow-400"> Financial Future</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Track expenses, set budgets, and achieve your financial goals with our comprehensive budgeting platform.
              </p>
              <div className="flex space-x-4">
                <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Get Started Free
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Categories Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Budget Categories
            </h2>
            <p className="text-xl text-gray-600">
              Organize your expenses with pre-built categories or create your own
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevCategory}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextCategory}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(currentCategoryIndex * 3, (currentCategoryIndex + 1) * 3).map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">{category.budget}</p>
                  <p className="text-gray-600">Monthly Budget</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* First Selling Point */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Smart Budget Tracking with Visual Insights
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Get real-time insights into your spending patterns with beautiful charts and graphs. 
                Our advanced analytics help you understand where your money goes and identify opportunities to save.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Interactive pie and bar charts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Monthly and yearly spending trends</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Budget vs actual comparisons</span>
                </li>
              </ul>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Budget tracking dashboard"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Second Selling Point */}
            <div className="order-last lg:order-first">
              <img
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Mobile expense tracking"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Smart Alerts & Automated Reminders
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Never miss a payment or overspend again. Our intelligent alert system keeps you informed 
                about your budget status and upcoming expenses in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Overspending alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Recurring expense reminders</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Budget goal notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who have transformed their finances
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <img
                src={testimonials[currentTestimonialIndex].avatar}
                alt={testimonials[currentTestimonialIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-6"
              />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonialIndex].content}"
              </p>
              <h4 className="text-xl font-semibold text-gray-900">
                {testimonials[currentTestimonialIndex].name}
              </h4>
              <p className="text-gray-600">{testimonials[currentTestimonialIndex].role}</p>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonialIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
