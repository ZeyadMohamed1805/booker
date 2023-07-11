// Modules & Variables
import express from "express";
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels } from "../controllers/hotels.js";
import { verifyAdmin } from "../middlewares/verify.js";
const router = express.Router();

// ################################################

// Create Hotel
router.post("/", verifyAdmin, createHotel);

// Update Hotel
router.put("/:id", verifyAdmin, updateHotel);

// Delete Hotel
router.delete("/:id", verifyAdmin, deleteHotel);

// Get Hotels
router.get("/", getHotels);

// Get Hotel
router.get("/:id", getHotel);

// ################################################

// Exports
export default router;