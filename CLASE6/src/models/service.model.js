import mongoose from "mongoose";
import { slugGenerator } from "../utils/slugGenerator.js";
const serviceSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  turnos: { type: Number, required: true },
  slug: String,
  precio: { type: Number, required: true },
});

serviceSchema.pre("save", function () {
  if (this.isModified("nombre")) {
    this.slug = slugGenerator(this.nombre);
  }
});

export const ServiceModel = mongoose.model("services", serviceSchema);
