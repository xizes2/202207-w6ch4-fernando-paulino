import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";

const debug = Debug("api-rest-backend:index.ts");
const app = express();

app.use(express.json());
const port = process.env.PORT ?? 4000;

const thingsIknow = ["redux", "html", "css"];

app.get("/data", (req, res) => {
  debug(chalk.green(`A request has arrived on port ${req.url}`));
  res.status(200).json({ thingsIknow });
});

app.listen(port, () => {
  debug(chalk.yellowBright(`Server listening on port ${port}`));
});
