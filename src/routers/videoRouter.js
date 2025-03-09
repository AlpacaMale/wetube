import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

// mapping route to function
const videoRouter = express.Router();
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/upload").get(getUpload).post(postUpload);

// export file for import in other files
export default videoRouter;
