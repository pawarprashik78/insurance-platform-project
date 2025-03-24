import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTasks, faChartPie, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//import '../App.css';


const App = () => {
  return (
    <div className="bg-gray-50 w-full">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-2xl mr-2" />
                <span className="text-xl font-bold text-gray-800">InsureHub</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 px-3 py-2">How It Works</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2">For Companies</a>
              <a href="/user-login" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-4 py-2 rounded-lg border border-blue-600 transition duration-300">Login</a>
              <a href="/user-register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">Register</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Manage All Your 
                <span className="text-blue-600">Insurance Policies</span>
                in One Place
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Simplify your insurance management with InsureHub. Track all your policies, renewals, and expenses in a single dashboard.
              </p>
              <div className="mt-8 flex space-x-4">
                <a href="/user-register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Get Started
                </a>
                <button className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold border border-gray-300 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <div className="w-full rounded-xl bg-white shadow-xl p-8 transform hover:scale-105 transition duration-300">
                  <div className="flex items-center mb-6">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-3xl mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Policy Dashboard</h3>
                      <p className="text-gray-600">All your insurance policies in one view</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Health Insurance</p>
                        <p className="font-semibold">Family Coverage Plan</p>
                      </div>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Car Insurance</p>
                        <p className="font-semibold">Comprehensive Cover</p>
                      </div>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to manage your insurance portfolio effectively
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faTasks} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Policy Management</h3>
              <p className="mt-4 text-gray-600">
                Add and track all your insurance policies in one place. Get timely renewal reminders and policy updates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faChartPie} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Expense Analytics</h3>
              <p className="mt-4 text-gray-600">
                Track your insurance spending with detailed analytics. Generate monthly and yearly tax reports easily.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faShoppingCart} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Policy Marketplace</h3>
              <p className="mt-4 text-gray-600">
                Browse and compare insurance policies from different providers. Find the best coverage for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get started with InsureHub in three simple steps
            </p>
          </div>
          </div>

          {/* How It Works Steps */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-sign-in-alt text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sign Up</h3>
              <p className="mt-4 text-gray-600">
                Create your InsureHub account with simple sign-up steps. Start managing your policies in no time.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cloud-upload-alt text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Upload Policies</h3>
              <p className="mt-4 text-gray-600">
                Add your existing policies to InsureHub. Our platform supports a wide range of insurance providers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Manage & Track</h3>
              <p className="mt-4 text-gray-600">
                Use our dashboard to keep track of your insurance policies, get reminders, and view analytics.
              </p>
            </div>
            </div>
      </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-400 text-2xl mr-2" />
                <span className="text-xl font-bold">InsureHub</span>
              </div>
              <p className="mt-4 text-gray-400">
                Your complete insurance management solution
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 InsureHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
