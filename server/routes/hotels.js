// Modules & Variables
import express from "express";
import { createHotel, updateHotel } from "../controllers/hotels.js";
const router = express.Router();

// ################################################

// Routes
router.route("/").post(createHotel);
router.route("/:id").put(updateHotel);

// ################################################

// Exports
export default router;