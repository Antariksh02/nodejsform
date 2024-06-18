import mongoose from "mongoose";

export const dbConnection = ()=>{

    try {
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection

        connection.on("connected",()=>{
            console.log("database is connected")
        })


    } catch (error) {
        console.log(error)
    }


}