import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setnewTaskName] = useState("");
  const updateNewTaskValue = (e) => setnewTaskName(e.target.value);
  const createNewTask = () => {
    props.callback(newTaskName);
    setnewTaskName("");
  };
  return (
    <div className="my-2">
      <input
        type="text"
        className="form-control "
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <div class="container">
        <div class="col-md-12 text-center">
        <button className="btn button-background text-white m-3 w-25" onClick={createNewTask}>
        ADD
      </button>
        </div>
    </div>
     
      
     
    </div>
  );
};
