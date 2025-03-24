import mongoose from "mongoose";

const UserProfileSchema = new mongoose.Schema({
  aadhaar: { type: String, required: true, unique: true },
  age: Number,
  gender: String,
  occupation: String,
  annualIncome: Number,
  maritalStatus: String,
  dependents: Number,
});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

export default UserProfile;
