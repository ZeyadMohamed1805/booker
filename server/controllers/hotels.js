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
    const { city, limit } = request.query;
    try {
        // Get The Hotels From The Database
        const hotels = city ? await Hotel.find({ city: city }).limit(limit) : await Hotel.find().limit(limit);
        // Send The Hotels As A Response To The Client
        response.status(200).json(hotels);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotels Failed..."));
    }
}

// ###################################

// Get Hotels By City
export const getHotelsByCity = async ( request, response, next ) => {
    // Extract The Cities From The Request Query
    const cities = request.query.cities.split(",");

    try {
        // // Get The Hotel Counts In The Requested Cities From The Database
        const hotels = await Promise.all(cities.map(city => (Hotel.find({ city: city }))));
        // Send The Hotels As A Response To The Client
        response.status(200).json(hotels);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotels Failed..."));
    }
}

// ###################################

// Get Hotels By Type
export const getHotelsByType = async ( request, response, next ) => {
    // Extract The Types From The Request Query
    const types = request.query.types.split(",");

    try {
        // // Get The Hotel Counts With The Requested Types From The Database
        const hotels = await Promise.all(types.map(type => (Hotel.find({ type: type }))));
        // Send The Hotels As A Response To The Client
        response.status(200).json(hotels);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotels Failed..."));
    }
}

// ###################################

// Get Hotels By Popularity
export const getHotelsByPopularity = async ( request, response, next ) => {
    try {
        // // Get The Popular Hotels
        const hotels = await Hotel.find({ }, null, { sort: { books: -1 } }).limit(3);
        // Send The Hotels As A Response To The Client
        response.status(200).json(hotels);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotels Failed..."));
    }
}

// ###################################

// Get Hotels By Most Recent
export const getHotelsByDate = async ( request, response, next ) => {
    try {
        // // Get The Most Recent Hotels
        const hotels = await Hotel.find({ }, null, { sort: { createdAt: 1 } }).limit(4);
        // Send The Hotels As A Response To The Client
        response.status(200).json(hotels);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotels Failed..."));
    }
}

// ###################################

// Get Hotels By Best Deals
export const getHotelsByBestDeals = async ( request, response, next ) => {
    try {
        // // Get The Hotels With Best Deals
        const hotels = await Hotel.find({ }, null, { sort: { cheapestPrice: 1, rating: -1 } }).limit(3);
        // Send The Hotels As A Response To The Client
        response.status(200).json(hotels);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotels Failed..."));
    }
}

// ###################################

// Get Searched Hotels
export const getSearchedHotels = async ( request, response, next ) => {
    // Extract the City, Sort, & Range from the Request Query
    const { city, sort, range } = request.query;
    const prices = range.split(",");
    let sorts = {};

    switch(sort) {
        case "alphabetically": sorts = { name: 1 }; break;
        case "highest_price": sorts = { cheapestPrice: -1 }; break;
        case "lowest_price": sorts = { cheapestPrice: 1 }; break;
        case "highest_rating": sorts = { rating: -1 }; break;
        case "lowest_rating": sorts = { rating: 1 }; break;
        case "newest": sorts = { createdAt: 1 }; break;
        case "oldest": sorts = { createdAt: -1 }; break;
    }

    try {
        // Get The Hotels From The Database
        const hotels = city ? await Hotel.find({ city: city, cheapestPrice: { $gt: prices[0], $lt: prices[1] } }, null, { sort: sorts }) : await Hotel.find({ cheapestPrice: { $gt: prices[0], $lt: prices[1] } }, null, { sort: sorts });
        // Send The Hotels As A Response To The Client
        response.status(200).json(hotels);
    } catch (error) {
        // Send The Error As A Response To The Client
        next(createError(500, "Get Hotels Failed..."));
    }
}