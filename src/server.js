// const express = require("express"); ugly code
import express from "express"; // sexy code
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

// app setting
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// middleware
app.use(morgan("dev")); // logger

// router setting
app.use(express.urlencoded({ extended: true }));
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", rootRouter);

export default app;
