import mongoose, {Schema, model, models} from "mongoose";

const afterResult = new Schema({
    after: String
})

const afterPoints = models.publishAfter || model("publishAfter", afterResult)
export default afterPoints