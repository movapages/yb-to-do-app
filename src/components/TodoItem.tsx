import React from 'react';
import {Todo} from '../types/todo';
import {removeTodo, toggleTodo} from '../state/todos';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <span
          className={`text-sm ${todo.completed ? 'line-through text-gray-500' : ''}`}
        >
          {todo.task}
        </span>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded px-2 py-1"
        aria-label={`Delete ${todo.task}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
