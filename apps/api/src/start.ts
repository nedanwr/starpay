import "dotenv/config";
import express, { Application } from "express";
import {__prod__} from "./lib/constants";

const app: Application = express();

if (!__prod__) {
    app.use(require("morgan")("dev"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));