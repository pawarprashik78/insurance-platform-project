import express from "express";
import UserProfile from "../models/UserProfile.js"; // Import UserProfile model

const router = express.Router();

// Fetch user profile by Aadhaar
router.get("/profile/:aadhaar", async (req, res) => {
  try {
    const { aadhaar } = req.params;
    const userProfile = await UserProfile.findOne({ aadhaar });

    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
