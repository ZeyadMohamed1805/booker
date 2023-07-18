// Modules & Variables
import Room from "../models/rooms.js";
import Hotel from "../models/hotels.js";
import createError from "../utils/createError.js";

// Create Room
export const createRoom = async ( request, response, next ) => {
    // Destruct The Body & Params From The Request
    const { body, params } = request;

    const hotelID = params.hotelID;
    const newRoom = new Room(body);

    try {
        const savedRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate( hotelID, { $push: { rooms: savedRoom._id } } );
        } catch (error) {
            next( error );
        }

        response.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
}

// ###################################

// Update Room
export const updateRoom = async ( request, response, next ) => {
    // Destruct The ID And Body From The Request
    const { body, params: { id } } = request;

    try {
        // Update The Room To The Database
        const updatedRoom = await Room.findByIdAndUpdate( id, { $set: body }, { new: true });
        // Send The Updated Room As A Response To The Client
        response.status(200).json(updatedRoom);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Update Room Failed..."));
    }
}

// ###################################

// Delete Room
export const deleteRoom = async ( request, response, next ) => {
    // Destruct The ID From The Request
    const { id, hotelID } = request.params;

    try {
        // Delete The Room From The Database
        const deletedRoom = await Room.findByIdAndDelete(id);
        try {
            await Hotel.findByIdAndUpdate( hotelID, { $pull: { rooms: id } } );
        } catch (error) {
            next( error );
        }
        // Send The Deleted Room As A Response To The Client
        response.status(200).json(deletedRoom);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Delete Room Failed..."));
    }
}

// ###################################

// Get Room
export const getRoom = async ( request, response, next ) => {
    // Destruct The ID From The Request
    const { id } = request.params;

    try {
        // Get The Room From The Database
        const requestedRoom = await Room.findById(id);
        // Send The Requested Room As A Response To The Client
        response.status(200).json(requestedRoom);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Room Failed..."));
    }
}

// ###################################

// Get Rooms
export const getRooms = async ( request, response, next ) => {
    try {
        // Get The Rooms From The Database
        const rooms = await Hotel.find();
        // Send The Rooms As A Response To The Client
        response.status(200).json(rooms);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Rooms Failed..."));
    }
}