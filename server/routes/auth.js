// Modules & Variables
import express from "express";
import { authController } from "../controllers/auth.js";
const router = express.Router();

// ################################################

// Routes
router.route("/").get(authController);

// ################################################

// Exports
export default router;