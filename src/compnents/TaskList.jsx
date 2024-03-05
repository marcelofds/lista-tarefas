import React from "react";
import "./TaskList.css";
import { useState } from "react";

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  function addTask(newTask) {
    setTaskList([...taskList, newTask]);
  }
  return (
    <div>
      <h1>Task List</h1>
      <form>
        <input type="text" placeholder="Type task description" />
        <button className="add" type="submit" onClick={() => addTask()}>
          Add
        </button>
      </form>
      <div className="taskList">
        <div className="item">
          <span>Item example</span>
          <button> Del </button>
        </div>
        <div className="item done">
          <span>Item done example</span>
          <button> Del </button>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
