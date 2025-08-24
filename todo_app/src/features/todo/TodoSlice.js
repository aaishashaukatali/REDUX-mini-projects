import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    {
      id: 123,
      task: "First Todo Task",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
        return todo;
      });
    },
  },
});

export const { addTask, deleteTask, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
