import mongoose from "mongoose";

const Client = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export const Data = mongoose.model("Data",Client)