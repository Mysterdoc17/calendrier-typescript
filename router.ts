import { Router } from "express";
import { CalendarController } from "./Controllers/calendar.controller";

const router = Router();

// routes autorisées en GET
router.get('/calendar', CalendarController.show);
router.get('/calendar/new', CalendarController.create);
router.get('/calendar/edit', CalendarController.edit);
router.get('/calendar/delete', CalendarController.delete);

// routes autorisées en POST
router.post('/calendar/new', CalendarController.create);

// route autorisée en PUT
router.put('/calendar/edit/{id}', CalendarController.edit);

// route autorisée en DELETE
router.delete('calendar/delete/{id}', CalendarController.delete);

export default router;