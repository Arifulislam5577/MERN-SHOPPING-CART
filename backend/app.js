import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/UserRoutes.js";
import authRouter from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddlewares.js";

const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/v1/users", authRouter);
app.use("/api/v1/users", userRouter);

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connect to database");
});

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    "Listen on port: " +
      process.env.PORT +
      " at " +
      process.env.NODE_ENV +
      " mode"
  );
});
