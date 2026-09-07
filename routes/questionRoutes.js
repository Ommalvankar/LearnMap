import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();

    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);

    res.status(500).json({
      message: "Failed to fetch questions"
    });
  }
});

// Get questions by subject
router.get("/subject/:subject", async (req, res) => {
  try {
    const questions = await Question.find({
      subject: req.params.subject
    });

    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching subject questions:", error);

    res.status(500).json({
      message: "Failed to fetch questions"
    });
  }
});

// Get questions by subject and chapter
router.get("/:subject/:chapter", async (req, res) => {
  try {
    const questions = await Question.find({
      subject: req.params.subject,
      chapter: req.params.chapter
    });

    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching chapter questions:", error);

    res.status(500).json({
      message: "Failed to fetch questions"
    });
  }
});

export default router;