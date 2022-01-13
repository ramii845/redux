import {DELETE_TASK} from "./actionType";
import {ADD_TASK} from "./actionType";

const init={
    tasks:[
       { id:Math.random(),action:"wake up",isDone:true},
       { id:Math.random(),action:"study",isDone:false},
    ]
}


const reducer=(state=init,{type,payload})=>{
switch (type) {
    case DELETE_TASK:
        return{
            ...state,
            tasks:state.tasks.filter((el)=>el.id!==payload),
        }
        case ADD_TASK:
            return {
                ...state,
                tasks:[...state.tasks,action.payload],
            }

    default:
        return state;
}

};
export default reducer;