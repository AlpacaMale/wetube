import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController";

// mapping route to function
const videoRouter = express.Router();
videoRouter.get("/:id([0-91-f]{24})", watch);
videoRouter.route("/:id([0-91-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-91-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

// export file for import in other files
export default videoRouter;
