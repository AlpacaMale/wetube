import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  upload,
} from "../controllers/videoController";

// mapping route to function
const videoRouter = express.Router();
videoRouter.get("/:id(\\d+)", watch);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/:id(\\d)/edit").get(getEdit).post(postEdit);

// export file for import in other files
export default videoRouter;
