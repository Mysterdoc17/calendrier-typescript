import { Request, Response } from "express";

const CalendarController = {
    show: async (req: Request, res: Response) => {
        // montrer tous les événements
    },

    create: (req: Request, res: Response) => {
        // création d'un événement
    },

    edit: (req: Request, res: Response) => {
       // modifier l'événement en fonction de son id
    },

    delete: (req: Request, res: Response) => {
        // supprimer un événement en fonction de son id
    }
};

export { CalendarController };