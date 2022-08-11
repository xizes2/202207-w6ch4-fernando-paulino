import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";

const debug = Debug("api-rest-backend:index.ts"); // esto para que debuguee solo en los modulos de mi archivo index
const app = express();

app.use(express.json());
const port = process.env.PORT ?? 4000;

const thingsIknow = [
  { id: 1, name: "redux" },
  { id: 2, name: "html" },
  { id: 3, name: "css" },
];

app.get("/thingsIKnow", (req, res) => {
  debug(chalk.green(`A request has arrived on port ${req.url}`));
  res.status(200).json(thingsIknow);
});

app.get("/thingsIKnow/");

app.listen(port, () => {
  debug(chalk.yellowBright(`Server listening on port ${port}`));
});
