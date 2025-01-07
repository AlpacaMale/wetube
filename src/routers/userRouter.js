import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

// mapping route to function
const userRouter = express.Router();
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", see);

// export file for import in other files
export default userRouter;
