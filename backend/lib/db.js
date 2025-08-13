import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error occured while connecting to the database");
    process.exit(1);
  }
};
