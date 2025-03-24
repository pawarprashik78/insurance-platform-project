// insurance/routes/authRoutes.js
import express from "express";
import * as bcrypt from "bcryptjs";  // ✅ Works in ES module

import User from "../models/User.js";
const router = express.Router();

// User Registration
router.post("/user-register", async (req, res) => {
  try {
    const { name, email, password, aadhaar } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with profileCompleted set to false
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      aadhaar,
      profileCompleted: false, // Ensures user completes profile later
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully. Please complete your profile.",
      userId: newUser._id, // Send user ID for profile completion step
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/user-login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!req.session) {
      return res.status(500).json({ message: "Session not initialized" });
    }

    req.session.user = {
      _id: user._id,
      name: user.name,
      email: user.email
    };

    // ✅ Send JSON response with redirect information
    res.json({ message: "Login successful", redirectTo: "/dashboard" });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});



export default router;