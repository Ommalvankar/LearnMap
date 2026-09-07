import express from "express";
import QuizAttempt from "../models/QuizAttempt.js";
import User from "../models/User.js";

const router = express.Router();

// SAVE QUIZ ATTEMPT
router.post("/", async (req, res) => {
  try {
    const {
      userId,
      subject,
      chapter,
      score,
      totalQuestions,
      answers
    } = req.body;

    if (
      !userId ||
      !subject ||
      !chapter ||
      score === undefined ||
      !totalQuestions
    ) {
      return res.status(400).json({
        message: "Required quiz attempt data is missing"
      });
    }

    // Check user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Calculate percentage on server
    const percentage = Math.round(
      (score / totalQuestions) * 100
    );

    // Determine learning level
    let level;

    if (percentage < 50) {
      level = "beginner";
    } else if (percentage < 80) {
      level = "developing";
    } else {
      level = "proficient";
    }

    const attempt = await QuizAttempt.create({
      userId,
      subject,
      chapter,
      score,
      totalQuestions,
      percentage,
      level,
      answers: answers || []
    });

    res.status(201).json({
      message: "Quiz attempt saved successfully",
      attempt
    });

  } catch (error) {
    console.error("Error saving quiz attempt:", error);

    res.status(500).json({
      message: "Failed to save quiz attempt"
    });
  }
});


// GET ALL ATTEMPTS OF A USER
router.get("/user/:userId", async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({
      userId: req.params.userId
    }).sort({ createdAt: -1 });

    res.status(200).json(attempts);

  } catch (error) {
    console.error("Error fetching quiz attempts:", error);

    res.status(500).json({
      message: "Failed to fetch quiz attempts"
    });
  }
});


// GET LATEST ATTEMPT OF A USER
router.get("/user/:userId/latest", async (req, res) => {
  try {
    const attempt = await QuizAttempt.findOne({
      userId: req.params.userId
    }).sort({ createdAt: -1 });

    if (!attempt) {
      return res.status(404).json({
        message: "No quiz attempts found"
      });
    }

    res.status(200).json(attempt);

  } catch (error) {
    console.error("Error fetching latest attempt:", error);

    res.status(500).json({
      message: "Failed to fetch latest attempt"
    });
  }
});


export default router;
