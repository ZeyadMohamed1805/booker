// Modules & Variables
import User from "../models/users.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
import hashPassword from "../utils/hashPassword.js";
import comparePassword from "../utils/comparePassword.js";

// ###########################################################################

// Register
export const register = async ( request, response, next ) => {
    // Destruct the Username, Email, & Password from the Request Body
    const { username, email, password } = request.body;

    try {
        // Create The New User With Request Body Data
        const newUser = new User({ username: username, email: email, password: hashPassword(password) });
        // Save The New User To The Database
        await newUser.save();
        // Send The New User As A Response To The Client
        response.status(200).json(newUser);
    } catch (error) {
        // Send The Error As A Response To The Client
        return next(createError(500, "Register Failed..."));
    }
}

// ###########################################################################

// Login
export const login = async ( request, response, next ) => {
    // Destruct the Username & Password from the Request Body
    const { username, password } = request.body;
    
    try {
        // Find The User With The Requested Username
        const user = await User.findOne({ username: username });

        // Check If User Doesn't Exist
        if (!user) return next(createError(404, "User Not Found..."));

        // Compare Passwords
        const paswordCheck = await comparePassword( password, user.password );

        // Check If Passwords Don't Match
        if ( !paswordCheck ) return next(createError(400, "Incorrect Username Or Password"));

        // Create JWT Token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
        // Send The User As A Response To The Client
        response.cookie("access_token", token, { httpOnly: true }).status(200).json(user);
    } catch (error) {
        // Send The Error As A Response To The Client
        return next(createError(500, "Login Failed..."));
    }
}