import Todo from "../database/models/todo.js"

export const obtenerTodos = async(req,res)=>{
    try{
        let todos = await Todo.find()

        res.status(200).json(todos)

    }catch(err){
        console.log(err)
        res.status(400).json({
            message: 'Hubo un error con el servidor. Intenta nuevamente'
        })
    }
}


export const crearTodo = async (req,res) => {
    try{
        let TodoNuevo = new Todo(req.body)
        await TodoNuevo.save()

        res.status(200).json({
            message: 'Todo añadida con exito'
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            message: 'Hubo un error con el servidor. Intenta nuevamente'
        })
    }
}

export const editarTodo = async (req,res)=>{
    try{
        let todo = await Todo.findById(req.params.id)

        if(!todo){
            res.json(404).json({
                message: 'El color no existe'
            })
        }

        res.status(200).json(color)
    }catch{
        res.status(400).json({
            message: 'Hubo un error con el servidor. Intenta nuevamente'
        })
    }
}

export const eliminarTodo = async (req,res) => {
    try{
        let todo = await Todo.findById(req.params.id)

        if(!todo){
            res.json(404).json({
                message: 'la todo no existe'
            })
        }

        await Todo.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message:'La todo se elimino con exito'
        })
    }catch(err){
        res.status(400).json({
            message: 'Hubo un error con el servidor. Intenta nuevamente'
        })
    }
}