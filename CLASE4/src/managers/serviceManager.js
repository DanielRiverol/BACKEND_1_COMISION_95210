import fs from "fs/promises";
import crypto from "crypto";

export default class ServiceManager {
    constructor() {
        this.path = "./src/data/services.json"
    } 
    async #leerServicios() {
        try{
            const data = await fs.readFile(this.path, "utf-8");
            return JSON.parse(data);
        } catch {
            return []
        }
    }

    async #guardarServicios(data) {
        await fs.writeFile(this.path, JSON.stringify(data, null, 2));
    }

    async obtenerTodos() {
        return this.#leerServicios();
    }

    async buscarPorId(id) {
        const services = await this.#leerServicios();
        return services.find(service => service.id === id);
    }
    
    async crear(serviceData) {
        const services = await this.#leerServicios();
        const newService = {
            id : crypto.randomUUID(),
            ... serviceData
        }
        services.push(newService);
        await this.#guardarServicios(newService)
        return newService
    }

    async update(id, newdata) {
        const services = await this.#leerServicios();
        const index = services.findIndex(service => service.id === id);
        if (index === -1) return null;
        services[index] = {
            ...services[index],
            ...newdata,
            id
        }
        await this.#guardarServicios(services);
        return services[index];
    }

}