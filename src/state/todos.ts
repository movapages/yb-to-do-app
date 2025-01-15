import { BehaviorSubject } from 'rxjs';
import { Todo } from '../types/todo';

const initialTodos: Todo[] = [];

export const todos$ = new BehaviorSubject<Todo[]>(initialTodos);

export const addTodo = (task: string) => {
  const newTodo: Todo = {
    id: Date.now().toString(),
    task,
    completed: false,
  };
  todos$.next([...todos$.getValue(), newTodo]);
};

export const toggleTodo = (id: string) => {
  const updatedTodos = todos$.getValue().map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  todos$.next(updatedTodos);
};

export const removeTodo = (id: string) => {
  const updatedTodos = todos$.getValue().filter((todo) => todo.id !== id);
  todos$.next(updatedTodos);
};

export const todosStream = todos$.asObservable();

