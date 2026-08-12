import { ServiceModel } from "../models/service.model.js";

export default class ServiceMongoManager {
  async obtenerTodos() {
    return await ServiceModel.find();
  }

  async buscarPorId(id) {
    return await ServiceModel.findById(id);
  }
  // creamos el metodo para buscar por slug
  async buscarPorSlug(slug) {
    return await ServiceModel.findOne({ slug: slug });
  }
  
  async crear(serviceData) {
    return await ServiceModel.create(serviceData);
  }

  async actualizar(id, newData) {
    return await ServiceModel.findByIdAndUpdate(id, newData, { new: true });
  }

  async borrar(id) {
    const borrado = await ServiceModel.findByIdAndDelete(id);
    return borrado ? true : false;
  }
}
