import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "",aadhar: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/auth/user-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        alert("Registration Successful! Please log in.");
        navigate("/user-login");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong! Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-page flex flex-col md:flex-row items-start justify-center py-20 px-4">
        <div className="form-container bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">User Registration</h2>

          {error && <p className="text-red-500">{error}</p>} {/* ✅ Show errors */}

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" required
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              value={formData.name} onChange={handleChange} />

            <input type="email" name="email" placeholder="Email" required
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              value={formData.email} onChange={handleChange} />

            <input type="password" name="password" placeholder="Password" required
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              value={formData.password} onChange={handleChange} />

<input type="aadhaar" name="aadhaar" placeholder="aadhar-id" required
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              value={formData.aadhaar} onChange={handleChange} />

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Register
            </button>
          </form>

          <p className="mt-4">
            Already have an account? <Link to="/user-login" className="text-blue-600 hover:underline">Login here</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserRegister;
