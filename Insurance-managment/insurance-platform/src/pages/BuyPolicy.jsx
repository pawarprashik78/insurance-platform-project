import { useEffect, useState } from "react";
import axios from "axios";


const BuyPolicy = () => {
  const [policies, setPolicies] = useState([]);
  const [error, setError] = useState("");
  const aadhaar = localStorage.getItem("userAadhaar") || ""; // Fetch from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!aadhaar) {
      setError("User Aadhaar not found. Please log in again.");
      return;
    }
    
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPolicies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/policies/user-policies/${aadhaar}`,
          { signal }
        );

        if (response.status === 200 && response.data.length > 0) {
          setPolicies(response.data);
        } else {
          setError("No policies found for this user.");
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          setError("Failed to fetch policies. Please try again.");
        }
      }
    };

    fetchPolicies();

    return () => {
      controller.abort();
    };
  }, [aadhaar]);
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
          className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg"
        >
          <i className="fas fa-home" />
          <span>Dashboard</span>
        </a>
        <a
          href="/my-policy"
          className="flex items-center space-x-2 px-4 py-2.5 text-blue-600 bg-blue-50 rounded-lg"
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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Policies</h1>
          <p className="text-gray-600">
            Manage all your insurance policies in one place
          </p>
        </div>
        <a href="/chat-bot" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
  <i className="fas fa-comments mr-2" /> Ask about my Policies
</a>
        <a href="/buy-new-policy"
          onclick="showAddPolicyModal()"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
        >
          <i className="fas fa-plus mr-2" />
          Add New Policy
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {error && <p className="text-red-500">{error}</p>}

      {policies.length > 0 ? (
        policies.map((policy, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    policy.type === "Health"
                      ? "bg-blue-100"
                      : policy.type === "Vehicle"
                      ? "bg-green-100"
                      : "bg-purple-100"
                  }`}
                >
                  <i
                    className={`${
                      policy.type === "Health"
                        ? "fas fa-heartbeat text-blue-600"
                        : policy.type === "Vehicle"
                        ? "fas fa-car text-green-600"
                        : "fas fa-user-shield text-purple-600"
                    } text-xl`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {policy.policyName}
                  </h3>
                  <p className="text-sm text-gray-600">{policy.type} Insurance</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Premium</span>
                <span className="font-semibold">${policy.premiumAmount}/month</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Next Renewal</span>
                <span className="font-semibold">{policy.nextRenewal}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No policies found for this user.</p>
      )}
    </div>
      {/* Recent Policies */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">All Policies</h2>
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
{/* Add Policy Modal */}
<div
  id="addPolicyModal"
  className="hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
>
  <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-xl bg-white">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-gray-900">Add New Policy</h3>
      <button
        onclick="hideAddPolicyModal()"
        className="text-gray-600 hover:text-gray-800"
      >
        <i className="fas fa-times" />
      </button>
    </div>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Policy Type
        </label>
        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
          <option value="">Select Policy Type</option>
          <option value="health">Health Insurance</option>
          <option value="vehicle">Vehicle Insurance</option>
          <option value="life">Life Insurance</option>
          <option value="property">Property Insurance</option>
          <option value="pet">Pet Insurance</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Policy Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Enter policy name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Insurance Provider
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Enter provider name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Policy Number
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Enter policy number"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Premium Amount
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Enter monthly premium"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <input
          type="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          End Date
        </label>
        <input
          type="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="flex justify-end space-x-3 mt-6">
        <button
          type="button"
          onclick="hideAddPolicyModal()"
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Policy
        </button>
      </div>
    </form>
  </div>
</div>
</div>
  );
};

export default BuyPolicy;
