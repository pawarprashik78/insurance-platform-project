import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/user-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        
        // ✅ Store Aadhaar number in localStorage (if exists)
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          console.warn("User data not found in response.");
        }
        if (data.user && data.user.aadhaar) {
          localStorage.setItem("userAadhaar", data.user.aadhaar);
        } else {
          console.warn("Aadhaar number not found in response.");
        }

        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong! Please try again.");
    }
  };


  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">User Login</h2>

          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <p className="mt-4">
            Don't have an account?{" "}
            <Link to="/user-register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLogin;
