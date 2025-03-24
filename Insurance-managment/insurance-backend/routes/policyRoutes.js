import express from "express";
import Policy from "../models/Policy.js";

const router = express.Router();

// Fetch policies by Aadhaar number
router.get("/user-policies/:aadhaar", async (req, res) => {
  try {
    const { aadhaar } = req.params;
    console.log("Fetching policies for Aadhaar:", aadhaar); // Debug log

    const policies = await Policy.find({ aadhaar: aadhaar });

    if (!policies.length) {
      return res.status(404).json({ message: "No policies found" });
    }

    res.json(policies);
  } catch (error) {
    console.error("Error fetching policies:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

export default router; // ✅ Fix: Use ES Module export
