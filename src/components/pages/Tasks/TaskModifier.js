import React, { useState } from "react";
export const TaskModifier = (props) => {
  const [modifiedTaskName, setmodifiedTaskName] = useState(props.task.name);
  const updateTaskValue = (e) => setmodifiedTaskName(e.target.value);
  const modifyTask = () => {
    props.callback(modifiedTaskName);
    setmodifiedTaskName(props.task.name);
  };
  return (
    props.task.selected && (
      <div>
        <input
          type="text"
          value={modifiedTaskName}
          onChange={updateTaskValue}
          className="input w-75"
        />

        <button className="btn button-background text-white mx-1 my-1 w-20" onClick={modifyTask}>
          Modify
        </button>

        
      </div>
    )
  );
};
