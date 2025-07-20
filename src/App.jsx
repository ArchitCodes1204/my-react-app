import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BudgetProvider } from './context/BudgetContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BudgetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          {/* Navbar component */}
          <Navbar />

          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          {/* Footer component */}
          <Footer />
        </div>
      </Router>
    </BudgetProvider>
  );
}

export default App;
