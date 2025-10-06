import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const stats = [
    { number: "10,000+", label: "Ayurvedic Foods", animation: "animate-bounce" },
    { number: "50+", label: "Expert Doctors", animation: "animate-pulse" },
    { number: "25,000+", label: "Happy Users", animation: "animate-bounce" },
    { number: "95%", label: "Success Rate", animation: "animate-pulse" }
  ];

  const superfoods = [
    {
      name: "Amalaki",
      commonName: "Amla",
      description: "Rich in Vitamin C, boosts immunity, balances all three doshas",
      properties: {
        rasa: "Sour, Sweet, Bitter, Pungent, Astringent",
        virya: "Cooling",
        vipaka: "Sweet",
        dosha: "Balances Vata, Pitta, Kapha"
      },
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Ghrita",
      commonName: "Ghee",
      description: "Enhances digestion, nourishes tissues, improves memory",
      properties: {
        rasa: "Sweet",
        virya: "Cooling",
        vipaka: "Sweet",
        dosha: "Balances Vata, Pitta"
      },
      color: "from-yellow-500 to-amber-600"
    },
    {
      name: "Haridra",
      commonName: "Turmeric",
      description: "Anti-inflammatory, purifies blood, enhances complexion",
      properties: {
        rasa: "Bitter, Pungent",
        virya: "Heating",
        vipaka: "Pungent",
        dosha: "Balances Kapha, Vata"
      },
      color: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    {
      step: "1",
      title: "Discover Your Prakriti",
      description: "Take our comprehensive Ayurvedic assessment to determine your unique constitution (Vata, Pitta, or Kapha)",
      icon: "🧘",
      color: "from-purple-500 to-indigo-600"
    },
    {
      step: "2",
      title: "Get AI-Powered Recommendations",
      description: "Our AI analyzes your constitution, health goals, and preferences to suggest personalized foods and meal plans",
      icon: "🤖",
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: "3",
      title: "Track Your Progress",
      description: "Monitor your health improvements and get ongoing support from our AI chatbot and expert doctors",
      icon: "📊",
      color: "from-green-500 to-teal-600"
    }
  ];

  const benefits = [
    {
      title: "Scientifically Validated",
      description: "Our recommendations are based on 5000-years of Ayurvedic wisdom validated by modern nutritional science",
      icon: "🔬",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Personalized Approach",
      description: "Every recommendation is tailored to your unique constitution, health goals, and lifestyle preferences",
      icon: "🎯",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Expert Guidance",
      description: "Access to certified Ayurvedic doctors and nutritionists for professional consultation and support",
      icon: "👨‍⚕️",
      color: "from-orange-500 to-red-600"
    }
  ];

  // Chatbot responses
  const botResponses = {
    'hi': "Hello! I'm VedaDiet AI Assistant 🍃. I can help you learn about Ayurvedic nutrition, dosha types, and how VedaDiet can transform your health journey. What would you like to know?",
    'hello': "Namaste! 🙏 I'm your VedaDiet guide. I can tell you about our AI-powered Ayurvedic platform, help you understand your dosha, or answer any questions about personalized nutrition.",
    'what is vedadiet': "VedaDiet is an AI-powered platform that combines 5000+ years of Ayurvedic wisdom with modern technology to provide personalized diet plans based on your unique constitution (Prakriti). We analyze your dosha type and create customized nutritional recommendations!",
    'how does it work': "It's simple! 🎯 1) Take our Ayurvedic assessment to discover your Prakriti 2) Get AI-powered food recommendations 3) Track your progress with our tools 4) Receive ongoing support from experts and AI",
    'what are doshas': "In Ayurveda, doshas are biological energies that govern our physical and mental processes. The three doshas are:\n• Vata (Air + Space) - Creative, energetic\n• Pitta (Fire + Water) - Intelligent, focused\n• Kapha (Earth + Water) - Calm, grounded\nYour unique combination determines your ideal diet!",
    'pricing': "We offer flexible plans:\n• Basic: $49/month - Perfect for individuals\n• Professional: $99/month - For practitioners\n• Enterprise: $199/month - For large clinics\nAll include 14-day FREE trial! 💫",
    'features': "Our key features include:\n🤖 AI Dosha Analysis\n🍎 10,000+ Food Database\n📊 Progress Tracking\n👨‍⚕️ Expert Consultations\n📱 Mobile App Access\n💬 24/7 AI Support\nAnd much more!",
    'thank you': "You're welcome! 🙏 Remember, health is wealth in Ayurveda. Let me know if you need any other information about your wellness journey!",
    'default': "That's an interesting question! 🤔 As an AI focused on Ayurvedic nutrition, I can help you with:\n• Understanding your dosha type\n• Learning about Ayurvedic foods\n• How VedaDiet works\n• Pricing and features\n• Health recommendations\nWhat would you like to explore?"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot typing
    setTimeout(() => {
      const userText = inputMessage.toLowerCase();
      let response = botResponses.default;

      Object.keys(botResponses).forEach(key => {
        if (userText.includes(key)) {
          response = botResponses[key];
        }
      });

      const botMessage = {
        text: response,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What is VedaDiet?",
    "How does it work?",
    "What are doshas?",
    "Tell me about pricing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.85), rgba(5, 150, 105, 0.85)), url('https://media.istockphoto.com/id/812997516/photo/selection-of-healthy-rich-fiber-sources-vegan-food-for-cooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=0oekyfvRbQTbpHoomcyqGTbyA-ps4zrMzyVX6cvLz2U=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            VedaDiet
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 animate-fade-in-up delay-200">
            Ayurveda + AI-Driven Diet Personalization
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-green-200 animate-fade-in-up delay-300">
            Discover your perfect diet based on ancient Ayurvedic wisdom enhanced by modern AI. 
            Get personalized nutrition plans tailored to your unique constitution (Prakriti).
          </p>
          
          <div className="max-w-md mx-auto mb-8 animate-fade-in-up delay-400">
            <div className="bg-white rounded-lg p-1 flex shadow-2xl">
              <input 
                type="text" 
                placeholder="Find foods or plans by Dosha type (Vata, Pitta, Kapha)..." 
                className="flex-1 px-4 py-3 text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up delay-500">
            <Link
              to="/free-trial"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Diet Plan
            </Link>
            <Link
              to="/about"
              className="bg-transparent hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Meet Experts
            </Link>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ask AI Assistant
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-600">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold text-green-200">AI Powered</h3>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-2">🍎</div>
              <h3 className="font-semibold text-green-200">10,000+ Foods</h3>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-2">👨‍⚕️</div>
              <h3 className="font-semibold text-green-200">Expert Doctors</h3>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-amber-500 rounded-full opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-500 rounded-full opacity-25 animate-float delay-2000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`text-3xl md:text-4xl font-bold text-green-800 mb-2 ${stat.animation}`}>
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Superfoods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 animate-fade-in">
            Featured Ayurvedic Superfoods
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover the healing power of traditional foods with complete Ayurvedic properties
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {superfoods.map((food, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group"
              >
                <div className={`h-3 bg-gradient-to-r ${food.color}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{food.name}</h3>
                    <span className="text-lg text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {food.commonName}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {food.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 w-24">Rasa (Taste):</span>
                      <span className="text-gray-600">{food.properties.rasa}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 w-24">Virya (Energy):</span>
                      <span className="text-gray-600">{food.properties.virya}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 w-24">Vipaka (Effect):</span>
                      <span className="text-gray-600">{food.properties.vipaka}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-700 w-24">Dosha Effect:</span>
                      <span className="text-gray-600">{food.properties.dosha}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            How VedaDiet Works
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ancient wisdom meets modern technology for personalized nutrition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} text-white text-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="text-4xl font-bold text-gray-300 mb-4">{feature.step}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
     
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Ayurvedic Journey Today
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Discover your perfect diet plan based on your unique constitution and transform your health naturally
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/free-trial"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </Link>
            <Link
              to="/about"
              className="bg-transparent hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
          
          <p className="text-green-200 text-sm">
            No credit card required • Instant access • Join 25,000+ users
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-2xl font-bold text-green-400 mb-4">VedaDiet</h3>
              <p className="text-gray-400">
                Empowering Ayurvedic practitioners with intelligent technology to provide personalized, authentic healthcare solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-green-400 transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-green-400 transition-colors">Pricing</Link></li>
                <li><Link to="/demo" className="hover:text-green-400 transition-colors">Demo</Link></li>
                <li><Link to="/free-trial" className="hover:text-green-400 transition-colors">Free Trial</Link></li>
                <li><Link to="/integrations" className="hover:text-green-400 transition-colors">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-green-400 transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/training" className="hover:text-green-400 transition-colors">Training</Link></li>
                <li><Link to="/api" className="hover:text-green-400 transition-colors">API Documentation</Link></li>
                <li><Link to="/status" className="hover:text-green-400 transition-colors">System Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@ayurdietpro.com</li>
                <li>7415691266</li>
                <li>Bhopal, M.P,  India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AyurDietPro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
     {isChatOpen && (
  <div className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-96 sm:h-[480px] w-full h-full bg-white rounded-none sm:rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
    {/* Chat Header */}
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-none sm:rounded-t-2xl flex justify-between items-center flex-shrink-0">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold text-sm">
          🤖
        </div>
        <div>
          <h3 className="font-semibold text-sm sm:text-base">VedaDiet AI Assistant</h3>
          <p className="text-green-100 text-xs">Online • Ready to help</p>
        </div>
      </div>
      <button 
        onClick={() => setIsChatOpen(false)}
        className="text-white hover:text-green-200 transition-colors duration-300 text-lg sm:text-base w-6 h-6 flex items-center justify-center"
      >
        ✕
      </button>
    </div>

    {/* Chat Messages */}
    <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 h-full flex flex-col justify-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-3 sm:mb-4">
            🍃
          </div>
          <p className="font-semibold text-sm sm:text-base">Hello! I'm VedaDiet AI</p>
          <p className="text-xs sm:text-sm mt-2 px-4">Ask me about Ayurvedic nutrition, doshas, or how our platform works!</p>
          
          {/* Quick Questions */}
          <div className="mt-4 sm:mt-6 space-y-2 max-w-md mx-auto">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(question)}
                className="block w-full text-left p-2 sm:p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 text-xs sm:text-sm"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] xs:max-w-[90%] sm:max-w-xs lg:max-w-md rounded-2xl p-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-br-none'
                    : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none shadow-sm'
                }`}
              >
                <div className="whitespace-pre-wrap text-sm sm:text-base leading-relaxed">{message.text}</div>
                <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-green-100' : 'text-gray-400'}`}>
                  {message.timestamp}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>

    {/* Chat Input */}
    <div className="p-3 sm:p-4 border-t border-gray-200 bg-white flex-shrink-0">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim()}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 text-sm sm:text-base flex-shrink-0"
        >
          Send
        </button>
      </div>
    </div>
  </div>
)}

      {/* Chatbot Toggle Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce z-40 flex justify-center items-center"
        >
        <span className="text-2xl">
  <img
    src="/Chatbot.png"
    alt="image"
    width="50px"
    height="50px"
    className="invert"
  />
</span>

        </button>
      )}
    </div>
  );
};

export default Home;