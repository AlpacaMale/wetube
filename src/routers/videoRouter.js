import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController";

// mapping route to function
const videoRouter = express.Router();
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

// export file for import in other files
export default videoRouter;
