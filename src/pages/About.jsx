import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Target, Eye, Users } from 'lucide-react';

export default function About() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Alex Thompson',
      title: 'CEO & Founder',
      bio: 'Former financial advisor with 15+ years of experience helping people achieve financial freedom.',
      photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Sarah Davis',
      title: 'CTO & Co-Founder',
      bio: 'Tech entrepreneur passionate about building user-friendly financial tools that make a difference.',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Michael Rodriguez',
      title: 'Head of Product',
      bio: 'Product strategist focused on creating intuitive experiences that simplify complex financial concepts.',
      photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Emily Chen',
      title: 'Head of Design',
      bio: 'UX designer dedicated to making financial management accessible and enjoyable for everyone.',
      photo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
  ];

  const nextTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 2));
  };

  const prevTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + Math.ceil(teamMembers.length / 2)) % Math.ceil(teamMembers.length / 2));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Financial 
            <span className="text-emerald-300"> Success</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            We believe everyone deserves access to powerful financial tools that make budgeting simple, 
            intuitive, and effective.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  BudgetPro was founded in 2020 when our team of financial experts and technology veterans 
                  recognized a gap in the market for truly user-friendly budgeting tools.
                </p>
                <p>
                  After witnessing countless individuals struggle with complex financial software, we set out 
                  to create a platform that would make budget management as simple as checking your email.
                </p>
                <p>
                  Today, we're proud to serve over 100,000 users worldwide, helping them save money, 
                  reduce financial stress, and achieve their goals.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Company founding story"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To democratize financial wellness by providing accessible, intuitive tools that empower 
                individuals to take control of their money and build a secure financial future.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                A world where financial stress is eliminated through smart technology, where everyone has 
                the tools and knowledge to make informed financial decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate individuals behind BudgetPro
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTeamMember}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextTeamMember}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.slice(currentTeamIndex * 2, (currentTeamIndex + 1) * 2).map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>

            {/* Team Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(teamMembers.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTeamIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centric</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our users and their financial well-being.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Simplicity</h3>
              <p className="text-gray-600">
                We believe powerful tools should be simple to use, making financial management accessible to everyone.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We're open about our practices, pricing, and commitment to protecting your financial data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
