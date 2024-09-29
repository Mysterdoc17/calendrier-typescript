import express, { Application } from "express";

const app: Application = express();

app.listen(3000, () => {
    console.log("L'application tourne sur le port 3000");
});