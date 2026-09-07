import express from "express";
import QuizAttempt from "../models/QuizAttempt.js";
import LearningProfile from "../models/LearningProfile.js";

const router = express.Router();

// GET ADAPTIVE LEARNING PROFILE
router.get("/:userId/:subject/:chapter", async (req, res) => {
  try {
    const { userId, subject, chapter } = req.params;

    // Find the student's latest attempt for this chapter
    const latestAttempt = await QuizAttempt.findOne({
      userId,
      subject,
      chapter
    }).sort({ createdAt: -1 });

    if (!latestAttempt) {
      return res.status(404).json({
        message: "No quiz attempt found for this chapter"
      });
    }

    // Get the student's current level
    const level = latestAttempt.level;
    const percentage = latestAttempt.percentage;

    // Decide what type of content to recommend
    let recommendation;
    let message;

    if (level === "beginner") {
      recommendation = "basic";
      message = "Start with basic concepts and guided practice.";
    } else if (level === "developing") {
      recommendation = "practice";
      message = "Review the concepts and continue with practice questions.";
    } else {
      recommendation = "advanced";
      message = "Move to advanced concepts and challenging questions.";
    }

    // Save/update learning profile
    const profile = await LearningProfile.findOneAndUpdate(
      {
        userId,
        subject,
        chapter
      },
      {
        userId,
        subject,
        chapter,
        level,
        lastPercentage: percentage
      },
      {
        new: true,
        upsert: true
      }
    );

    res.status(200).json({
      message: "Adaptive learning recommendation generated",
      profile,
      recommendation: {
        level,
        percentage,
        type: recommendation,
        message
      }
    });

  } catch (error) {
    console.error("Adaptive learning error:", error);

    res.status(500).json({
      message: "Failed to generate adaptive learning recommendation"
    });
  }
});

export default router;
