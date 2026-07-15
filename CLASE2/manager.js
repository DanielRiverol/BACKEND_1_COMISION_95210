import crypto from "crypto"


export default class Manager {
    constructor(users) {
        this.users = users
        this.nextId =  crypto.randomUUID()
    }
// condicion ? true : false
    obtenerTodos() {
        return this.users
    }
    buscarPorId(id) {
        return this.users.find(user => user.id == id)
    }
    crear(nombre, email) {
        const nuevoUsuario = {
            id: this.nextId,
            nombre,
            email
        }
        this.users.push(nuevoUsuario)
        
        return nuevoUsuario
    }
    modificar(id, nuevosDatos) {
        const usuario = this.buscarPorId(id)
        if (!usuario) {
            console.log("Usuario no encontrado.")
            return
        }
        Object.assign(usuario, nuevosDatos)
        console.log("Usuario actualizado.")
    }
    eliminar(id) {
        const indice = this.users.findIndex(user => user.id == id)
        if (indice == -1) {
            console.log("Usuario no encontrado")
            return
        }
        this.users.splice(indice,1)
        console.log("Usuario eliminado")
    }
}

