import { Router } from "express";
import { actualizar, borrar, crear, mostrarTodos, motrarPorId } from "../controllers/serviceControllers.js";

const serviceRoutes = Router();

serviceRoutes.get("/", mostrarTodos);

serviceRoutes.get("/:id", motrarPorId);

serviceRoutes.post("/", crear);

serviceRoutes.put("/:id", actualizar);

serviceRoutes.delete("/:id", borrar);

export default serviceRoutes