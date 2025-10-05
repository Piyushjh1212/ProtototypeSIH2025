import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    attendees: '1',
    goals: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const demoFeatures = [
    {
      icon: '🤖',
      title: 'AI Dosha Analysis',
      description: 'See how our AI analyzes constitutional types and provides personalized recommendations',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: '🍎',
      title: 'Food Database',
      description: 'Explore our 8000+ Ayurvedic foods database with detailed properties',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📊',
      title: 'Patient Management',
      description: 'Experience our comprehensive patient tracking and progress monitoring',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'See the mobile experience for both practitioners and patients',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: '🔍',
      title: 'Advanced Analytics',
      description: 'Discover practice insights and treatment outcome measurements',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: '🔄',
      title: 'Integration Demo',
      description: 'Learn about EMR integration and API capabilities',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const availableSlots = [
    { date: '2024-01-15', times: ['10:00 AM', '2:00 PM', '4:30 PM'] },
    { date: '2024-01-16', times: ['9:00 AM', '11:30 AM', '3:00 PM'] },
    { date: '2024-01-17', times: ['10:30 AM', '1:00 PM', '5:00 PM'] },
    { date: '2024-01-18', times: ['8:30 AM', '12:00 PM', '4:00 PM'] },
    { date: '2024-01-19', times: ['9:30 AM', '2:30 PM', '6:00 PM'] }
  ];

  const demoTypes = [
    {
      type: 'Individual Walkthrough',
      duration: '30 minutes',
      description: 'Personalized demo focused on your specific needs',
      bestFor: 'Individual practitioners',
      icon: '👤'
    },
    {
      type: 'Group Presentation',
      duration: '45 minutes',
      description: 'Comprehensive platform overview for teams',
      bestFor: 'Clinics & institutions',
      icon: '👥'
    },
    {
      type: 'Technical Deep Dive',
      duration: '60 minutes',
      description: 'In-depth technical features and integration capabilities',
      bestFor: 'IT teams & developers',
      icon: '⚙️'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Ayurvedic Practitioner',
      practice: 'Wellness Center, Delhi',
      content: 'The demo completely changed how I view technology in Ayurveda. The AI analysis is incredibly accurate!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Clinic Director',
      practice: 'AyurCare Clinic, Mumbai',
      content: 'Our practice efficiency improved by 60% after implementing VedaDiet. The demo showed us exactly how.',
      rating: 5
    },
    {
      name: 'Dr. Meera Patel',
      role: 'Nutrition Specialist',
      practice: 'Health Harmony, Bangalore',
      content: 'The food database and patient tracking features are revolutionary for Ayurvedic practice management.',
      rating: 5
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 2000);
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
              📅
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Demo Scheduled! 🎉</h2>
            <p className="text-gray-600 mb-4">
              Thank you, <strong>{formData.name}</strong>! Your demo has been scheduled successfully.
            </p>
            <div className="bg-green-50 rounded-xl p-4 mb-6">
              <p className="text-green-800 font-semibold">
                {selectedDate} at {selectedTime}
              </p>
              <p className="text-green-600 text-sm mt-1">
                Calendar invitation sent to {formData.email}
              </p>
            </div>
            <p className="text-gray-600 mb-6">
              Our team will contact you shortly to confirm details. In the meantime, explore our resources:
            </p>
            <div className="space-y-3">
              <Link
                to="/features"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Features
              </Link>
              <Link
                to="/free-trial"
                className="block w-full bg-transparent border-2 border-green-500 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Personalized Demo</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            See VedaDiet in action and discover how AI-powered Ayurvedic nutrition can transform your practice
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">30-60 minutes</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">Live Platform Walkthrough</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">Q&A with Experts</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">No Commitment Required</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'schedule'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📅 Schedule Demo
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'features'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🚀 See Features
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              💬 Testimonials
            </button>
          </div>
        </div>

        {/* Schedule Demo Tab */}
        {activeTab === 'schedule' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
            {/* Demo Types */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Demo Types</h3>
                <div className="space-y-4">
                  {demoTypes.map((demo, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 rounded-xl p-4 hover:border-green-300 hover:bg-green-50 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{demo.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 group-hover:text-green-700">
                            {demo.type}
                          </h4>
                          <p className="text-sm text-gray-600">{demo.duration}</p>
                          <p className="text-xs text-gray-500 mt-1">{demo.description}</p>
                          <p className="text-xs text-green-600 font-semibold mt-2">
                            Best for: {demo.bestFor}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Live platform walkthrough
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Personalized use case discussion
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Q&A with product experts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Pricing & implementation guidance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Free trial setup assistance
                  </li>
                </ul>
              </div>
            </div>

            {/* Scheduling Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your Demo</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Date & Time Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Date & Time</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Date Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Available Dates
                        </label>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {availableSlots.map((slot, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSelectedDate(slot.date)}
                              className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-300 ${
                                selectedDate === slot.date
                                  ? 'border-green-500 bg-green-50 text-green-700'
                                  : 'border-gray-200 hover:border-green-300'
                              }`}
                            >
                              <div className="font-semibold">
                                {new Date(slot.date).toLocaleDateString('en-US', { 
                                  weekday: 'long', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </div>
                              <div className="text-sm text-gray-600">
                                {slot.times.length} slots available
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Available Times
                        </label>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {selectedDate && availableSlots.find(slot => slot.date === selectedDate)?.times.map((time, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-300 ${
                                selectedTime === time
                                  ? 'border-green-500 bg-green-50 text-green-700'
                                  : 'border-gray-200 hover:border-green-300'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                          placeholder="Dr. Your Name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Practice/Organization *
                        </label>
                        <input
                          type="text"
                          name="practice"
                          value={formData.practice}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                          placeholder="Your Clinic Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Number of Attendees
                        </label>
                        <select
                          name="attendees"
                          value={formData.attendees}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Primary Interest/Goal
                        </label>
                        <input
                          type="text"
                          name="goals"
                          value={formData.goals}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                          placeholder="e.g., Patient management, Diet planning"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Specific Questions or Topics
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                        placeholder="What specific features would you like to see during the demo?"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Schedule Demo Session
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Platform Features Overview</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make VedaDiet the leading AI-powered Ayurvedic platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {demoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to See These Features in Action?</h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Book a demo to get a personalized walkthrough of how these features can benefit your specific practice needs.
              </p>
              <button
                onClick={() => setActiveTab('schedule')}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo Now
              </button>
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Practitioners Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from Ayurvedic professionals who transformed their practice with VedaDiet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.practice}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600">Demo Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                  <div className="text-gray-600">Convert to Paid Plans</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                  <div className="text-gray-600">Average Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Demos Conducted</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-green-100 mb-6">
            Our team is here to help you make the right decision for your practice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </Link>
            <Link
              to="/free-trial"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;