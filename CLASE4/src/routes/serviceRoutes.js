import { Router } from "express";
import { mostrarTodos } from "../controllers/serviceControllers.js";

const serviceRoutes = Router();

serviceRoutes.get("/", mostrarTodos);

export default serviceRoutes