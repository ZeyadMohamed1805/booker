// Create Error
const createError = ( status, message ) => {
    const error = new Error();
    error.status = status;
    error.message = message;

    return error;
}

// Exports
export default createError;