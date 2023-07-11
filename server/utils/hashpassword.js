// Modules & Variables
import bcrypt from "bcryptjs";

// Hashing The Passwords
const hashPassword = ( password ) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync( password, salt );

    return hashPassword;
}

// Exports
export default hashPassword;