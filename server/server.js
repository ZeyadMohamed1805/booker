// Modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

// ################################################

// Variables
const server = express();
const port = process.env.PORT || 8800

// ################################################

// Configure Dotenv
dotenv.config();

// ################################################

// Middlewares
server.use("/api/v1/auth", authRoute);
server.use("/api/v1/hotels", hotelsRoute);
server.use("/api/v1/rooms", roomsRoute);
server.use("/api/v1/users", usersRoute);

// ################################################

// Connect To Database
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected To Database...");
    } catch (error) {
        throw error;
    }
}

// ################################################

// Lauch Server
server.listen(port, () => {
    connectDatabase();
    console.log("Connected to Backend...")
});