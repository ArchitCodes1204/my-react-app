import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Plus, BarChart3, Bell, Calendar, PieChart, TrendingUp } from 'lucide-react';

export default function Features() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const features = [
    {
      title: 'Create Custom Categories',
      description: 'Organize your expenses with personalized budget categories that match your lifestyle and spending habits.',
      icon: Plus,
      color: 'bg-blue-100 text-blue-600',
      benefits: ['Unlimited custom categories', 'Pre-built templates', 'Icon customization', 'Color coding']
    },
    {
      title: 'Advanced Expense Tracking',
      description: 'Track every penny with our intuitive expense logging system that makes recording transactions effortless.',
      icon: TrendingUp,
      color: 'bg-emerald-100 text-emerald-600',
      benefits: ['Quick expense entry', 'Receipt scanning', 'Auto-categorization', 'Bulk import']
    },
    {
      title: 'Visual Charts & Analytics',
      description: 'Understand your spending patterns with beautiful, interactive charts and detailed financial analytics.',
      icon: PieChart,
      color: 'bg-purple-100 text-purple-600',
      benefits: ['Pie and bar charts', 'Spending trends', 'Monthly comparisons', 'Export reports']
    },
    {
      title: 'Smart Budget Alerts',
      description: 'Stay on track with intelligent notifications that warn you before you exceed your budget limits.',
      icon: Bell,
      color: 'bg-red-100 text-red-600',
      benefits: ['Overspending alerts', 'Goal notifications', 'Budget milestones', 'Custom thresholds']
    },
    {
      title: 'Recurring Reminders',
      description: 'Never miss a payment with automated reminders for recurring expenses and bills.',
      icon: Calendar,
      color: 'bg-yellow-100 text-yellow-600',
      benefits: ['Bill reminders', 'Subscription tracking', 'Payment schedules', 'Due date alerts']
    },
    {
      title: 'Financial Insights',
      description: 'Get personalized insights and recommendations to improve your financial health and savings.',
      icon: BarChart3,
      color: 'bg-indigo-100 text-indigo-600',
      benefits: ['Spending analysis', 'Saving opportunities', 'Trend predictions', 'Goal tracking']
    }
  ];

  const faqs = [
    {
      question: 'How do I create a new budget category?',
      answer: 'Creating a new budget category is simple! Navigate to your dashboard, click the "Add Category" button, choose a name, set your budget amount, select an icon and color, then save. You can also use our pre-built category templates for common expenses.'
    },
    {
      question: 'Can I track expenses across multiple accounts?',
      answer: 'Yes! BudgetPro supports tracking expenses across multiple accounts and payment methods. You can link your bank accounts, credit cards, and even track cash expenses all in one place.'
    },
    {
      question: 'How do budget alerts work?',
      answer: 'Budget alerts are triggered when you approach or exceed your set budget limits. You can customize alert thresholds (like 80%, 90%, or 100% of budget) and choose how you want to be notified - via email, push notifications, or in-app alerts.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Absolutely! We use bank-level encryption to protect your data, never store your banking credentials, and follow strict security protocols. Your financial information is encrypted both in transit and at rest.'
    },
    {
      question: 'Can I export my spending reports?',
      answer: 'Yes! You can export your spending reports in various formats including PDF, CSV, and Excel. Reports can be customized by date range, category, and include charts and detailed transaction lists.'
    },
    {
      question: 'How do recurring expense reminders work?',
      answer: 'Set up recurring reminders for bills, subscriptions, and regular expenses. Choose the frequency (daily, weekly, monthly, yearly) and we\'ll notify you before the due date so you never miss a payment.'
    }
  ];

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % Math.ceil(features.length / 3));
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => (prev - 1 + Math.ceil(features.length / 3)) % Math.ceil(features.length / 3));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="text-purple-300"> Smart Budgeting</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Discover all the tools you need to take control of your finances and achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Budget Like a Pro
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools designed to make financial management effortless
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevFeature}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextFeature}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.slice(currentFeatureIndex * 3, (currentFeatureIndex + 1) * 3).map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Feature Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(features.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatureIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentFeatureIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about BudgetPro's features
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already taken control of their financial future with BudgetPro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
