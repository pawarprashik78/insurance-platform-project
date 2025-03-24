import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfileCompletion = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    age: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    income: "",
    medicalConditions: "",
    badHabits: [],
  });

  // Calculate Age from DOB
  const calculateAge = (dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === "dob") {
      const age = calculateAge(value);
      setFormData((prev) => ({ ...prev, dob: value, age }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        badHabits: checked
          ? [...prev.badHabits, value]
          : prev.badHabits.filter((habit) => habit !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userId = localStorage.getItem("userId"); // Retrieve user ID after login
    const response = await fetch(`http://localhost:5000/api/auth/user-profile/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
    if (response.ok) {
      alert("Profile updated successfully!");
    } else {
      alert(data.message || "Profile update failed!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-20 animate__animated animate__fadeInUp">
        <h2 className="text-2xl font-bold mb-6">Complete Your Profile</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <label htmlFor="fullName" className="block mb-2">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-3 mb-4 border border-gray-300 rounded" />

          {/* Date of Birth */}
          <label htmlFor="dob" className="block mb-2">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-3 mb-4 border border-gray-300 rounded" />

          {/* Age (Auto-calculated) */}
          <label htmlFor="age" className="block mb-2">Age</label>
          <input type="number" id="age" name="age" value={formData.age} readOnly className="w-full p-3 mb-4 border border-gray-300 rounded bg-gray-100" />

          {/* Gender */}
          <label className="block mb-2">Gender</label>
          <div className="flex gap-4 mb-4">
            {["Male", "Female", "Other"].map((gender) => (
              <label key={gender} className="flex items-center">
                <input type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleChange} className="mr-2" />
                {gender}
              </label>
            ))}
          </div>

          {/* Marital Status */}
          <label htmlFor="maritalStatus" className="block mb-2">Marital Status</label>
          <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required className="w-full p-3 mb-4 border border-gray-300 rounded">
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>

          {/* Occupation */}
          <label htmlFor="occupation" className="block mb-2">Occupation</label>
          <select id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required className="w-full p-3 mb-4 border border-gray-300 rounded">
            <option value="">Select</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
            <option value="Self-employed">Self-employed</option>
            <option value="Student">Student</option>
            <option value="Retired">Retired</option>
          </select>

          {/* Annual Income */}
          <label htmlFor="income" className="block mb-2">Annual Income (₹)</label>
          <input type="number" id="income" name="income" value={formData.income} onChange={handleChange} required className="w-full p-3 mb-4 border border-gray-300 rounded" />

          {/* Pre-existing Medical Conditions */}
          <label htmlFor="medicalConditions" className="block mb-2">Pre-existing Medical Conditions</label>
          <input type="text" id="medicalConditions" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} placeholder="E.g., Diabetes, Heart Disease" className="w-full p-3 mb-4 border border-gray-300 rounded" />

          {/* Unhealthy Habits */}
          <label className="block mb-2">Unhealthy Habits</label>
          <div className="flex flex-wrap gap-4 mb-6">
            {["Smoking", "Drinking", "Drugs", "Sedentary Lifestyle"].map((habit) => (
              <label key={habit} className="flex items-center">
                <input type="checkbox" name="badHabits" value={habit} checked={formData.badHabits.includes(habit)} onChange={handleChange} className="mr-2" />
                {habit}
              </label>
            ))}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300">Save Profile</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ProfileCompletion;
