import ServiceManager from "../managers/serviceManager.js";

const service = new ServiceManager();

export const mostrarTodos = async (req, res) => {
    const mostrar = await service.obtenerTodos();
    if (!mostrar) {
        res.status(400).json({message: " No hay servicios..."})
    }
    res.status(200).json(mostrar);
}

export const motrarPorId = async (req, res) => {
    const id = req.params.id
    console.log(id)
    const mostrar = await service.buscarPorId(id)
    if (!mostrar) {
        res.status(404).json({message:"Servicio no encontrado..."})
    }
    res.status(200).json(mostrar)
}

export const crear = async (req, res) => {
    const nuevoServicio = req.body;
    const mostrar = await service.crear(nuevoServicio)
    console.log(mostrar)
    res.status(200).json(mostrar)

}

export const actualizar = async (req, res) => {
    const id = req.params.id;
    const serviceUpdate = req.body;
    if (!id || !serviceUpdate) {
        res.status(400).json({message:"Faltan datos..."})
    }
    const mostrar = await service.actualizar(id, serviceUpdate);
    res.status(200).json({mostrar})
}

export const borrar = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({message:"Por favor ingrese un id."})
    }
    const search = await service.buscarPorId(id);
    if (!search) {
        res.status(400).json({message: "No se encuentra el usuario."})
    }
    await service.borrar(id);
    res.status(200).json(await service.obtenerTodos())
}