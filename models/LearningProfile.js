import mongoose from "mongoose";

const learningProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    subject: {
      type: String,
      required: true,
      trim: true
    },

    chapter: {
      type: String,
      required: true,
      trim: true
    },

    level: {
      type: String,
      enum: ["beginner", "developing", "proficient"],
      required: true
    },

    lastPercentage: {
      type: Number,
      min: 0,
      max: 100,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const LearningProfile = mongoose.model(
  "LearningProfile",
  learningProfileSchema
);

export default LearningProfile;
