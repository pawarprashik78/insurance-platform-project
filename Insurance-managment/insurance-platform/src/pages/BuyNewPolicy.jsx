import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const BuyNewPolicy = () => {
  const [recommendedPolicies, setRecommendedPolicies] = useState([]);
  const [filteredPolicies, setFilteredPolicies] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCoverage, setSelectedCoverage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("http://localhost:5000/api/recommended-policies")
      .then((res) => res.json())
      .then((data) => {
        setRecommendedPolicies(data);
        setFilteredPolicies(data);
        
        // Initialize filteredPolicies with all policies
      })
      .catch((error) => console.error("Error fetching recommended policies:", error));


  }, []);

  // Group policies by type
  const categorizedPolicies = filteredPolicies.reduce((acc, policy) => {
    if (!acc[policy.type]) {
      acc[policy.type] = [];
    }
    acc[policy.type].push(policy);
    return acc;
  }, {});
  

  const filterPolicies = (query) => {
    let filtered = recommendedPolicies;
  
    if (selectedType) {
      filtered = filtered.filter(policy => policy.type === selectedType);
    }
  
    if (selectedCoverage) {
      filtered = filtered.filter(policy => policy.coverage === selectedCoverage);
    }
  
    if (query) {
      filtered = filtered.filter(policy =>
        policy.policyName.toLowerCase().startsWith(query.toLowerCase()) // Match from the beginning
      );
    }
  
    setFilteredPolicies(filtered);
  };
  

  return (
    <div className="bg-gray-50">
    {/* Navigation */}
    <nav className="bg-white shadow-lg fixed w-full z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <a href="/dashboard" className="flex items-center">
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
          <i className="fas fa-home" />
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
    <div className="bg-gray-50">
      {/* Navigation and Sidebar (same as Profile.jsx) */}

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Buy New Policy</h1>
          <a href="/recommendation" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
  <i className="fas fa-comments mr-2" /> Get AI recommendation
</a>
          <div className="bg-white rounded-xl shadow-sm p-8">
            {/* Search and Filters */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
              <div className="relative">
  <input
    type="text"
    placeholder="Search policies..."
    className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    value={searchQuery}
    onChange={(e) => {
      setSearchQuery(e.target.value);
      filterPolicies(e.target.value);
    }}
/>
                  <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-3 text-gray-400" />
                </div>
                <div className="flex space-x-4">
  {/* Type Dropdown */}
  <select 
    className="border border-gray-300 px-4 py-2 rounded-lg"
    value={selectedType}
    onChange={(e) => setSelectedType(e.target.value)}
  >
    <option value="">All Types</option>
    {Array.from(new Set(recommendedPolicies.map(policy => policy.type))).map(type => (
      <option key={type} value={type}>{type}</option>
    ))}
  </select>

  {/* Coverage Dropdown */}
  <select 
    className="border border-gray-300 px-4 py-2 rounded-lg"
    value={selectedCoverage}
    onChange={(e) => setSelectedCoverage(e.target.value)}
  >
    <option value="">All Coverage</option>
    {Array.from(new Set(recommendedPolicies.map(policy => policy.coverage))).map(coverage => (
      <option key={coverage} value={coverage}>{coverage}</option>
    ))}
  </select>
                <button className="bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition duration-300 flex items-center" onClick={() => filterPolicies(searchQuery)} >
                  <FontAwesomeIcon icon={faFilter} className="mr-2" />
                  Filters
                </button>
                
                </div>
              </div>
            </div>

            

              {/* Add more policy cards as needed */}
              {Object.entries(categorizedPolicies).map(([type, policies]) => (
  <div key={type} className="mb-8">
    <h2 className="text-xl font-bold text-gray-800 mb-4">{type}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {policies.map((policy) => (
        <div key={policy._id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-lg font-semibold">{policy.policyName}</h3>
          <p className="text-sm text-gray-600"><strong>Provider:</strong> {policy.provider}</p>
          <p className="text-sm text-gray-600"><strong>Coverage:</strong> {policy.coverage}</p>
          <p className="text-sm text-gray-600"><strong>Valid Till:</strong> {policy.coverageDate}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold">₹{policy.premiumAmount}/year</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
))}
          </div>
        </div>
      </main>
    </div>
    </div>
    </div>
  );
};

export default BuyNewPolicy;