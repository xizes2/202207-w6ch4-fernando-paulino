import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";
import thingsRouter from "./routes/thingsRouter";

const port = process.env.PORT ?? 4000;

const debug = Debug("api-rest-backend:index.ts");

const app = express();
app.use(express.json());

app.use("/things", thingsRouter);

app.listen(port, () => {
  debug(chalk.yellowBright(`Server listening on port ${port}`));
});
