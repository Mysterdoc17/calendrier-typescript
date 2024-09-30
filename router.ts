import { Router } from "express";
import { CalendarController } from "./Controllers/calendar.controller";
import { ErrorController } from "./Controllers/Error.controller";
import { IndexController } from "./Controllers/Index.controller";

const router = Router();

// routes autorisées en GET
router.get('/', IndexController.home);
router.get('/calendar', CalendarController.show);
router.get('/calendar/new', CalendarController.create);
router.get('/calendar/edit', CalendarController.edit);
router.get('/calendar/delete', CalendarController.delete);
router.get('/404', ErrorController.client);

// routes autorisées en POST
router.post('/calendar/new', CalendarController.create);

// route autorisée en PUT
router.put('/calendar/edit/:id', CalendarController.edit);

// route autorisée en DELETE
router.delete('calendar/delete/:id', CalendarController.delete);

export default router;