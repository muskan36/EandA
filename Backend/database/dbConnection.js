import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"DBone",
    })
    .then(() =>{
        console.log("Connected to database!");
    })
    .catch((error)=>{
        console.log("Some Error Ocurred While Connecting To Database:", error);
    });
};