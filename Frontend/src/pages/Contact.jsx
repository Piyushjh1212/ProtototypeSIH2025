import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    inquiryType: 'General Inquiry',
    fullName: '',
    email: '',
    clinicName: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      type: 'Email',
      details: ['support@ayurdietpro.com', 'sales@ayurdietpro.com'],
      icon: '📧',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:support@ayurdietpro.com'
    },
    {
      type: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      icon: '📞',
      color: 'from-green-500 to-emerald-500',
      link: 'tel:+15551234567'
    },
    {
      type: 'Address',
      details: ['123 Health Tech Plaza', 'San Francisco, CA 94105'],
      icon: '📍',
      color: 'from-purple-500 to-indigo-500',
      link: 'https://maps.google.com'
    },
    {
      type: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM PST', 'Saturday: 10:00 AM - 4:00 PM PST'],
      icon: '🕒',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const immediateHelp = [
    {
      title: 'Schedule Demo Call',
      description: 'Get a personalized walkthrough of our platform',
      icon: '🎯',
      color: 'from-green-500 to-emerald-600',
      link: '/demo'
    },
    {
      title: 'Live Chat Support',
      description: 'Instant help from our support team',
      icon: '💬',
      color: 'from-blue-500 to-cyan-600',
      action: () => console.log('Open chat')
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get started with AyurDietPro?',
      answer: 'You can start using AyurDietPro immediately after signing up. Our onboarding process takes less than 15 minutes, and you\'ll have access to all features during your 14-day free trial.'
    },
    {
      question: 'Do you provide training and support?',
      answer: 'Yes! We offer comprehensive training materials, video tutorials, and dedicated support to help you get the most out of AyurDietPro. Our support team is available via email, chat, and phone.'
    },
    {
      question: 'Can AyurDietPro integrate with my existing systems?',
      answer: 'AyurDietPro offers API access and can integrate with most EMR systems. Our technical team can help you set up custom integrations based on your specific needs.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all plans with full access to all features. No credit card required to start.'
    },
    {
      question: 'How secure is my patient data?',
      answer: 'We are HIPAA compliant and use enterprise-grade security measures including encryption, secure servers, and regular security audits to protect all patient data.'
    }
  ];

  const inquiryTypes = [
    'General Inquiry',
    'Sales Question',
    'Technical Support',
    'Partnership',
    'Feature Request',
    'Billing Question'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      inquiryType: 'General Inquiry',
      fullName: '',
      email: '',
      clinicName: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500 rounded-full -translate-y-36 translate-x-36 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full translate-y-48 -translate-x-48 opacity-20 animate-bounce"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-green-100 animate-fade-in-up delay-200">
            Have questions about AyurDietPro? We're here to help you transform your practice
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Info & Immediate Help */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 transform hover:scale-105"
                      onClick={() => info.link && window.open(info.link, '_blank')}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} text-white text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg mb-1">{info.type}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immediate Help */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  {immediateHelp.map((help, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r ${help.color} text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
                      onClick={help.action || (() => window.location.href = help.link)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                          {help.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{help.title}</div>
                          <div className="text-green-100 text-sm opacity-90">{help.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Inquiry Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, inquiryType: type }))}
                          className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            formData.inquiryType === type
                              ? 'border-green-500 bg-green-50 text-green-700 shadow-md'
                              : 'border-gray-300 text-gray-700 hover:border-green-300 hover:bg-green-50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
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

                  {/* Clinic & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Clinic/Practice Name
                      </label>
                      <input
                        type="text"
                        name="clinicName"
                        value={formData.clinicName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                        placeholder="Your clinic name"
                      />
                    </div>
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
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                    <div className="text-right text-sm text-gray-500 mt-2">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Quick answers to common questions
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-5">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-green-100 mb-6">
                Our support team is ready to help you get the answers you need.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  📞 Call Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  💬 Start Live Chat
                </button>
              </div>
            </div>
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

export default Contact;