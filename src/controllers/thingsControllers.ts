import chalk from "chalk";
import Debug from "debug";
import { Request, Response } from "express";
import things from "../data/things";

const debug = Debug("api-rest-backend:index.ts"); // esto para que debuguee solo en los modulos de mi archivo index

const getThings = (req: Request, res: Response) => {
  debug(chalk.green(`A request has arrived on port ${req.url}`));
  res.status(200).json(things);
};

export default getThings;
