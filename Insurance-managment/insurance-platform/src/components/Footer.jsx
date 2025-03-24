// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2023 InsureHub. All Rights Reserved.</p>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
