import { Router } from "express";
import { crearTodo, editarTodo, eliminarTodo, obtenerTodos } from "../controllers/todo.controller.js";

let router = Router()

router.route('/todos')
.get(obtenerTodos)
.post(crearTodo)

router.route('/todos/:id')
.put(editarTodo)
.delete(eliminarTodo)

export default router