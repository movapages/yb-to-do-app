import { todos$, addTodo, toggleTodo, removeTodo, todosStream } from './todos';

describe('todosService', () => {
  beforeEach(() => {
    todos$.next([]);
  });

  it('should initialize with an empty array of todos', () => {
    expect(todos$.getValue()).toEqual([]);
  });

  it('should add a new todo', () => {
    const newTask = 'Learn RxJS';
    addTodo(newTask);

    const todos = todos$.getValue();
    expect(todos.length).toBe(1);
    expect(todos[0].task).toBe(newTask);
    expect(todos[0].completed).toBe(false);
    expect(todos[0].id).toBeDefined();
  });

  it('should toggle a todo', () => {
    const newTask = 'Learn Jest';
    addTodo(newTask);

    const todoId = todos$.getValue()[0].id;
    toggleTodo(todoId);

    const todos = todos$.getValue();
    expect(todos[0].completed).toBe(true);

    toggleTodo(todoId);
    expect(todos$.getValue()[0].completed).toBe(false);
  });

  it('should remove a todo', () => {
    const newTask = 'Learn Testing';
    addTodo(newTask);

    const todoId = todos$.getValue()[0].id;
    removeTodo(todoId);

    const todos = todos$.getValue();
    expect(todos.length).toBe(0);
  });

  it('should emit updated todos through the observable', (done) => {
    const newTask = 'RxJS To-Do Testing';
    const subscription = todosStream.subscribe((todos) => {
      expect(todos.length).toBe(1);
      expect(todos[0].task).toBe(newTask);
      subscription.unsubscribe();
      done();
    });

    addTodo(newTask);
  });
});