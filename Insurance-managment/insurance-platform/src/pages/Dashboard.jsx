import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
  const [policies, setPolicies] = useState([]);
  const [error, setError] = useState("");
  const aadhaar= localStorage.getItem("userAadhaar") || ""; // Fetch from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!aadhaar) {
      setError("User Aadhaar not found. Please log in again.");
      return;
    }
    const fetchPolicies = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/policies/user-policies/${aadhaar}`);

        setPolicies(response.data);
      } catch (err) {
        setError("Failed to fetch policies. Please try again.");
      }
    };
    fetchPolicies();
  }, []);
   
  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="index.html" className="flex items-center">
            <i className="fas fa-shield-alt text-blue-600 text-2xl mr-2" />
            <span className="text-xl font-bold text-gray-800">InsureHub</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600">
            <i className="fas fa-bell text-xl" />
          </button>
          <div className="relative">
          <a href='/profile' className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
            <i className="fas fa-chevron-down text-sm" />
          </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div className="flex pt-16">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)] fixed">
      <div className="p-4">
        <nav className="space-y-2">
          <a
            href="/dashboard"
            className="flex items-center space-x-2 px-4 py-2.5 text-blue-600 bg-blue-50 rounded-lg"
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Dashboard</span>
          </a>
          <a
            href="/my-policy"
            className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-file-alt" />
            <span>My Policies</span>
          </a>
          <a
            href="/buy-new-policy"
            className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-shopping-cart" />
            <span>Buy Policy</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-chart-pie" />
            <span>Expenses</span>
          </a>
          <a
            href="/tax-report"
            className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-file-invoice-dollar" />
            <span>Tax Reports</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-cog" />
            <span>Settings</span>
          </a>
          <hr className="my-4" />
          <a
            href="/user-login"
            className="flex items-center space-x-2 px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-lg"
          >
            <i className="fas fa-sign-out-alt" />
            <span>Logout</span>
          </a>
        </nav>
      </div>
    </aside>
    {/* Main Content */}
    <main className="ml-64 flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-600">
            Welcome back, John! Here's your insurance summary.
          </p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Policies</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-file-alt text-blue-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Policies</p>
                <p className="text-2xl font-bold text-green-600">6</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-check-circle text-green-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Renewals</p>
                <p className="text-2xl font-bold text-yellow-600">2</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-clock text-yellow-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Expense</p>
                <p className="text-2xl font-bold text-gray-900">$840</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-dollar-sign text-purple-600 text-xl" />
              </div>
            </div>
          </div>
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Expense Breakdown */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Expense Breakdown
            </h2>
            <canvas id="expenseChart" height={200} />
          </div>
          {/* Policy Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Policy Distribution
            </h2>
            <canvas id="policyChart" height={200} />
          </div>
        </div>
        {/* Recent Policies */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Policies</h2>
        <button className="text-blue-600 hover:text-blue-800">View All</button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Policy Name</th>
              <th className="text-left py-3 px-4">Type</th>
              <th className="text-left py-3 px-4">Provider</th>
              <th className="text-left py-3 px-4">Premium</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {policies.length > 0 ? (
              policies.map((policy) => (
                <tr key={policy._id} className="border-b">
                  <td className="py-3 px-4">{policy.policyName}</td>
                  <td className="py-3 px-4">{policy.type}</td>
                  <td className="py-3 px-4">{policy.provider}</td>
                  <td className="py-3 px-4">${policy.premiumAmount}/month</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-sm rounded-full ${
                      policy.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : policy.status === "Renewal Due"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}>
                      {policy.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                    <button className="text-blue-600 hover:text-blue-800">Renew</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-600 py-4">
                  No policies found for this user.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </main>
  </div>
  </div>
  );
};


export default Dashboard;
