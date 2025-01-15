import React, {useState} from 'react';
import {addTodo} from '../state/todos';

const TodoInput: React.FC = () => {
  const [task, setTask] = useState('');

  const handleAdd = (): void => {
    const trimmedTask = task.trim();
    if (!trimmedTask) return;
    addTodo(trimmedTask);
    setTask('');
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border rounded p-2 flex-grow"
        placeholder="Add a new task"
      />
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white px-4 py-4 rounded flex items-center justify-center"
        style={{width: '40px', height: '40px'}}
      >
        <span className="font-bold text-xl">+</span>
      </button>
    </div>
  );
};

export default TodoInput;
