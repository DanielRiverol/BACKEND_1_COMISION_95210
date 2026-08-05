import express from "express";
import RoutingDetector from "./middlewares/detector.js";
import userRoutes from "./routes/userRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

// Settings
const app = express();

// Middlewares
app.use(express.json()); //middleware nativo de express
app.use(express.urlencoded({ extended: true }));
// mid eprnalozzado
app.use(RoutingDetector);
// Routes
app.use("/api/users", userRoutes)
app.use("/api/services", serviceRoutes)

// Run server
export default app