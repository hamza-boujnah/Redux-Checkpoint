// src/components/AddTask.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    // Dispatch the addTask action with the new task
    dispatch(addTask({ id: Date.now(), description, isDone: false }));
    // Clear the input field
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
