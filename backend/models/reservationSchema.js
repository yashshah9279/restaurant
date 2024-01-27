import mongoose from "mongoose";
import validator from "validator";

const reservationSchema =new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength: [3,"First name must contain atleast 3 characters!"],
        maxlength: [30,"First name must not exceed  30 characters!"],
    },
    lastName:{
        type: String,
        required: true,
        minlength: [3,"last name must contain atleast 3 characters!"],
        maxlength: [30,"last name must not exceed  30 characters!"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail,"Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minlength: [10,"Phone number must contain only 10 digits!"],
        maxlength: [10,"Phone number must contain only 10 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },

})

export const Reservation =mongoose.model("Reservation",reservationSchema);