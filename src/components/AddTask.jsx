import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handelAdd } from "../redux1/action";
import Modal from 'react-modal';

const AddTask = () => {
  const [newaction, setNewaction] = useState("");
  const dispatch = useDispatch()

  let handelSubmit=(e)=>{
      e.preventDefault()
      let newActiontoAdd={
          id:Math.random(),
          action:newaction,
          isDone:false
      }
      dispatch(handelAdd(newActiontoAdd))
setNewaction("")

  }
  return (
    <div>
      <form onSubmit={handelSubmit}> 
        <input
          type="text"
          value={newaction}
          onChange={(e) => setNewaction(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTask;