// const express = require("express"); ugly code
import express from "express"; // sexy code
import session from "express-session";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

// app setting
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// middleware
app.use(morgan("dev")); // logger
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(localsMiddleware);

// router setting
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", rootRouter);

export default app;
