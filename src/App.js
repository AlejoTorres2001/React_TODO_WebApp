import React, { useState, useEffect } from "react";
import { TaskRow } from "./components/pages/Tasks/TaskRow";
import { TaskBanner } from "./components/pages/Tasks/TaskBanner";
import { TaskCreator } from "./components/pages/Tasks/TaskCreator";
import { VisibilityControl } from "./components/pages/Tasks/VisibilityControl";
import NavegationBar from "./components/NavegationBar";
function App() {


  //USE STATES
  const [userName, setuserName] = useState("Alejo");
  const [taskItems, settaskItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState(true);


  //USE EFFECTS
  useEffect(() => {
    let data = localStorage.getItem("tasks");

    if (data != null) {
      settaskItems(JSON.parse(data));
    }
    else {
      setuserName("Alejo");
      setshowCompleted(true);
      settaskItems([
        { id: 0, name: "Example Task", done: false, selected: false },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  //Task functions
  const createNewTask = (taskName) => {
    const lastTaskID = () => { //TODO make functional approach
      let lastid = 0;
      for (let index = 0; index < taskItems.length; index++) {
        const task = taskItems[index];
        if (task.id > lastid) {
          lastid = task.id;
        }
      }
      return lastid;
    };
    if (!taskItems.find((t) => t.name === taskName)) {
      settaskItems([
        ...taskItems,
        { id: lastTaskID() + 1, name: taskName, done: false, selected: false },
      ]);
    }
  };

  const toggleTask = (task) =>
    settaskItems(
      taskItems.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t))
    );

  const selectTask = (task) => {
    let tasks = [...taskItems]; //task=taskItems doesnt work
    for (let index = 0; index < tasks.length; index++) {
      const t = tasks[index];
      if (t.name === task.name) {
        t.selected = !t.selected;
      }
    }
    settaskItems(tasks);
  };

  const deleteTask = (task) => {
    settaskItems(taskItems.filter((t) => t.name !== task.name));
  };

  const updateTask = (task, newname) => {
    const findAndModify = () => {
      let tasks = [...taskItems]; // task=taskItems doesnt worK
      for (let index = 0; index < tasks.length; index++) {
        const t = tasks[index];
        if (t.name === task.name) {
          t.name = newname;
        }
      }
      return tasks;
    };
    settaskItems(findAndModify());
  };

  const taskTableRows = (done) => //done param makes it reusable
    taskItems
      .filter((task) => task.done === done)
      .map((task) => (
        <TaskRow
          task={task}
          key={task.id}
          toggleTask={toggleTask}
          callback={deleteTask}
          updateTaskCallback={updateTask}
          selectTask={selectTask}
        ></TaskRow>
      ));

  return (
    <div>
      <NavegationBar/>
      <TaskBanner tasks={taskItems} userName={userName}></TaskBanner>
      <TaskCreator callback={createNewTask}></TaskCreator>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Modify</th>
            <th>Description</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(false)}</tbody>
      </table>

      <div className="bg-secondary text-white p-2 text-center">
        <VisibilityControl
          description="completed tasks"
          isChecked={showCompleted}
          callback={(checked) => setshowCompleted(checked)}
        ></VisibilityControl>
      </div>
      {/* completed tasks */}
      {showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(true)}</tbody>
        </table>
      )}
    </div>
  );
}
export default App;
