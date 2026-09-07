import express from "express";
import QuizAttempt from "../models/QuizAttempt.js";
import LearningProfile from "../models/LearningProfile.js";
import User from "../models/User.js";

const router = express.Router();

// GET STUDENT DASHBOARD
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find student
    const user = await User.findById(userId).select(
      "name email role"
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Get all quiz attempts
    const attempts = await QuizAttempt.find({
      userId
    }).sort({ createdAt: -1 });

    // Get learning profiles
    const learningProfiles = await LearningProfile.find({
      userId
    }).sort({ updatedAt: -1 });

    // Calculate dashboard statistics
    const totalQuizzes = attempts.length;

    let averagePercentage = 0;

    if (totalQuizzes > 0) {
      const totalPercentage = attempts.reduce(
        (sum, attempt) => sum + attempt.percentage,
        0
      );

      averagePercentage = Math.round(
        totalPercentage / totalQuizzes
      );
    }

    // Latest quiz
    const latestAttempt = attempts.length > 0
      ? attempts[0]
      : null;

    res.status(200).json({
      message: "Dashboard data fetched successfully",

      student: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },

      statistics: {
        totalQuizzes,
        averagePercentage
      },

      latestAttempt,

      quizHistory: attempts,

      learningProfiles
    });

  } catch (error) {
    console.error("Dashboard error:", error);

    res.status(500).json({
      message: "Failed to fetch dashboard data"
    });
  }
});

export default router;
