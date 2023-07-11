// Modules & Variables
import express from "express";
import { createHotel } from "../controllers/hotels.js";
const router = express.Router();

// ################################################

// Routes
router.route("/").post(createHotel);

// ################################################

// Exports
export default router;