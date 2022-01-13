import { DELETE_TASK } from "./actionType"
import { ADD_TASK } from "./actionType"


export const deleteTask=(id)=>{
    return{
        type:DELETE_TASK,
        payload:id
    }
}
export const addTask=(NewTodo)=>{
    return{
        type:ADD_TASK,
        payload:NewTodo
    }
}