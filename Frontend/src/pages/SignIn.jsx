import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user came from pricing page with a selected plan
    if (location.state?.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan);
      setIsLogin(false); // Switch to signup if they selected a plan
    }
  }, [location]);

  const plans = [
    { 
      name: 'Basic', 
      price: '$49/month',
      features: ['50 patients', 'Basic features', 'Email support'],
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Professional', 
      price: '$99/month',
      features: ['200 patients', 'AI Analysis', 'Priority support'],
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Enterprise', 
      price: '$199/month',
      features: ['Unlimited patients', 'Full features', '24/7 support'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const socialLogins = [
    {
      name: 'Google',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
      color: 'hover:bg-gray-50 border-gray-300'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:bg-blue-50 border-blue-200'
    },
    {
      name: 'Apple',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      color: 'hover:bg-black hover:text-white border-gray-300'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    // Handle successful login/signup
    console.log('Form submitted');
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    // Simulate social login process
    setTimeout(() => {
      setIsLoading(false);
      console.log(`Logging in with ${provider}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-3xl">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <span className="text-2xl text-white font-bold">V</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Welcome Back' : 'Join VedaDiet'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-green-600 hover:text-green-500 transition-colors duration-300"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        {/* Plan Selection Banner */}
        {!isLogin && selectedPlan && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl text-center animate-pulse shadow-lg">
            <p className="font-semibold">🎉 Starting your free trial with {selectedPlan} plan!</p>
            <p className="text-sm opacity-90 mt-1">14 days free • No credit card required</p>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Name Fields for Signup */}
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="relative block w-full px-4 py-3 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="relative block w-full px-4 py-3 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="Last Name"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-4 py-3 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              placeholder="Email address"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full px-4 py-3 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              placeholder="Password"
            />
          </div>

          {/* Plan Selection for Signup */}
          {!isLogin && (
            <div className="animate-fade-in">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Your Plan
              </label>
              <div className="space-y-3">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      selectedPlan === plan.name
                        ? 'border-green-500 bg-green-50 ring-4 ring-green-200 shadow-lg'
                        : 'border-gray-300 hover:border-green-300 hover:bg-green-50'
                    }`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-300 ${
                      selectedPlan === plan.name
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-400'
                    }`}>
                      {selectedPlan === plan.name && (
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-gray-900">{plan.name}</div>
                        <div className="text-sm font-bold text-green-600">{plan.price}</div>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {plan.features.join(' • ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Remember Me & Forgot Password for Login */}
          {isLogin && (
            <div className="flex items-center justify-between animate-fade-in">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition-all duration-300"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500 transition-colors duration-300">
                  Forgot your password?
                </a>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {isLogin ? 'Signing in...' : 'Creating account...'}
                </div>
              ) : (
                <div className="flex items-center">
                  {isLogin ? 'Sign in' : 'Start Free Trial'}
                  <span className="ml-2">🚀</span>
                </div>
              )}
            </button>
          </div>

          {/* Terms for Signup */}
          {!isLogin && (
            <p className="text-xs text-center text-gray-600 animate-fade-in">
              By signing up, you agree to our{' '}
              <Link to="/terms" className="font-medium text-green-600 hover:text-green-500 transition-colors duration-300">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-green-600 hover:text-green-500 transition-colors duration-300">
                Privacy Policy
              </Link>
            </p>
          )}
        </form>

        {/* Social Login Section */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {socialLogins.map((social) => (
              <button
                key={social.name}
                onClick={() => handleSocialLogin(social.name)}
                disabled={isLoading}
                className={`w-full inline-flex justify-center items-center py-3 px-4 border-2 rounded-xl bg-white text-sm font-medium text-gray-700 transition-all duration-300 transform hover:scale-105 shadow-sm ${social.color} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
              >
                <span className="mr-3">{social.icon}</span>
                Continue with {social.name}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-green-600">Secure & HIPAA Compliant</span>
              <br />
              Your data is protected with enterprise-grade security
            </p>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-green-500 rounded-full opacity-10 animate-float"></div>
      <div className="fixed top-20 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-float delay-1000"></div>
      <div className="fixed bottom-20 left-20 w-12 h-12 bg-purple-500 rounded-full opacity-10 animate-float delay-2000"></div>
    </div>
  );
};

export default SignIn;