import React, { Profiler } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword"; // Ensure this file exists
import ResetPassword from "./pages/ResetPassword"; // Ensure this file exists
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import ProfileCompletion from "./pages/ProfileCompletion";
import Dashboard from "./pages/Dashboard";
import BuyPolicy from "./pages/BuyPolicy";
import ManageInsurance from "./pages/ManageInsurance";
import AuthUser from "./pages/AuthUser"
import TaxReport from "./pages/TaxReport"
import Profile from "./pages/Profile"
import BuyNewPolicy from "./pages/BuyNewPolicy";
import ChatBot from "./pages/ChatBot";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile-completion" element={<ProfileCompletion />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-policy" element={<BuyPolicy />} />
        <Route path="/manage-insurance" element={<ManageInsurance />} />
        <Route path="/auth-user" element={<AuthUser />} />
        <Route path="/tax-report" element={<TaxReport />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat-bot" element={<ChatBot />} />
        <Route path="/buy-new-policy" element={<BuyNewPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
