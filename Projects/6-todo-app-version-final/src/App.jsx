import AddTodo from "./components/AddTodo";
import { useState } from "react";
import AppName from "./components/AppName";
import "./App.css";
import TodoItem from "./components/TodoItem";
function App() {
  const [todoList, setTodolist] = useState([
    { name: "Buy Milk", dueDate: "4/10/2023" },
    { name: "Goto College", dueDate: "4/10/2023" },
  ]);
  const onNewItem = (todo, dueDate) => {
    const newTodo = [
      ...todoList,
      {
        name: todo,
        dueDate: dueDate,
      },
    ];
    setTodolist(newTodo);
  };
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo onNewItem={onNewItem} />
        {todoList.map((todoItem, index) => (
          <TodoItem
            key={index}
            {...todoItem}
            setTodolist={setTodolist}
            todoList={todoList}
          />
        ))}
      </div>
    </center>
  );
}

export default App;
