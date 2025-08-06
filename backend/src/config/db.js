import mongoose from "mongoose";

export const connectDB = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected")
  } catch (error) {
    console.error("Error in connection", error);
    process.exit(1)
  }
}