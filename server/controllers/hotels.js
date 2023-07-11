// Modules & Variables
import Hotel from "../models/hotels.js";

// Create Hotel
export const createHotel = async ( request, response ) => {
    // Create A New Hotel With Data From The Body
    const newHotel = new Hotel(request.body);

    try {
        // Save The Created Hotel To The Database
        const savedHotel = await newHotel.save();
        // Send The New Hotel As A Response To The Client
        response.status(200).json(savedHotel);
    } catch (error) {
        // Send The Error As A Response To The Client
        response.status(500).json(error);
    }
}