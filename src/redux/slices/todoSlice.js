import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: ((state, action) => {
            state.push({ id: nanoid(), todoItem: action.payload })
        }),
        removeTodo: ((state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        })
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
