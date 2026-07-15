import express from "express"
import dotenv from "dotenv"
import Manager from "./manager.js"
import users from "./data.js"

dotenv.config()
const user = new Manager(users)

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    console.log(user.obtenerTodos())
    res.status(200).json({result: user.obtenerTodos()})
})

app.post("/crear", (req, res ) => {
    const {nombre, email} = req.body
    console.log(nombre, email)
    user.crear(nombre, email)
    res.status(200).json({mensaje:"creado"})
})

app.get("/usuarios/:id", (req, res) =>{ 
    const id = req.params.id
    const usuario = user.buscarPorId(id)
    console.log(usuario)
    res.status(200).json({mensaje: usuario})
})

app.get("/productos", (req, res) => {
    console.log(req.query.nombre)
    res.status(200).json({mensaje: "Datos recibidos a traves de la URL"})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})