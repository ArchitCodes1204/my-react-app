import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  const teamMembers = [
    {
      name: 'Priya Sharma',
      title: 'CEO & Founder',
      bio: 'Financial technology mein 15+ saal ka experience. Priya hamari vision lead karti hai budgeting ko sabke liye accessible banane ki.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Rajesh Kumar',
      title: 'CTO',
      bio: 'Former TCS engineer with expertise in building scalable financial platforms aur user-centric design.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Anita Patel',
      title: 'Head of Product',
      bio: 'Product strategist jo passionate hai intuitive experiences create karne mein jo users ko financial goals achieve karne mein help kare.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Vikram Singh',
      title: 'Head of Design',
      bio: 'Award-winning designer jo focus karta hai beautiful, accessible interfaces create karne mein financial applications ke liye.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const nextTeamMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamMember = () => {
    setCurrentTeamMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Financial <span className="text-yellow-300">Azadi</span> Ko Badhava Dena
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hum believe karte hain ki har kisi ko financial clarity aur control milna chahiye.
            Hamara mission hai budget management ko simple, intelligent, aur sabke liye accessible banana.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hamari Kahani</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 leading-relaxed mb-6">
              2020 mein founded, BudgetWala ek simple observation se emerge hua: traditional budgeting
              tools ya toh everyday users ke liye bahut complex the ya meaningful insights ke liye bahut simplistic.
              Hamare founders, jo khud personal finance management ke saath struggle kar rahe the, unhone
              kuch different create karne ka socha.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jo weekend project ke roop mein start hua, wo jaldi hi ek comprehensive platform ban gaya jo
              intelligent automation ko user-friendly design ke saath combine karta hai. Humne 1,00,000+
              users ki madad ki hai apne finances ko control karne mein aur financial goals achieve karne mein.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aaj, hum innovate aur improve karte rehte hain, hamesha apne users ki needs ko center mein
              rakhte hue. Hamari commitment simplicity, security, aur effectiveness ke liye har decision
              ko drive karti hai.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Hamara Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Financial wellness ko democratize karna intelligent, intuitive tools provide karke jo
              individuals aur families ko empower kare informed financial decisions lene mein. Hum
              strive karte hain complexity aur anxiety ko money management se remove karne mein,
              financial literacy ko sabke liye accessible banane mein.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-purple-600">Hamara Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Ek duniya jahan financial stress eliminate ho jaye education, automation, aur
              intelligent insights ke through. Hum ek future envision karte hain jahan sabke paas
              tools aur knowledge ho financial freedom achieve karne ke liye aur apni best life
              jeene ke liye bina money worries ke.
            </p>
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hamari Team Se Miliye</h2>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <img
                src={teamMembers[currentTeamMember].image}
                alt={teamMembers[currentTeamMember].name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{teamMembers[currentTeamMember].name}</h3>
              <p className="text-blue-600 font-medium mb-4">{teamMembers[currentTeamMember].title}</p>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {teamMembers[currentTeamMember].bio}
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-4 items-center">
              <button
                onClick={prevTeamMember}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamMember(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTeamMember ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTeamMember}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
