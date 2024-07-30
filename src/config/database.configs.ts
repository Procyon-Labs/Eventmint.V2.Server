import mongoose from "mongoose";
mongoose.set("strictQuery", true);
import { MESSAGES } from "./constants.configs";

export default function connectToMongo() {
  mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
      console.log(MESSAGES.DATABASE.CONNECTED);
    })
    .catch((err) => {
      console.log(MESSAGES.DATABASE.ERROR, err);
    });
}
