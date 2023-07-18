// Modules & Variables
import Hotel from "../models/hotels.js";
import createError from "../utils/createError.js";

// Create Hotel
export const createHotel = async ( request, response, next ) => {
    // Create A New Hotel With Data From The Body
    const newHotel = new Hotel(request.body);

    try {
        // Save The Created Hotel To The Database
        const savedHotel = await newHotel.save();
        // Send The New Hotel As A Response To The Client
        response.status(200).json(savedHotel);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Create Hotel Failed..."));
    }
}

// ###################################

// Update Hotel
export const updateHotel = async ( request, response, next ) => {
    // Destruct The ID And Body From The Request
    const { body, params: { id } } = request;

    try {
        // Update The Hotel To The Database
        const updatedHotel = await Hotel.findByIdAndUpdate( id, { $set: body }, { new: true });
        // Send The Updated Hotel As A Response To The Client
        response.status(200).json(updatedHotel);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Update Hotel Failed..."));
    }
}

// ###################################

// Delete Hotel
export const deleteHotel = async ( request, response, next ) => {
    // Destruct The ID From The Request
    const { id } = request.params;

    try {
        // Delete The Hotel From The Database
        const deletedHotel = await Hotel.findByIdAndDelete(id);
        // Send The Deleted Hotel As A Response To The Client
        response.status(200).json(deletedHotel);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Delete Hotel Failed..."));
    }
}

// ###################################

// Get Hotel
export const getHotel = async ( request, response, next ) => {
    // Destruct The ID From The Request
    const { id } = request.params;

    try {
        // Get The Hotel From The Database
        const requestedHotel = await Hotel.findById(id);
        // Send The Requested Hotel As A Response To The Client
        response.status(200).json(requestedHotel);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotel Failed..."));
    }
}

// ###################################

// Get Hotels
export const getHotels = async ( request, response, next ) => {
    try {
        // Get The Hotels From The Database
        const hotels = await Hotel.find();
        // Send The Hotels As A Response To The Client
        response.status(200).json(hotels);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotels Failed..."));
    }
}