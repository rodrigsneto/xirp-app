import express from "express"
import { getEmpresas } from "../controllers/empresa.js"
import { getUsuarios } from "../controllers/usuarios.js"

const router = express.Router()

// router.get("/", getEmpresas)
router.get("/empresas", getEmpresas)
router.get("/usuarios", getUsuarios)

export default router