// Modules & Variables
import express from "express";
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels } from "../controllers/hotels.js";
const router = express.Router();

// ################################################

// Routes
router.route("/")
.post(createHotel)
.get(getHotels);

router.route("/:id")
.put(updateHotel)
.delete(deleteHotel)
.get(getHotel);

// ################################################

// Exports
export default router;