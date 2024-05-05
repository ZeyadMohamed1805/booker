// Modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
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
server.use(cors({ origin: ["https://booker-project.vercel.app", "http://localhost:3000"] }));
server.use(
	cors({
		origin: ["https://booker-project.vercel.app"],
	})
);
server.use(function (request, res, next) {
	// Website you wish to allow to connect
	res.setHeader(
		"Access-Control-Allow-Origin",
		"https://booker-project.vercel.app"
	);

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", []);

	// Pass to next layer of middleware
	next();
});
server.use(cookieParser());
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
        await mongoose.connect(process.env.MONGO);
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
