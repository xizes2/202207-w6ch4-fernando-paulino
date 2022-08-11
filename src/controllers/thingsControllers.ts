import chalk from "chalk";
import Debug from "debug";
import { Request, Response } from "express";
import things from "../data/things";

const debug = Debug("api-rest-backend:thingsController.ts");

export const getThings = (req: Request, res: Response) => {
  debug(chalk.green(`A request has arrived on port ${req.url}`));
  res.status(200).json(things);
};

export const getThing = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const thingIndex = things.findIndex(
    (thingsObj) => String(thingsObj.id) === idThing
  );
  debug(chalk.yellowBright(`A request has arrived on port ${req.url}`));
  res.status(200).json(things[thingIndex]);
};

export const deleteThing = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const thingIndex = things.findIndex(
    (thingsObj) => String(thingsObj.id) === idThing
  );

  things.splice(thingIndex, 1);
  debug(chalk.red(`A delete request has arrived on port ${req.url}`));
  res.status(200).json(things);
};

export const postThing = (req: Request, res: Response) => {
  things.push(req.body);
  debug(chalk.blueBright(`A post request has arrived on port ${req.url}`));
  res.status(200).json(things);
};
