import express from "express"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

console.log("server is start")

import { router } from "./routes/user.router";

app.use("api/v1/user", router);

export default app;