// import mongoose from "mongoose"

// let isConnected = false
// const connectMongoDB = async () => {

//     try {
//          mongoose.connect(process.env.MONGODB_URI,{
//             dbName: "suffa_mehfil",
//         })
//         isConnected = true
//         console.log("mongodb is connected");
//     } catch (error) {
//         console.log("mongodb is not connected",error)
//     }
// }

// export default connectMongoDB

import mongoose from "mongoose";

const connection = {};

const connectMongoDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI,{
                  dbName: "suffa_mehfil",
              });
    connection.isConnected = db.connections[0].readyState;

    console.log('mongo connected');
    

  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};
export default connectMongoDB