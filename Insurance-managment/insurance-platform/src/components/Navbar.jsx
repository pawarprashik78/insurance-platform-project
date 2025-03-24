// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white shadow-md fixed w-full z-20 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-3xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition duration-300">InsureHub</Link>
        </div>
        <div className="nav-items flex space-x-8 text-lg">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/user-login" className="hover:text-gray-300 transition duration-300">User Portal</Link>
          <Link to="/buy-policy" className="hover:text-gray-300 transition duration-300">Buy Policy</Link>
          <Link to="/manage-insurance" className="hover:text-gray-300 transition duration-300">Manage Insurance</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
