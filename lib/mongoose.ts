import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("mongo not found");
  if (isConnected) return console.log("already connected");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("success connect mongo");
  } catch (error) {
    console.error(error);
  }
};
