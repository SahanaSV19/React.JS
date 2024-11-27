import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItem from "./components/TodoItem";
function App() {
  let list = [
    { name: "Buy Milk", dueDate: "4/10/2023" },
    { name: "Goto College", dueDate: "4/10/2023" },
    { name: "Eat Healthy food", dueDate: "4/10/2023" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo />
        {list.map((todoItem, index) => (
          <TodoItem key={index} {...todoItem} />
        ))}
      </div>
    </center>
  );
}

export default App;
