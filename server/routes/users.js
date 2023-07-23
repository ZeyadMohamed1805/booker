// Modules & Variables
import express from "express";
import { deleteUser, updateUser, getUser, getUsers, updateReservation } from "../controllers/users.js";
import { verifyToken, verifyUser, verifyAdmin } from "../middlewares/verify.js";
const router = express.Router();

// ################################################

// Verify Token
router.get("/verify_token", verifyToken, ( request, response, next ) => {
    response.status(200).send("User Authenticated");
});

// Verify User
router.get("/verify_user/:id", verifyUser, ( request, response, next ) => {
    response.status(200).send("User Logged In");
});

// Verify Admin
router.get("/verify_admin/:id", verifyAdmin, ( request, response, next ) => {
    response.status(200).send("Admin Logged In");
});

// Get Users
router.get("/", verifyAdmin, getUsers);

// Get User
router.get("/:id", verifyUser, getUser);

// Update User
router.put("/:id", verifyUser, updateUser);

// Update User
router.put("/:id", verifyUser, updateUser)
router.put("/book/:id", verifyUser, updateReservation);

// Delete User
router.delete("/:id", verifyUser, deleteUser);

// ################################################

// Exports
export default router;