import express from "express"
import empresaRoutes from "./routes/empresas.js"
import usuariosRoutes from "./routes/empresas.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/empresas", (empresaRoutes))
app.get("/usuarios", (usuariosRoutes))

app.post("/login", (req, res) => {
    const { email, senha } = req.body
    res.send(email + ` e ` + senha)
})

app.listen(8800)