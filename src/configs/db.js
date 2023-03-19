import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("Connected to Database: MongoDB");
    } catch (error) {
        throw error;
    }
};
