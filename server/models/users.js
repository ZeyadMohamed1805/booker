// Modules & Variabels
import mongoose from "mongoose";
const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    reservations: { 
        type: [{
        hotelName: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        board: { type: String, required: true, enum: [ "Full Board", "Half Board" ] },
        price: { type: Number, required: true },
        }]
    },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

// Exports
export default mongoose.model("User", UserSchema);