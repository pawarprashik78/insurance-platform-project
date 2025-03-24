import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTasks, faChartPie, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const AuthUser = () =>{
    return (
<div className="bg-gray-50">
<div className="min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full mx-4">
      {/* Tabs */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-lg bg-gray-200 p-1">
          <button className="px-4 py-2 rounded-lg bg-white text-blue-600 font-medium shadow">
            User
          </button>
          <button className="px-4 py-2 rounded-lg text-gray-600 font-medium hover:text-blue-600">
            Insurance Company
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Login Form */}
          <div className="p-8">
            <div className="flex items-center mb-8">
              <i className="fas fa-shield-alt text-blue-600 text-2xl mr-2" />
              <a href="index.html" className="text-xl font-bold text-gray-800">
                InsureHub
              </a>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Welcome Back!
            </h2>
            {/* Login Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                onclick="window.location.href='dashboard.html'"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">
                Don't have an account?
                <button
                  onclick="toggleForms()"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
          {/* Right Side - Register Form */}
          <div className="bg-blue-600 p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Create Account</h2>
            {/* Register Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-blue-500 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-blue-500 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-blue-500 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-blue-500 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm">
                  I agree to the Terms and Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                onclick="window.location.href='onboarding.html'"
                className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Create Account
              </button>
            </form>
            <div className="mt-6">
              <p className="text-center text-sm">
                Already have an account?
                <button
                  onclick="toggleForms()"
                  className="text-white hover:text-blue-200 font-semibold"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    );
};
export default AuthUser;