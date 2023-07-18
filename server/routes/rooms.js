// Modules & Variables
import express from "express";
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms } from "../controllers/rooms.js";
import { verifyAdmin } from "../middlewares/verify.js";
const router = express.Router();

// ################################################

// Create Room
router.post("/:hotelID", verifyAdmin, createRoom);

// Update Room
router.put("/:id", verifyAdmin, updateRoom);

// Delete Room
router.delete("/:id/:hotelID", verifyAdmin, deleteRoom);

// Get Rooms
router.get("/", getRooms);

// Get Room
router.get("/:id", getRoom);

// ################################################

// Exports
export default router;