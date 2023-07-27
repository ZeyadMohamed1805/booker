// Modules & Variables
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

// Verify Token
export const verifyToken = ( request, response, next ) => {
    // Destruct The Token From The Request Cookies
    const { token } = request.body;

    // Check If Token Doesn't Exist
    if ( !token ) return next( createError( 401, "You Are Not Authenticated..." ) );

    // Verify Token
    jwt.verify( token, process.env.JWT_SECRET, ( error, user ) => {
        // Check Token Validity
        if ( error ) return next( createError( 401, "Invalid Token..." ) );

        // Add The User To The Request
        request.user = user;

        // Pass To The Next Middleware
        next();
    } );
}

// Verify User
export const verifyUser = ( request, response, next ) => {
    // Call the Verify Token
    verifyToken( request, response, () => {
        // Destruct The User & Params From The Request
        const { user, params } = request;
        // Check If IDs Match Or If The User Is An Admin
        if ( user.id === params.id || user.isAdmin ) return next();
        else return next( createError( 403, "Invalid Token..." ) );
    } )
}

// Verify Admin
export const verifyAdmin = ( request, response, next ) => {
    // Call the Verify Token
    verifyToken( request, response, next, () => {
        // Destruct The User & Params From The Request
        const { user } = request;
        // Check If The User Is An Admin
        if ( user.isAdmin ) return next();
        else return next( createError( 403, "Invalid Token..." ) );
    } )
}