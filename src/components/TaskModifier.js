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
        />
        <button className="btn btn-success mx-2" onClick={modifyTask}>
          Modify
        </button>
      </div>
    )
  );
};
