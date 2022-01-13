import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {deleteTask} from '../redux1/action';
import {addTask} from '../redux1/action';
import { ADD_TASK } from '../redux1/actionType';

const TaskCard = ({task}) => {
    const dispatch = useDispatch();
    return (
        <div>
           <h1>{task.action}</h1>  
           <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button> 
        </div>
    )
}

export default TaskCard
