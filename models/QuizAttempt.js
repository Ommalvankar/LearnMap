import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema(
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

    score: {
      type: Number,
      required: true,
      min: 0
    },

    totalQuestions: {
      type: Number,
      required: true,
      min: 1
    },

    percentage: {
      type: Number,
      required: true,
      min: 0,
      max: 100
    },

    level: {
      type: String,
      enum: ["beginner", "developing", "proficient"],
      required: true
    },

    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question"
        },

        selectedAnswer: {
          type: Number
        },

        isCorrect: {
          type: Boolean
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const QuizAttempt = mongoose.model(
  "QuizAttempt",
  quizAttemptSchema
);

export default QuizAttempt;