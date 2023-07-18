// Modules & Variables
import express from "express";
import { usersController } from "../controllers/users.js";
const router = express.Router();

// ################################################

// Routes
router.route("/").get(usersController);

// ################################################

// Exports
export default router;