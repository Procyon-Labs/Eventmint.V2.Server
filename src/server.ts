import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import actionRoutes from "./routes/action.routes";
import eventRoutes from "./routes/event.routes";
import userRoutes from "./routes/user.routes";
import connectDB from "./db/connect";
import axios from "axios";
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

const serverUrl = "https://eventmint.onrender.com";
const checkServerHealth = () => {
  axios
    .get(serverUrl)
    .then((response) => {
      console.log(`Server is healthy`, response.data);
    })
    .catch((error) => {
      console.error(`Error checking server health:`, error.message);
    });
};

const interval = 2 * 60 * 1000;
setInterval(checkServerHealth, interval);

// Catch-all route
app.get("*", (req, res) => {
  checkServerHealth();
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
