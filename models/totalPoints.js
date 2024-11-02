import mongoose, {Schema, model, models} from "mongoose";

const publishPoints = new Schema({
    
        team: String,
        points: Number,
        after: Number
    
})

const pointsModel = models.totalPoints || model("totalPoints", publishPoints)
export default pointsModel
