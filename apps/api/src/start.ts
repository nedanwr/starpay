import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { __prod__, env, port } from "./lib/constants";

const app: Application = express();

if (!__prod__) {
    app.use(require("morgan")("dev"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req: Request, res: Response) =>
    res.status(200).json({ message: "Welcome to StarPay API" })
);

app.listen(port, () =>
    console.log(`Server started in ${env} mode on port ${port}`)
);
