import React from 'react';
import {act, render, screen} from '@testing-library/react';
import TodoList from './TodoList';
import {todos$} from '../state/todos';

describe('TodoList Component', () => {
  it('renders an empty list initially', () => {
    render(<TodoList/>);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('renders a list of todos from the stream', () => {
    const mockTodos = [
      {id: '1', task: 'Task 1', completed: false},
      {id: '2', task: 'Task 2', completed: true},
    ];

    render(<TodoList/>);

    act(() => {
      todos$.next(mockTodos);
    });

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});
