import { Express, Request, Response } from "express";

const ErrorController = {
    client: (req: Request, res: Response): void => {
        res.send('https://http.cat/404.jpg');
    }
};

export { ErrorController };