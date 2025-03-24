import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faDownload } from '@fortawesome/free-solid-svg-icons';
import Chart from '../components/Chart'; 
import {
  faShieldAlt,
  faBell,
  faChevronDown,
  faHome,
  faFileAlt,
  faShoppingCart,
  faChartPie,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const TaxReport = () => {
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
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                    className="w-8 h-8 rounded-full"
                  />
                  <a href='/profile'>
                    <span>John Doe</span>
                  </a>
                  <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                </button>
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
              <a href="/dashboard" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg">
                <FontAwesomeIcon icon={faHome} />
                <span className="ml-2">Dashboard</span>
              </a>
              <a href="/my-policy" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg">
                <FontAwesomeIcon icon={faFileAlt} />
                <span className="ml-2">My Policies</span>
              </a>
              <a href="/buy-new-policy" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="ml-2">Buy Policy</span>
              </a>
              <a href="#" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg">
                <FontAwesomeIcon icon={faChartPie} />
                <span className="ml-2">Expenses</span>
              </a>
              <a href="/tax-report" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg">
                <FontAwesomeIcon icon={faFileInvoiceDollar} />
                <span className="ml-2">Tax Reports</span>
              </a>
              <a href="#" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg">
                <FontAwesomeIcon icon={faCog} />
                <span className="ml-2">Settings</span>
              </a>
              <hr className="my-4" />
              <a href="/user-login" className="flex items-center px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-lg">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span className="ml-2">Logout</span>
              </a>
            </nav>
          </div>
        </aside>
        
        {/* Tax Report Content */}
        <main className="ml-64 flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Tax Reports</h1>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-gray-900">Annual Tax Summary</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download Report
                </button>
              </div>

              {/* Tax Summary Chart */}
              <div className="mb-8">
                <Chart
                  chartId="taxChart"
                  chartType="bar"
                  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                  data={[200, 150, 180, 220, 300, 250, 270, 330, 290, 310, 260, 280]}
                  bgColor="rgba(0, 95, 163, 0.6)"
                  borderColor="rgba(0, 95, 163, 1)"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TaxReport;