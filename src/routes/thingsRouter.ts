import express from "express";
import {
  getThings,
  getThing,
  deleteThing,
} from "../controllers/thingsControllers";

const thingsRouter = express.Router();

thingsRouter.get("/", getThings);
thingsRouter.get("/:idThing", getThing);
thingsRouter.delete("/:idThings", deleteThing);

export default thingsRouter;
