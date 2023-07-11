// Modules & Variables
import User from "../models/users.js";
import createError from "../utils/createError.js";

// Update User
export const updateUser = async ( request, response, next ) => {
    // Destruct The ID And Body From The Request
    const { body, params: { id } } = request;

    try {
        // Update The User To The Database
        const updatedUser = await User.findByIdAndUpdate( id, { $set: body }, { new: true });
        // Send The Updated User As A Response To The Client
        response.status(200).json(updatedUser);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Update User Failed..."));
    }
}

// ###################################

// Delete User
export const deleteUser = async ( request, response, next ) => {
    // Destruct The ID From The Request
    const { id } = request.params;

    try {
        // Delete The User From The Database
        const deletedUser = await User.findByIdAndDelete(id);
        // Send The Deleted User As A Response To The Client
        response.status(200).json(deletedUser);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Delete User Failed..."));
    }
}

// ###################################

// Get User
export const getUser = async ( request, response, next ) => {
    // Destruct The ID From The Request
    const { id } = request.params;

    try {
        // Get The User From The Database
        const requestedUser = await User.findById(id);
        // Send The Requested User As A Response To The Client
        response.status(200).json(requestedUser);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get User Failed..."));
    }
}

// ###################################

// Get Users
export const getUsers = async ( request, response, next ) => {
    try {
        // Get The Users From The Database
        const users = await User.find();
        // Send The Users As A Response To The Client
        response.status(200).json(users);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Users Failed..."));
    }
}