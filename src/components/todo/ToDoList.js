import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../../redux/todoSlice';

const ToDoList = () => {
  const todos = useSelector((state) => {
    if (state.todos.filter === 'active')
      return state.todos.todos.filter((t) => !t.completed);
    if (state.todos.filter === 'completed')
      return state.todos.todos.filter((t) => t.completed);
    return state.todos.todos;
  });

  const dispatch = useDispatch();

  return (
    <ul>
      {todos?.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
          <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
