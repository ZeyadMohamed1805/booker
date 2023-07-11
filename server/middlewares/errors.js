// Custom Error
const customError = ( error, request, response, next ) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something Went Wrong!";
    return response.status(errorStatus).json(errorMessage);
}

// Exports
export default customError