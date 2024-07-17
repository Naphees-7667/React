import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import { useState } from "react";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const handleDataChange = (todoName, dueDate) => {
    settodoItems([...todoItems, { name: todoName, value: dueDate }]);
  };

  const handleRemove = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    settodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleDataChange={handleDataChange} />
      {todoItems.length == 0 ? (
        <div className="completedTask">Enjoy Your Day!</div>
      ) : (
        <ItemsContainer todoItems={todoItems} handleRemove={handleRemove} />
      )}
    </center>
  );
}

export default App;
