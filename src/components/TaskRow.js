import React from "react";
import { TaskModifier } from "./TaskModifier";
export const TaskRow = (props) => {
  const deleteTask = () => {
    props.callback(props.task);
  };
  const updateTask = (modifiedName) => {
    props.updateTaskCallback(props.task, modifiedName);
  };
  return (
    <tr key={props.task.id}>
      <td>
        <input
          type="checkbox"
          checked={props.task.selected}
          onChange={() => props.selectTask(props.task)}
        />
        <TaskModifier
          task={props.task}
          callback={updateTask}
        ></TaskModifier>
      </td>
      <td>{props.task.name}</td>
      <td>
        <input
          type="checkbox"
          checked={props.task.done}
          onChange={() => props.toggleTask(props.task)}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={deleteTask}>
          Delete
        </button>
      </td>
    </tr>
  );
};
