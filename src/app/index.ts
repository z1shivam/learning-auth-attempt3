import express from "express";
import mainRouter from "../routes/mainRouter";
import authRouter from "../routes/authRouter";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET, POST",
    credentials: true,
  })
);

app.use("/", mainRouter);
app.use("/auth", authRouter);

export default app;
