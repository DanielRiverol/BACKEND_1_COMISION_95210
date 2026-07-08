import http from "http"

const PORT = 3000

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    if (req.url == "/" && req.method == "GET") {
        res.statusCode = 200
        res.end(JSON.stringify({"mensaje": "Bienvenido!!!"}))
    }
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})