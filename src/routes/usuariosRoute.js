import { Router } from "express";
import { actualizarData, eliminarData, getData, getDataById, saveData } from "../controllers/usuariosController.js";

const route = Router();

route.get("/", getData);
route.get("/:id", getDataById);
route.post("/", saveData);
route.put("/:id", actualizarData);
route.delete("/:id", eliminarData);

export default route;