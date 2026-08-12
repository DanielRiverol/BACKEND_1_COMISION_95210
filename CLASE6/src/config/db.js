import mongoose from "mongoose";
import { config } from "./config.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Conectado a Mongo Atlas");
  } catch (error) {
    console.error("No se puede establecer la coneccion", error.message);
  }
};
