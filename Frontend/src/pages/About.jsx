import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: "25,000+", label: "Active Users", animation: "animate-bounce" },
    { number: "10,000+", label: "Ayurvedic Foods", animation: "animate-pulse" },
    { number: "50+", label: "Expert Doctors", animation: "animate-bounce" },
    { number: "95%", label: "User Satisfaction", animation: "animate-pulse" }
  ];

  const journey = [
    {
      year: "2020",
      title: "Vision Born",
      description: "Founded with the mission to digitize Ayurvedic nutrition wisdom",
      icon: "💡",
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2021",
      title: "Research Phase",
      description: "Collaborated with 50+ Ayurvedic experts to build comprehensive food database",
      icon: "🔬",
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2022",
      title: "AI Development",
      description: "Developed proprietary AI algorithms for personalized Ayurvedic recommendations",
      icon: "🤖",
      color: "from-purple-500 to-indigo-500"
    },
    {
      year: "2023",
      title: "Beta Launch",
      description: "Launched beta version with 1,000+ users and achieved 95% satisfaction rate",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Serving 25,000+ users worldwide with 10,000+ validated Ayurvedic foods",
      icon: "🌍",
      color: "from-teal-500 to-blue-500"
    },
    {
      year: "2025",
      title: "AI Practitioner",
      description: "Launched AI Ayurvedic practitioner with advanced diagnostic capabilities",
      icon: "👨‍⚕️",
      color: "from-pink-500 to-rose-500"
    },
    {
      year: "2026",
      title: "Mobile Revolution",
      description: "Mobile app reaches 100,000+ active users with real-time health tracking",
      icon: "📱",
      color: "from-yellow-500 to-amber-500"
    },
    {
      year: "2027",
      title: "Global Certification",
      description: "Became the first AI-powered Ayurvedic platform certified by international health bodies",
      icon: "🏆",
      color: "from-indigo-500 to-purple-500"
    },
    {
      year: "2028",
      title: "Research Institute",
      description: "Established VedaDiet Research Institute for evidence-based Ayurvedic studies",
      icon: "🏛️",
      color: "from-emerald-500 to-green-500"
    },
    {
      year: "2029",
      title: "Million Users",
      description: "Reached 1 million active users across 50+ countries worldwide",
      icon: "👥",
      color: "from-red-500 to-orange-500"
    },
    {
      year: "2030",
      title: "Future Vision",
      description: "Pioneering integration of Ayurveda with genomics and personalized medicine",
      icon: "🔮",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const coreValues = [
    {
      title: "Authenticity",
      description: "We honor traditional Ayurvedic principles while embracing modern technology to enhance ancient wisdom.",
      icon: "🕉️",
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Scientific Rigor",
      description: "Every recommendation is backed by both traditional texts and modern nutritional science validation.",
      icon: "🔬",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Personalization",
      description: "We believe in individual uniqueness - every person deserves a diet plan tailored to their constitution.",
      icon: "🎯",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Accessibility",
      description: "Making authentic Ayurvedic nutrition knowledge accessible to everyone, everywhere through technology.",
      icon: "🌐",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const ayurvedicConcepts = [
    {
      title: "Rasa (Taste)",
      description: "The six tastes that influence our physiology and psychology",
      details: "Sweet (Madhura), Sour (Amla), Salty (Lavana), Pungent (Katu), Bitter (Tikta), Astringent (Kashaya)",
      icon: "👅",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Guna (Qualities)",
      description: "Twenty fundamental qualities that describe all substances",
      details: "Heavy/Light, Cold/Hot, Oily/Dry, Dull/Sharp, Stable/Mobile, Soft/Hard, Non-slimy/Slimy, Smooth/Rough, Minute/Gross, Viscous/Liquid",
      icon: "⚖️",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Virya (Potency)",
      description: "The heating or cooling energy of foods and herbs",
      details: "Ushna (Heating) - Increases Pitta, decreases Vata & Kapha, Sheeta (Cooling) - Increases Vata & Kapha, decreases Pitta",
      icon: "🔥",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Vipaka (Post-digestive Effect)",
      description: "The final taste after complete digestion and metabolism",
      details: "Madhura (Sweet), Amla (Sour), Katu (Pungent) - determines long-term effects on doshas and tissues",
      icon: "🔄",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Prakriti (Constitution)",
      description: "Your unique mind-body constitution determined at conception",
      details: "Vata (Air + Space), Pitta (Fire + Water), Kapha (Earth + Water) - influences dietary needs and health tendencies",
      icon: "🧬",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Vikriti (Current State)",
      description: "Your current state of balance or imbalance",
      details: "Differs from Prakriti due to lifestyle, diet, stress, environment - guides immediate dietary recommendations",
      icon: "⚡",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Rajesh Vaidya",
      role: "Chief Ayurvedic Officer",
      experience: "25+ Years in Ayurveda",
      focus: "Classical Ayurveda & Nutrition",
      background: ["BAMS, MD (Ayurveda)", "Former AIIMS Faculty", "Ayurvedic Research Pioneer"],
      description: "Dr. Vaidya brings 25 years of traditional Ayurvedic practice combined with modern nutritional science to make ancient wisdom accessible through technology.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Priya Sharma",
      role: "AI & Technology Lead",
      experience: "12+ Years in HealthTech",
      focus: "AI in Traditional Medicine",
      background: ["MS Computer Science", "Former Google Health", "AI Healthcare Specialist"],
      description: "Priya leads our AI development, ensuring that technology enhances rather than replaces traditional Ayurvedic wisdom in personalized nutrition.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Dr. Meera Patel",
      role: "Research & Validation Head",
      experience: "15+ Years in Research",
      focus: "Ayurvedic Nutrition Science",
      background: ["PhD in Ayurvedic Medicine", "Published Researcher", "Nutrition Validation Expert"],
      description: "Dr. Patel ensures our platform maintains scientific rigor while honoring traditional Ayurvedic principles through evidence-based research.",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Arjun Kumar",
      role: "Product & User Experience",
      experience: "10+ Years in Product",
      focus: "Healthcare UX & Wellness Apps",
      background: ["MBA Product Management", "Former Wellness Startups", "UX Design Expert"],
      description: "Arjun focuses on creating intuitive experiences that make complex Ayurvedic concepts accessible and actionable for modern users.",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500 rounded-full -translate-y-36 translate-x-36 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full translate-y-48 -translate-x-48 opacity-20 animate-bounce"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            About VedaDiet
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-green-100 animate-fade-in-up delay-200">
            Bringing Ancient Ayurvedic Science into Digital Health
          </p>
          <p className="text-xl md:text-2xl text-green-200 max-w-4xl mx-auto animate-fade-in-up delay-300">
            Combining 5000+ years of traditional wisdom with cutting-edge AI technology to revolutionize personalized nutrition
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-2xl flex items-center justify-center shadow-lg">
                🎯
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                To democratize authentic Ayurvedic nutrition by combining 5000+ years of traditional wisdom with cutting-edge AI technology, making personalized dietary guidance accessible to everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that understanding your unique constitution (Prakriti) and current state (Vikriti) is the key to optimal health through food as medicine.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-2xl flex items-center justify-center shadow-lg">
                🔭
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                To become the global standard for personalized Ayurvedic nutrition, helping millions achieve optimal health through constitutional-based dietary wisdom.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where everyone has access to personalized nutrition that honors both individual uniqueness and the timeless principles of Ayurveda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
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

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            How VedaDiet evolved from vision to reality and our roadmap to 2030
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 to-blue-500 h-full hidden md:block"></div>
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} text-white text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                        <div className="ml-4">
                          <div className="text-2xl font-bold text-gray-800">{item.year}</div>
                          <div className="text-lg font-semibold text-gray-700">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Year Marker */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-lg`}></div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="md:hidden w-full h-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            The principles that guide everything we do at VedaDiet
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${value.color} text-white text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Concepts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Ayurvedic Concepts We Follow
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Understanding the fundamental principles that guide our recommendations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ayurvedicConcepts.map((concept, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${concept.color} text-white text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {concept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{concept.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{concept.description}</p>
                <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">{concept.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Passionate professionals combining Ayurvedic expertise with technological innovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${member.color} text-white text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600"><span className="font-semibold">{member.experience}</span></p>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Focus:</span> {member.focus}</p>
                </div>
                <div className="space-y-1 mb-4">
                  {member.background.map((item, idx) => (
                    <p key={idx} className="text-xs text-gray-500">• {item}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Validation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Research & Validation
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our commitment to scientific rigor and traditional authenticity
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg flex items-center justify-center">
                📚
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Traditional Texts</h3>
              <p className="text-gray-600">
                Our recommendations are rooted in classical Ayurvedic texts including Charaka Samhita, Sushruta Samhita, and Ashtanga Hridaya.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg flex items-center justify-center">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Validation</h3>
              <p className="text-gray-600">
                Every food property is cross-validated with modern nutritional science and peer-reviewed research studies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg flex items-center justify-center">
                👨‍⚕️
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Review</h3>
              <p className="text-gray-600">
                Our database is continuously reviewed by certified Ayurvedic practitioners and modern nutritionists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Be part of the movement to make authentic Ayurvedic nutrition accessible to everyone
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/free-trial"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
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

export default About;