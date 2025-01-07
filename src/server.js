// const express = require("express"); ugly code
import express from "express"; // sexy code
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();

// declare controller
const home = (req, res) => res.send("I love middlewares");
const login = (req, res) => res.send("login");

// middleware
app.use(morgan("dev")); // logger

// router setting
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

// server on
const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
