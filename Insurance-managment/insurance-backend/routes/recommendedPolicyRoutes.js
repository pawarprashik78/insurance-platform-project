import express from "express";
import RecommendedPolicy from "../models/RecommendedPolicy.js";

const router = express.Router();

// Fetch all recommended policies
router.get("/", async (req, res) => {
  try {
    const policies = await RecommendedPolicy.find();
    res.json(policies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recommended policies", error });
  }
});

export default router;
