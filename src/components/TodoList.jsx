import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";

function TodoList() {
  const selector = useSelector((state) => state.todos);
  console.log(selector);
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(removeTodo(id));
  }
  return (
    <div className="todo-list-container">
      <ul>
        {selector.map((todo) => {
          return <li key={todo.id}>{todo.todoItem} <button onClick={() => onDeleteHandler(todo.id)} className="remove-button">x</button></li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
