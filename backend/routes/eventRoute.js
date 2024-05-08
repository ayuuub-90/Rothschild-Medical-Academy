import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
} from "../controllers/eventController.js";
const router = express.Router();

router.route("/").post(createEvent).get(getAllEvents);
router.route("/:id").get(getEventById);

export default router;
