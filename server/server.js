// Modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import customError from "./middlewares/errors.js";
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
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/api/v1/auth", authRoute);
server.use("/api/v1/hotels", hotelsRoute);
server.use("/api/v1/rooms", roomsRoute);
server.use("/api/v1/users", usersRoute);
server.use(customError);

// ################################################

// Connect To Database
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
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