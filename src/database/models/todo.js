import mongoose, {Schema} from "mongoose";

const todoSchema = new Schema({
    todo:{
        type:String
    },
    completado:{
        type:Boolean,
        default: false,
    }

})

const Todo = mongoose.model('todo',todoSchema)
export default Todo