import mongoose from "mongoose";

const PolicySchema = new mongoose.Schema({
  policyNumber: { type: String, unique: true, required: true },
  aadhaar: { type: String, required: true },
  policyName: { type: String, required: true },
  provider: { type: String, required: true },
  premiumAmount: { type: Number, required: true },
  coverage: { type: String, required: true },
  expiryDate: { type: Date, required: true },
});

// Create an index on `policyNumber` to enforce uniqueness
PolicySchema.index({ policyNumber: 1 }, { unique: true });

const Policy = mongoose.model("Policy", PolicySchema);

export default Policy; // ✅ Use ES Module export
