import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faLock,
  faBell,
  faChevronDown,
  faHome,
  faFileAlt,
  faShoppingCart,
  faChartPie,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
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
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faBell} className="text-xl" />
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

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)] fixed">
          <div className="p-4">
            <nav className="space-y-2">
              <a href="/dashboard" className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faHome} />
                <span>Dashboard</span>
              </a>
              <a href="/my-policy" className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faFileAlt} />
                <span>My Policies</span>
              </a>
              <a href="profile" className="flex items-center space-x-2 px-4 py-2.5 text-blue-600 bg-blue-50 rounded-lg">
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
              </a>
              <a href="/buy-new-policy" className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Buy Policy</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faChartPie} />
                <span>Expenses</span>
              </a>
              <a href="/tax-report" className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faChartPie} />
                <span>Tax Reports</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faCog} />
                <span>Settings</span>
              </a>
              <hr className="my-4" />
              <a href="/user-login" className="flex items-center space-x-2 px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Logout</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* Profile Content */}
        <main className="ml-64 flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faUser} className="text-gray-600 text-xl" />
                      <div>
                        <p className="text-sm text-gray-600">Full Name</p>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 text-xl" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-gray-900">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faPhone} className="text-gray-600 text-xl" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-semibold text-gray-900">+1 (123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 text-xl" />
                      <div>
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="font-semibold text-gray-900">123 Main St, New York, NY</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Settings */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faLock} className="text-gray-600 text-xl" />
                      <div>
                        <p className="text-sm text-gray-600">Password</p>
                        <p className="font-semibold text-gray-900">********</p>
                      </div>
                    </div>
                    <a href="/reset-password" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                      Change Password
                    </a>
                    <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;