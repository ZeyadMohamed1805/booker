// Modules & Variables
import express from "express";
import { roomsController } from "../controllers/rooms.js";
const router = express.Router();

// ################################################

// Routes
router.route("/").get(roomsController);

// ################################################

// Exports
export default router;