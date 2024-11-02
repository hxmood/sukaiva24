import mongoose, { Schema, model, models } from "mongoose";

const resultTypes = new Schema({
        res: String,
        category: String,
    first: {
        name: String,
        team: String,
        grade: String,
        marks: Number,
    },

    second: {
       secName: String,
       secTeam: String,
       secGrade: String,
       secMarks: Number
    },

    third: {
        thrName: String,
        thrTeam: String,
        thrGrade: String,
        thrMarks: Number
    },

    anotherGrades :[{
        addName: String,
        addTeam: String,
        addGrade : String,
        addMarks: Number
    }]


},
)

const resultModels = models.Result || model("Result", resultTypes)

export default resultModels