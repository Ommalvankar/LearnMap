import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
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

    question: {
      type: String,
      required: true,
      trim: true
    },

    options: {
      type: [String],
      required: true
    },

    correctAnswer: {
      type: Number,
      required: true
    },

    difficulty: {
      type: String,
      enum: ["beginner", "developing", "proficient"],
      default: "beginner"
    }
  },
  {
    timestamps: true
  }
);

const Question = mongoose.model("Question", questionSchema);

export default Question;