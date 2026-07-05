import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

export const mongoDBConnection = async () => {

    const uri = process.env.DATABASE_CONNECTION_URL;

    if (!uri) {
        throw new Error("DATABASE_CONNECTION_URL is not defined");
    }
    try {
        await mongoose.connect(uri)
        console.log("MongoDB is connected")
    } catch (error) {
        console.error("MongoDB connection error", error)
    }
}

