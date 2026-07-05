import express from "express"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

console.log("server is start")

import { router } from "./core/routes/router";

app.use("", router);

export default app;