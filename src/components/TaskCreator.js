import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setnewTaskName] = useState("");
  const updateNewTaskValue = (e) => setnewTaskName(e.target.value);
  const createNewTask = () => {
    props.callback(newTaskName);
    setnewTaskName("");
  };
  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <button className="btn btn-primary m-2" onClick={createNewTask}>
        ADD
      </button>
    </div>
  );
};
