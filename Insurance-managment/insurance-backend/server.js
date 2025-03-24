import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios"
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import policyRoutes from "./routes/policyRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import recommendedPolicyRoutes from "./routes/recommendedPolicyRoutes.js";
const app = express();
const PORT = process.env.PORT || 5000;
import User from "./models/User.js";
//import Policy from "../models/Policy";
//import UserProfile from "../models/UserProfile";

 // Adjust the path if needed

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/UserProfile", userRoutes);
app.use("/api/recommended-policies", recommendedPolicyRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

app.post("/forgot-password", async (req, res) => {
  const { username, email } = req.body;
  console.log("Received Forgot Password Request:", { username, email });

  try {
      // 🔹 Fetch all users (for debugging)
      const allUsers = await User.find({});
      console.log("All Users in DB:", allUsers);

      // 🔹 Fix: Search by 'name' instead of 'username'
      const user = await User.findOne({
          name: { $regex: new RegExp(`^${username}$`, "i") }, // Case-insensitive match
          email: email
      });

      if (!user) {
          console.log("❌ User not found in database.");
          return res.status(404).json({ message: "User not found" });
      }

      console.log("✅ User found:", user);
      res.status(200).json({ message: "Password reset link sent!" });
  } catch (error) {
      console.error("Forgot Password Error:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/reset-password", async (req, res) => {
    const { username, password } = req.body;

    console.log("🛠 Resetting password for:", username);

    try {
        if (!username || !password) {
            console.log("⚠️ Missing required fields.");
            return res.status(400).json({ error: "Username and password are required." });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 🔹 Update password in the database
        const result = await User.updateOne(
            { name: username }, // Match user by username
            { $set: { password: hashedPassword } }
        );

        console.log("🔄 Password Update Result:", result);

        // ✅ Check if at least one document was modified
        if (result.modifiedCount > 0) {
            console.log("✅ Password updated successfully!");
            return res.status(200).json({ message: "Password changed successfully!" ,redirect:'/user-login' });
        } else {
            console.log("❌ No matching user found. Password not updated.");
            return res.status(404).json({ error: "User not found in database." });
        }
    } catch (error) {
        console.error("❌ Reset Password Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


// ✅ MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/insurance_portal", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit on failure
  });

export default app;