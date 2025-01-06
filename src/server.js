// const express = require("express"); ugly code
import express from "express"; // sexy code
import morgan from "morgan";

const PORT = 4000;

const app = express();

//declare controller
const home = (req, res) => res.send("I love middlewares");
const login = (req, res) => res.send("login");

// mapping route to function
app.use(morgan("dev"));
app.get("/", home);
app.get("/login", login);

// server on
const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
