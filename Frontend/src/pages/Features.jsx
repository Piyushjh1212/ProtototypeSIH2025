import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  const mainFeatures = [
    {
      title: "AI-Powered Dosha Analysis",
      description: "Advanced constitutional assessment using machine learning and traditional Ayurvedic principles",
      icon: "🧠",
      color: "from-purple-500 to-indigo-600",
      features: [
        "Comprehensive Prakriti (constitution) analysis",
        "Vikriti (current imbalance) assessment",
        "Seasonal and lifestyle factor consideration",
        "Pulse diagnosis integration support",
        "Automated recommendations based on analysis"
      ],
      animation: "hover:scale-105"
    },
    {
      title: "Extensive Food Database",
      description: "8000+ food items with detailed Ayurvedic properties, nutritional data, and therapeutic effects",
      icon: "🍎",
      color: "from-green-500 to-emerald-600",
      features: [
        "8000+ foods with Ayurvedic properties",
        "Rasa (taste), Virya (potency), Vipaka (effect)",
        "Seasonal availability and recommendations",
        "Regional food variations and alternatives",
        "Custom food addition and modification"
      ],
      animation: "hover:scale-105"
    },
    {
      title: "Advanced Reports & Analytics",
      description: "Comprehensive reporting system for tracking patient progress and practice insights",
      icon: "📊",
      color: "from-blue-500 to-cyan-600",
      features: [
        "Patient progress tracking reports",
        "Practice analytics and insights",
        "Treatment outcome measurements",
        "Revenue and appointment analytics",
        "Custom report generation"
      ],
      animation: "hover:scale-105"
    }
  ];

  const additionalFeatures = [
    {
      title: "Time-Saving Automation",
      description: "Reduce consultation time by 60% with automated assessments and recommendations",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      stat: "60% Faster"
    },
    {
      title: "Multi-Language Support",
      description: "Support for multiple languages including Sanskrit terminology",
      icon: "🌐",
      color: "from-blue-500 to-purple-500",
      stat: "10+ Languages"
    },
    {
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security ensuring patient data protection and privacy",
      icon: "🔒",
      color: "from-green-500 to-teal-500",
      stat: "100% Secure"
    },
    {
      title: "Real-Time Sync",
      description: "Instant synchronization across all devices and team members",
      icon: "🔄",
      color: "from-purple-500 to-pink-500",
      stat: "Instant Sync"
    },
    {
      title: "Mobile Accessibility",
      description: "Access your practice data anywhere with responsive mobile design",
      icon: "📱",
      color: "from-indigo-500 to-blue-500",
      stat: "Anywhere Access"
    }
  ];

  const integrationFeatures = [
    {
      title: "EMR Integration",
      description: "Seamlessly integrate with existing Electronic Medical Record systems",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "API Access",
      description: "Full API access for custom integrations and third-party applications",
      icon: "🔌",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Migration",
      description: "Easy migration from existing systems with dedicated support team",
      icon: "📦",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const foodProperties = [
    { property: "Rasa (Taste)", value: "95%", change: "↑", color: "from-green-500 to-emerald-500" },
    { property: "Virya (Potency)", value: "88%", change: "↑", color: "from-blue-500 to-cyan-500" },
    { property: "Vipaka (Effect)", value: "92%", change: "↑", color: "from-purple-500 to-indigo-500" },
    { property: "Prabhava", value: "85%", change: "↑", color: "from-yellow-500 to-amber-500" },
    { property: "Seasonal Availability", value: "78%", change: "↑", color: "from-orange-500 to-red-500" },
    { property: "Regional Variations", value: "82%", change: "↑", color: "from-pink-500 to-rose-500" }
  ];

  const popularFoods = [
    { name: "Amalaki", type: "Fruit", dosha: "Tridoshic", rating: "98%" },
    { name: "Ashwagandha", type: "Herb", dosha: "Vata-Pitta", rating: "95%" },
    { name: "Turmeric", type: "Spice", dosha: "Kapha-Vata", rating: "96%" },
    { name: "Ghee", type: "Dairy", dosha: "Vata-Pitta", rating: "92%" },
    { name: "Mung Dal", type: "Legume", dosha: "Tridoshic", rating: "90%" },
    { name: "Basmati Rice", type: "Grain", dosha: "Tridoshic", rating: "88%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.85), rgba(5, 150, 105, 0.85)), url('https://media.istockphoto.com/id/1301830934/photo/healthy-gut.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZJeKhFq0po1BcbUO2sjnTuSsWVv6fHbzizg4BQT73Ko=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500 rounded-full -translate-y-36 translate-x-36 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full translate-y-48 -translate-x-48 opacity-20 animate-bounce"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Powerful Features for Modern Ayurvedic Practice
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto animate-fade-in-up delay-200">
            Comprehensive tools designed to enhance your practice while maintaining the authenticity of Ayurvedic principles
          </p>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden group transition-all duration-500 transform ${feature.animation} hover:shadow-2xl`}
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} text-white text-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Database Detailed Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                8000+ Ayurvedic Foods Database
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive database with detailed Ayurvedic properties, nutritional data, and therapeutic effects for personalized diet planning.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {foodProperties.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">{item.property}</span>
                      <span className="text-lg font-bold text-green-600">{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                        style={{ width: item.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Popular Foods */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Popular Ayurvedic Foods
              </h3>
              <div className="space-y-4">
                {popularFoods.map((food, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {food.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{food.name}</div>
                        <div className="text-sm text-gray-600">{food.type} • {food.dosha}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{food.rating}</div>
                      <div className="text-xs text-gray-500">Effectiveness</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Additional Powerful Features
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Everything you need to run a successful modern Ayurvedic practice
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} text-white text-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {feature.stat}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Seamless Integration
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Works with your existing workflow and systems
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} text-white text-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.85), rgba(5, 150, 105, 0.85)), url('https://media.istockphoto.com/id/1301830934/photo/healthy-gut.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZJeKhFq0po1BcbUO2sjnTuSsWVv6fHbzizg4BQT73Ko=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience All Features with Free Trial
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Try AyurDietPro risk-free for 14 days and see how it transforms your practice
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/free-trial"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="bg-transparent hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
          
          <p className="text-green-200 text-sm">
            No credit card required • Full feature access • Expert support included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-2xl font-bold text-green-400 mb-4">VedaDiet</h3>
              <p className="text-gray-400 mb-4">
                Empowering Ayurvedic practitioners with intelligent technology to provide personalized, authentic healthcare solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-green-400 transition-colors duration-300">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-green-400 transition-colors duration-300">Pricing</Link></li>
                <li><Link to="/demo" className="hover:text-green-400 transition-colors duration-300">Demo</Link></li>
                <li><Link to="/free-trial" className="hover:text-green-400 transition-colors duration-300">Free Trial</Link></li>
                <li><Link to="/integrations" className="hover:text-green-400 transition-colors duration-300">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-green-400 transition-colors duration-300">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition-colors duration-300">Contact Us</Link></li>
                <li><Link to="/training" className="hover:text-green-400 transition-colors duration-300">Training</Link></li>
                <li><Link to="/api" className="hover:text-green-400 transition-colors duration-300">API Documentation</Link></li>
                <li><Link to="/status" className="hover:text-green-400 transition-colors duration-300">System Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">support@ayurdietpro.com</li>
                <li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">+1 (555) 123-4567</li>
                <li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p>&copy; 2024 AyurDietPro. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <Link to="/privacy" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-green-400 transition-colors duration-300">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-green-400 transition-colors duration-300">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;