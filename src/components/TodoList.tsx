import React, {useEffect, useState} from 'react';
import {todosStream} from '../state/todos';
import TodoItem from './TodoItem';
import {Todo} from '../types/todo';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const subscription = todosStream.subscribe(setTodos);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  );
};

export default TodoList;
