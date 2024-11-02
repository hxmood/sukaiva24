import mongoose, { Schema, model, models } from "mongoose";

const userData = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

const User = models.User || model("User", userData)
export default User