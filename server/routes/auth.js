// Modules & Variables
import express from "express";
import { register, login } from "../controllers/auth.js";
const router = express.Router();

// ################################################

// Routes
router.route("/register").post(register);
router.route("/login").post(login);

// ################################################

// Exports
export default router;