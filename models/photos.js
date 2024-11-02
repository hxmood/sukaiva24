import mongoose, {Schema, model, models} from "mongoose";

const newimage = new Schema({
    url: String
})

export const imageLinks = models.Images || model("Images", newimage)

