import ServiceManager from "../managers/serviceManager.js";

const service = new ServiceManager();

export const mostrarTodos = async (req, res) => {
    const mostrar = await service.obtenerTodos();
    if (!mostrar) {
        res.status(400).json({message: " No hay servicios..."})
    }
    res.status(200).json(mostrar);
}