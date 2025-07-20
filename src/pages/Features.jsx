import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const features = [
    {
      title: 'Create Custom Categories',
      description: 'Organize your expenses with personalized budget categories that fit your lifestyle.',
      icon: '🏷️',
      details: 'Set up unlimited categories with custom colors and budget limits tailored to your needs.',
    },
    {
      title: 'Real-time Expense Tracking',
      description: 'Monitor your spending as it happens with instant updates and notifications.',
      icon: '📊',
      details: 'Add expenses quickly and see immediate updates to your budget status and remaining funds.',
    },
    {
      title: 'Visual Charts & Insights',
      description: 'Understand your spending patterns with beautiful, interactive charts and reports.',
      icon: '📈',
      details: 'Pie charts, bar graphs, and trend analysis help you visualize where your money goes.',
    },
    {
      title: 'Smart Budget Alerts',
      description: 'Get notified before you overspend with intelligent budget warnings.',
      icon: '🔔',
      details: 'Customizable alerts help you stay on track and avoid budget overruns.',
    },
    {
      title: 'Recurring Reminders',
      description: 'Never forget important payments with automated expense reminders.',
      icon: '⏰',
      details: 'Set up daily, weekly, monthly, or yearly reminders for recurring expenses.',
    },
  ];

  const faqs = [
    {
      question: 'How secure is my financial data?',
      answer: 'We use bank-level encryption and security measures to protect your data. All information is stored securely and never shared with third parties.',
    },
    {
      question: 'Can I connect my bank accounts?',
      answer: 'Yes, you can securely connect your bank accounts using our encrypted API integrations for automatic transaction importing.',
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Our web application is fully responsive and works seamlessly on mobile devices. A dedicated mobile app is coming soon.',
    },
    {
      question: 'How much does BudgetMaster cost?',
      answer: 'We offer a free tier with basic features, and premium plans starting at $9.99/month for advanced analytics and unlimited categories.',
    },
    {
      question: 'Can I export my budget data?',
      answer: 'Yes, you can export your data in various formats including CSV, PDF, and Excel for your records or tax purposes.',
    },
    {
      question: 'Do you offer customer support?',
      answer: 'We provide 24/7 customer support via email and chat. Premium users also get priority phone support.',
    },
  ];

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="text-yellow-300"> Smart Budgeting</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover all the tools you need to take control of your finances and build a secure financial future.
          </p>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{features[currentFeature].icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{features[currentFeature].title}</h3>
                  <p className="text-gray-600 text-lg mb-4">{features[currentFeature].description}</p>
                  <p className="text-gray-500">{features[currentFeature].details}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{features[currentFeature].icon}</div>
                    <p className="text-gray-600">Interactive Feature Demo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevFeature}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex space-x-2 items-center">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentFeature ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextFeature}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
