import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import TodoInput from './TodoInput';
import * as todosModule from '../state/todos';

jest.mock('../state/todos', () => ({
  addTodo: jest.fn(),
}));

describe('TodoInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call addTodo when a valid task is added', () => {
    const mockAddTodo = jest.spyOn(todosModule, 'addTodo');

    render(<TodoInput/>);

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByRole('button');

    fireEvent.change(input, {target: {value: 'New Task'}});
    fireEvent.click(addButton);

    expect(mockAddTodo).toHaveBeenCalledWith('New Task');
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('');
  });

  it('should not call addTodo when the input is empty', () => {
    const mockAddTodo = jest.spyOn(todosModule, 'addTodo');

    render(<TodoInput/>);

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByRole('button');

    fireEvent.change(input, {target: {value: ''}});
    fireEvent.click(addButton);

    expect(mockAddTodo).not.toHaveBeenCalled();
  });

  it('should not call addTodo when the input is only whitespace', () => {
    const mockAddTodo = jest.spyOn(todosModule, 'addTodo');

    render(<TodoInput/>);

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByRole('button');

    fireEvent.change(input, {target: {value: '   '}});
    fireEvent.click(addButton);

    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});