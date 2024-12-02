import { useState } from "react";
import { MdAdd } from "react-icons/md";
import styles from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTodoChange = (event) => setTodo(event.target.value);
  const handleDateChange = (event) => setDueDate(event.target.value);

  const handleAddClick = () => {
    if (todo && dueDate) {
      onNewItem(todo, dueDate);
      setTodo("");
      setDueDate("");
    }
  };
  return (
    <div className="container ">
      <div className={`row ${styles["kg-row"]} `}>
        <div className="col-6 ">
          <input
            required
            type="text"
            placeholder="Enter todo here"
            value={todo}
            onChange={handleTodoChange}
          />
        </div>
        <div className="col-4 ">
          <input
            required
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2 ">
          <button
            type="button"
            className={`btn btn-success ${styles["kg-button"]}  `}
            onClick={handleAddClick}
          >
            Add <MdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
