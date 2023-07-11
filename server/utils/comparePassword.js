// Modules & Variables
import bcrypt from "bcryptjs";

// Compare The Passwords
const comparePassword = ( bodyPassword, userPassword ) => {
    const isMatching = bcrypt.compare( bodyPassword, userPassword );
    return isMatching;
}

// Exports
export default comparePassword;