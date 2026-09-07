import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";    
import questionRoutes from "./routes/questionRoutes.js";    
import quizAttemptRoutes from "./routes/quizAttemptRoutes.js";
import learningRoutes from "./routes/learningRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/quiz-attempts", quizAttemptRoutes);
app.use("/api/learning", learningRoutes);
app.use("/api/dashboard", dashboardRoutes);
connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "LearnMap Backend is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`LearnMap server running on port ${PORT}`);
});