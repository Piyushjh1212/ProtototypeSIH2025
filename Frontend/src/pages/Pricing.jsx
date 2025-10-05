import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const [annualBilling, setAnnualBilling] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for individual practitioners starting their digital journey",
      monthlyPrice: 49,
      annualPrice: 41,
      popular: false,
      color: "from-blue-500 to-cyan-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      features: [
        { name: "Up to 50 patients", included: true },
        { name: "Basic dosha analysis", included: true },
        { name: "1000+ food database items", included: true },
        { name: "Standard diet chart templates", included: true },
        { name: "Basic reporting", included: true },
        { name: "Email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Custom branding", included: false },
        { name: "API access", included: false },
        { name: "Priority support", included: false },
        { name: "Multi-practitioner access", included: false }
      ]
    },
    {
      name: "Professional",
      description: "Ideal for established practitioners and small clinics",
      monthlyPrice: 99,
      annualPrice: 83,
      popular: true,
      color: "from-green-500 to-emerald-500",
      buttonColor: "bg-green-600 hover:bg-green-700",
      features: [
        { name: "Up to 200 patients", included: true },
        { name: "Advanced AI dosha analysis", included: true },
        { name: "Full 8000+ food database", included: true },
        { name: "Personalized diet chart generator", included: true },
        { name: "Advanced reporting & analytics", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Mobile app access", included: true },
        { name: "Custom branding", included: true },
        { name: "Patient portal access", included: true },
        { name: "Appointment scheduling", included: true },
        { name: "API access", included: true },
        { name: "Multi-practitioner access (up to 3)", included: true }
      ]
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large clinics and healthcare institutions",
      monthlyPrice: 199,
      annualPrice: 166,
      popular: false,
      color: "from-purple-500 to-indigo-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        { name: "Unlimited patients", included: true },
        { name: "Advanced AI dosha analysis", included: true },
        { name: "Full 8000+ food database", included: true },
        { name: "Personalized diet chart generator", included: true },
        { name: "Advanced reporting & analytics", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Mobile app access", included: true },
        { name: "Full custom branding", included: true },
        { name: "Patient portal access", included: true },
        { name: "Advanced appointment scheduling", included: true },
        { name: "Full API access", included: true },
        { name: "Unlimited practitioners", included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial for all plans. No credit card required to start your trial."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is my patient data secure?",
      answer: "Yes, we are HIPAA compliant and use enterprise-grade security measures to protect all patient data."
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes, we provide comprehensive onboarding, training materials, and ongoing support to ensure you get the most out of AyurDietPro."
    },
    {
      question: "Can I integrate with my existing EMR system?",
      answer: "Yes, our Professional and Enterprise plans include API access for seamless integration with most EMR systems."
    }
  ];

  const handleStartFreeTrial = (planName) => {
    // Navigate to signup page with plan information
    navigate('/signin', { state: { selectedPlan: planName } });
  };

  const handleContactSales = () => {
    navigate('/contact');
  };

  const savings = annualBilling ? "Save 17%" : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500 rounded-full -translate-y-36 translate-x-36 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full translate-y-48 -translate-x-48 opacity-20 animate-bounce"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 animate-fade-in-up delay-200">
            Choose the perfect plan for your practice. Start with a 14-day free trial, no credit card required.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                !annualBilling 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                annualBilling 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Annual Billing
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 ${
                  plan.popular ? 'ring-4 ring-green-200 scale-105' : 'hover:shadow-2xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-800">
                        ${annualBilling ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    {annualBilling && (
                      <div className="text-green-600 font-semibold mt-1">
                        Billed annually (${plan.annualPrice * 12})
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleStartFreeTrial(plan.name)}
                    className={`w-full ${plan.buttonColor} text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6`}
                  >
                    Start Free Trial
                  </button>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trial Info */}
          <div className="text-center mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              💫 All plans include 14-day free trial • No setup fees • Cancel anytime
            </p>
            <p className="text-gray-600">
              Need a custom solution?{' '}
              <button 
                onClick={handleContactSales}
                className="text-green-600 hover:text-green-700 font-semibold underline transition-colors duration-300"
              >
                Contact our sales team
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Compare Plans
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Detailed feature comparison to help you choose the right plan
          </p>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="text-left p-6 font-semibold text-gray-800">Features</th>
                    <th className="text-center p-6 font-semibold text-gray-800">Basic</th>
                    <th className="text-center p-6 font-semibold text-gray-800">Professional</th>
                    <th className="text-center p-6 font-semibold text-gray-800">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {plans[0].features.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-6 font-medium text-gray-700">{feature.name}</td>
                      <td className="text-center p-6">
                        {plans[0].features[index].included ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </td>
                      <td className="text-center p-6">
                        {plans[1].features[index].included ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </td>
                      <td className="text-center p-6">
                        {plans[2].features[index].included ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            Get answers to common questions about our pricing and plans
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join hundreds of practitioners who trust AyurDietPro for their practice management
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => handleStartFreeTrial("Professional")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </button>
            <button
              onClick={handleContactSales}
              className="bg-transparent hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </button>
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

export default Pricing;