// Modules & Variables
import express from "express";
import { hotelController } from "../controllers/hotels.js";
const router = express.Router();

// ################################################

// Routes
router.route("/").get(hotelController);

// ################################################

// Exports
export default router;