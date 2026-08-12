import ServiceRepository from "../repositories/serviceRepository.js";
// importamos mongoose
import mongoose from "mongoose";
export default class ServiceServices {
  constructor(service = new ServiceRepository()) {
    this.service = service;
  }

  async obtenerTodos() {
    const services = await this.service.obtenerTodos();
    if (services.length === 0) {
      throw new Error("Servicios no encontrados...");
    }
    return services;
  }

  // async obtenerPorId(id) {
  //   const service = await this.service.obtenerPorId(id);
  //   if (!service) {
  //     throw new Error("No se encuentra el servicio...");
  //   }
  //   return service;
  // }

  //Método unificado para reemplazar 'obtenerPorId'
  async obtenerUnico(identificador) {
    let service;
    // comprueba que lo que estamos recibiendo es un id de mongo y si no lo es busca por slug
    if (mongoose.isValidObjectId(identificador)) {
      service = await this.service.obtenerPorId(identificador);
    } else {
      service = await this.service.obtenerPorSlug(identificador);
    }
    if (!service) {
      throw new Error("No se encuentra el servicio...");
    }
    return service;
  }

  async crear(nuevoServicio) {
    const { nombre, turnos, precio } = nuevoServicio;
    if (!nombre || !turnos || !precio) {
      throw new Error("Faltan datos, completar...");
    }
    const creado = await this.service.crear(nuevoServicio);
    return creado;
  }

  async actualizar(id, serviceUpdate) {
    const service = await this.service.obtenerPorId(id);
    if (!id) {
      throw new Error("Por favor ingrese un id...");
    }
    if (!service) {
      throw new Error("No se encuentra el servicio...");
    }
    const serviceNew = await this.service.actualizar(id, serviceUpdate);
    return serviceNew;
  }

  async borrar(id) {
    const service = await this.service.obtenerPorId(id);
    if (!service) {
      throw new Error("No se encuentra el servicio...");
    }
    this.service.borrar(id);
    return await this.service.obtenerTodos();
  }
}
