import express from "express";
import { trending, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

// mapping route to function
const globalRouter = express.Router();
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

// export file for import in other files
export default globalRouter;
