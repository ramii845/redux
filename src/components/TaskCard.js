import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {deleteTask} from '../redux1/action';
import {addTask} from '../redux1/action';
import { ADD_TASK } from '../redux1/actionType';

const TaskCard = ({task}) => {
    const dispatch = useDispatch();
    const[NewTodo,setNewTodo]=useState();
    const handlechange=event=>setNewTodo(event.target.value);
    const handClick=()=>dispatch({
        type:ADD_TASK,
        payload:{
            label :NewTodo }
    })
    return (
        <div>
            <input value={NewTodo} onChange={handlechange} type="text"/>
            <button onClick={handClick}>ADD TODO</button>
           <h1>{task.action}</h1>  
           <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button> 
        </div>
    )
}

export default TaskCard
