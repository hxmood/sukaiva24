import mongoose from "mongoose"

let isConnected = false
const connectMongoDB = async () => {

    try {
         mongoose.connect(process.env.MONGODB_URI,{
            dbName: "suffa_mehfil",
        })
        isConnected = true
        console.log("mongodb is connected");
    } catch (error) {
        console.log("mongodb is not connected",error)
    }
}

export default connectMongoDB