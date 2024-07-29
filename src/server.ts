import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import actionRoutes from "./routes/action.routes";
import eventRoutes from "./routes/event.routes";
import userRoutes from "./routes/user.routes";
import connectDB from "./db/connect";

dotenv.config();

// Initialize the Express application
const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/event-blink", actionRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", eventRoutes);

// Catch-all route
app.get("*", (req, res) => {
  res.json("HELLO CHINEMEREM");
});

const start = async () => {
  try {
    await connectDB(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log("Error starting the server:", error);
  }
};

start();
