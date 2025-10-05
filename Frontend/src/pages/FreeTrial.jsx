import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceName: '',
    practiceType: '',
    numberOfPatients: '',
    currentSystem: '',
    goals: '',
    plan: 'Professional'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const practiceTypes = [
    'Individual Practitioner',
    'Small Clinic (2-5 practitioners)',
    'Large Clinic (6+ practitioners)',
    'Hospital/Institution',
    'Wellness Center',
    'Other'
  ];

  const patientRanges = [
    '1-50 patients',
    '51-200 patients',
    '201-500 patients',
    '501-1000 patients',
    '1000+ patients'
  ];

  const currentSystems = [
    'Paper-based system',
    'Basic EMR',
    'Advanced EMR',
    'Other Ayurvedic software',
    'No system currently'
  ];

  const goals = [
    'Digitalize patient records',
    'Improve treatment outcomes',
    'Save time on diet planning',
    'Expand practice reach',
    'Modernize Ayurvedic practice',
    'All of the above'
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$49',
      period: 'month',
      description: 'Perfect for individual practitioners',
      features: ['Up to 50 patients', 'Basic dosha analysis', '1000+ food database', 'Email support'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'month',
      description: 'Ideal for established practitioners',
      features: ['Up to 200 patients', 'Advanced AI analysis', 'Full 8000+ food database', 'Priority support'],
      color: 'from-green-500 to-emerald-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: 'month',
      description: 'For clinics & institutions',
      features: ['Unlimited patients', 'Advanced AI analysis', 'Full food database', '24/7 priority support'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const steps = [
    { number: 1, title: 'Choose Plan', description: 'Select your perfect plan' },
    { number: 2, title: 'Practice Info', description: 'Tell us about your practice' },
    { number: 3, title: 'Account Setup', description: 'Create your account' },
    { number: 4, title: 'Get Started', description: 'Start your journey' }
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI Dosha Analysis',
      description: 'Advanced constitutional assessment using machine learning'
    },
    {
      icon: '🍎',
      title: '8000+ Foods Database',
      description: 'Comprehensive Ayurvedic food properties and recommendations'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor patient progress with detailed analytics'
    },
    {
      icon: '👨‍⚕️',
      title: 'Expert Support',
      description: 'Access to certified Ayurvedic practitioners'
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'Access your practice anywhere, anytime'
    },
    {
      icon: '🔒',
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security for patient data'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
              ✅
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to VedaDiet! 🎉</h2>
            <p className="text-gray-600 mb-6">
              Your 14-day free trial has been activated! Check your email for login details and next steps.
            </p>
            <div className="space-y-4">
              <Link
                to="/features"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Features
              </Link>
              <Link
                to="/demo"
                className="block w-full bg-transparent border-2 border-green-500 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
              >
                Schedule Demo
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
      <div className="bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your 14-Day Free Trial</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Experience the power of AI-driven Ayurvedic nutrition. No credit card required.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-500 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {step.number}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`font-semibold ${
                    currentStep >= step.number ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-green-500' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Plan Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {plans.map((plan, index) => (
                        <div
                          key={index}
                          className={`relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                            formData.plan === plan.name
                              ? 'border-green-500 ring-4 ring-green-200'
                              : 'border-gray-200 hover:border-green-300'
                          } ${plan.popular ? 'ring-4 ring-green-200' : ''}`}
                          onClick={() => setFormData(prev => ({ ...prev, plan: plan.name }))}
                        >
                          {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                Most Popular
                              </span>
                            </div>
                          )}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} text-white text-lg flex items-center justify-center mb-4`}>
                            {plan.name.charAt(0)}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                          <div className="flex items-baseline mb-4">
                            <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                            <span className="text-gray-600 ml-1">/{plan.period}</span>
                          </div>
                          <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                          <ul className="space-y-2">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <span className="text-green-500 mr-2">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Practice Information */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">About Your Practice</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Practice Type *
                        </label>
                        <select
                          name="practiceType"
                          value={formData.practiceType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                        >
                          <option value="">Select practice type</option>
                          {practiceTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Number of Patients *
                        </label>
                        <select
                          name="numberOfPatients"
                          value={formData.numberOfPatients}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                        >
                          <option value="">Select patient range</option>
                          {patientRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current System *
                      </label>
                      <select
                        name="currentSystem"
                        value={formData.currentSystem}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                      >
                        <option value="">Select current system</option>
                        {currentSystems.map((system, index) => (
                          <option key={index} value={system}>{system}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Primary Goals *
                      </label>
                      <select
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                      >
                        <option value="">Select primary goal</option>
                        {goals.map((goal, index) => (
                          <option key={index} value={goal}>{goal}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Account Setup */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h2>
                    
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          Practice Name *
                        </label>
                        <input
                          type="text"
                          name="practiceName"
                          value={formData.practiceName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                          placeholder="Your Clinic Name"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Review & Start Your Trial</h2>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Trial Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Selected Plan:</span>
                          <span className="font-semibold text-gray-800">{formData.plan}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Practice Type:</span>
                          <span className="font-semibold text-gray-800">{formData.practiceType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Patient Range:</span>
                          <span className="font-semibold text-gray-800">{formData.numberOfPatients}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Primary Goal:</span>
                          <span className="font-semibold text-gray-800">{formData.goals}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                      <h4 className="font-semibold text-yellow-800 mb-2">What's Included in Your Trial:</h4>
                      <ul className="text-yellow-700 space-y-1">
                        <li>✓ Full access to all {formData.plan} plan features</li>
                        <li>✓ 14 days completely free</li>
                        <li>✓ No credit card required</li>
                        <li>✓ Expert onboarding support</li>
                        <li>✓ Data migration assistance (if needed)</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      currentStep === 1
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transform hover:scale-105'
                    }`}
                  >
                    Previous
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Start My Free Trial 🚀
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar - Features & Benefits */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Trial Benefits */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Start Your Trial?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      ⭐
                    </div>
                    <span className="text-gray-700">Full feature access for 14 days</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                      💳
                    </div>
                    <span className="text-gray-700">No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3">
                      🎯
                    </div>
                    <span className="text-gray-700">Personalized onboarding</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3">
                      📞
                    </div>
                    <span className="text-gray-700">Priority support during trial</span>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What You'll Get</h3>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-300">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <div className="text-sm font-semibold text-gray-800">{feature.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Info */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Our team is here to help you get started and make the most of your trial.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2">📧</span>
                    support@ayurdietpro.com
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2">📞</span>
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2">💬</span>
                    Live chat available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;