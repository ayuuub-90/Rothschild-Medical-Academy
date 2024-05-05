//! first of all, connection to data base
import connect from "./config/db_connection.js";

// dependencies imports
import express from "express";
const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

connect();

// routes imports
import userRouter from "./routes/userRoute.js";

app.use("/api/users", userRouter);

app.listen(process.env.PORT, () =>
  console.log("listening on port " + process.env.PORT)
);
