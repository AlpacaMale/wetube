import express from "express";
import { getJoin, postJoin, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

// mapping route to function
const rootRouter = express.Router();
rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

// export file for import in other files
export default rootRouter;
