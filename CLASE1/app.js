import Manager from "./manager.js"
import users from "./data.js"

const usuario = new Manager(users)
//const ver = usuario.obtenerTodos()
//const ver = usuario.buscarPorId(2)
usuario.crear("Carlos","carlos@mail.com")
usuario.eliminar(1)
const ver = usuario.obtenerTodos()
console.log(ver)