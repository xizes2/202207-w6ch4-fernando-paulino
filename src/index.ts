import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";
import http from "http";

const debug = Debug("debugger-node");
const app = express();
const server = http.createServer();

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

server.on("request", () => {
  console.log("hola!");
});
