import express from "express";
import { join, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

// mapping route to function
const globalRouter = express.Router();
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

// export file for import in other files
export default globalRouter;
