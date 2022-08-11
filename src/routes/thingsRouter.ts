import express from "express";
import {
  getThings,
  getThing,
  deleteThing,
  postThing,
} from "../controllers/thingsControllers";

const thingsRouter = express.Router();

thingsRouter.get("/", getThings);
thingsRouter.get("/:idThing", getThing);
thingsRouter.delete("/:idThing", deleteThing);
thingsRouter.post("/", postThing);

export default thingsRouter;
