import express from "express";
import { join, login } from "../controllers/userController";
import { trending } from "../controllers/videoController";

// mapping route to function
const globalRouter = express.Router();
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

// export file for import in other files
export default globalRouter;
