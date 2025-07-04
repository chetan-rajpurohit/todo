import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const addTodoHandler = () => {
    if (inputRef.current.value.trim()) {
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = '';
    } else {
      return;
    }
  };
  return (
    <div className="add-todo-container">
      + add a new todo here <input ref={inputRef} className="add-todo-input"></input>
      <button className="button-87" onClick={() => addTodoHandler()}>Save</button>
    </div>
  );
};

export default AddTodo;
