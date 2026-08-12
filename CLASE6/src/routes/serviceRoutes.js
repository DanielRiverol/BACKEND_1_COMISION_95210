import { Router } from "express";
import { actualizar, borrar, crear, mostrarTodos, mostrarUnico } from "../controllers/serviceControllers.js"; //llamamos al metodo mostrarUnico

const serviceRoutes = Router();

serviceRoutes.get("/", mostrarTodos);

// serviceRoutes.get("/:id", motrarPorId); 
// ya no buscamos solo por :id. Ahora podemos hacer por :id y por :slug en la misma ruta
serviceRoutes.get("/:identificador", mostrarUnico);

serviceRoutes.post("/", crear);

serviceRoutes.put("/:id", actualizar);

serviceRoutes.delete("/:id", borrar);

export default serviceRoutes