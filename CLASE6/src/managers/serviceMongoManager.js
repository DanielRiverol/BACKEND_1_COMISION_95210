import { ServiceModel } from "../models/service.model.js";

export default class ServiceMongoManager {
  async obtenerTodos() {
    return await ServiceModel.find();
  }

  async buscarPorId(id) {
    return await ServiceModel.findById(id);
  }

  async crear(serviceData) {
    return await ServiceModel.create(serviceData);
  }

  async actualizar(id, newdata) {
    return await ServiceModel.findByIdAndUpdate(id, newData, { new: true });
  }

  async borrar(id) {
    const borrado = await ServiceModel.findByIdAndDelete(id);
    return borrado ? true : false;
  }
}
