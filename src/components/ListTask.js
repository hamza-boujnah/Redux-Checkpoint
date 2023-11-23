// src/components/ListTask.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [showDone, setShowDone] = useState(true);

  const filteredTasks = showDone
    ? tasks
    : tasks.filter((task) => !task.isDone);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone).length;

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showDone}
            onChange={() => setShowDone(!showDone)}
          />
          Show Done Tasks
        </label>
      </div>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;




