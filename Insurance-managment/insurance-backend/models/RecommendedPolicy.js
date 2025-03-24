import mongoose from "mongoose";

const RecommendedPolicySchema = new mongoose.Schema({
  policyNumber: String,
  policyName: String,
  type: String,
  provider: String,
  premiumAmount: Number,
  coverage: String,
  coverageDate: String,
});

const RecommendedPolicy = mongoose.model("RecommendedPolicy", RecommendedPolicySchema, "RecommendedPolicy");

export default RecommendedPolicy;
