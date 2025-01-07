// const express = require("express"); ugly code
import express from "express"; // sexy code
import morgan from "morgan";

const PORT = 4000;

const app = express();

// declare controller
const home = (req, res) => res.send("I love middlewares");
const login = (req, res) => res.send("login");

// middleware
app.use(morgan("dev")); // logger

// mapping route to function
const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);
const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);
const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

// router setting
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

// server on
const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
