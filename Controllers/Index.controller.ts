import { Express, Request, Response } from "express";

const IndexController = {
    home: (req: Request, res: Response): void => {
        res.send('Hello World');
    }
}

export { IndexController };