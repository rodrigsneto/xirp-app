import express from "express"
import empresaRoutes from "./routes/empresas.js"
import usuariosRoutes from "./routes/usuariosRoutes.js"
import cors from "cors"
import {db} from "./db.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/empresas", (empresaRoutes))
app.get("/usuarios", (usuariosRoutes))

app.post("/login", (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha_hash = ?"
    const values = [
        req.body.email,
        req.body.senha,
    ]
    db.query(sql, values, (err, data) => {
        if(data.length == 0) return res.json("Falha com Login");
        return res.json(data)
    })
})

app.listen(8800)