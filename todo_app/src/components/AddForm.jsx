import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todo/TodoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addTask(task));
    setTask("");
  };
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(el) => setTask(el.target.value)} value={task} placeholder="add task"/>
        <button className="add">Add</button>
      </form>
    </div>
  );
}
