import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/todo/TodoSlice";
import { markAsDone } from "../features/todo/TodoSlice";
import "./Todo.css";

export default function Todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
  };

  const markAsDoneHandler = (id) => {
    dispatch(markAsDone(id));
  };
  return (
    <>
    <h4 style={{textAlign:"center"}}>React Redux</h4>
      <div className="todo">
        <h3>Todo App</h3>
        <AddForm />

        <div className="items">
          {todos.map((todo) => {
            return (
              <div className="list" key={todo.id}>
                <p
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "none",
                  }}
                >
                  {todo.task}
                </p>

                <div className="options">
                  <i
                    className="fa-solid fa-check"
                    onClick={() => markAsDoneHandler(todo.id)}
                  ></i>

                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteHandler(todo.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
