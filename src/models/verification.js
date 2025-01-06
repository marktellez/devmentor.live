import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema({
  email: String,
  code: String,
  formData: {
    experience: String,
    interests: [String],
    goals: String,
    email: String,
  },
  expires: Date,
});

export const Verification =
  mongoose.models.Verification ||
  mongoose.model("Verification", verificationSchema);
