// Modules & Variables
import express from "express";
import { createHotel, updateHotel, deleteHotel } from "../controllers/hotels.js";
const router = express.Router();

// ################################################

// Routes
router.route("/").post(createHotel);
router.route("/:id")
.put(updateHotel)
.delete(deleteHotel);

// ################################################

// Exports
export default router;