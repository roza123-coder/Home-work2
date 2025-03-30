import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo, deleteTodo } from "../../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    const text = prompt("Введите задачу:");
    if (text) dispatch(addTodo(text));
  };

  const handleDelete = (id) => {
    if (window.confirm("Удалить эту задачу?")) {
      dispatch(deleteTodo(id));
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={handleAdd}>Добавить</button>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
