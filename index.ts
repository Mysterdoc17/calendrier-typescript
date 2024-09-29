import express, { Application } from "express";
import router from './router';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`L'application tourne sur le port ${port}`);
});