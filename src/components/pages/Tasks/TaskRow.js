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
        <div className="form-check m-auto">
        <input
          type="checkbox"
          checked={props.task.selected}
          onChange={() => props.selectTask(props.task)
          }
          className="form-check-input m-auto"
        />
        </div>
        <div className="form-check ">

        <TaskModifier
          task={props.task}
          callback={updateTask}
          className="form-check-input"
        ></TaskModifier>
        </div>
      </td >
      <td className="text-center fs-3">{props.task.name}</td>
      <td>
        <div className="form-check">
        <input
          type="checkbox"
          checked={props.task.done}
          onChange={() => props.toggleTask(props.task)}
          className="form-check-input"
        />
        </div>
        
      </td>
      <td>
        <button className="btn btn-danger w-100" onClick={deleteTask}>
          Delete
        </button>
      </td>
    </tr>
  );
};
