import AddTodo from "./components/AddTodo";
import { useState } from "react";
import AppName from "./components/AppName";
import "./App.css";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoList, setTodolist] = useState([
    { name: "Buy Milk", dueDate: "2024-12-04" },
    { name: "Goto College", dueDate: "2024-12-04" },
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
  const handleOnClick = (name) => {
    const updateTodolist = todoList.filter((todo) => todo.name !== name);
    setTodolist(updateTodolist);
  };
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo onNewItem={onNewItem} />
        {todoList.length == 0 && <WelcomeMessage />}
        {todoList.map((todoItem, index) => (
          <TodoItem key={index} {...todoItem} handleOnClick={handleOnClick} />
        ))}
      </div>
    </center>
  );
}

export default App;
