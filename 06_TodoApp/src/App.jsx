import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer";

function App() {

  const todoItems = [
    {
      name:'Buy Milk',
      value:'12/07/2024',
    },
    {
      name:'Go to Collage',
      value:'16/07/2024',
    },
    {
      name:'Go to Gym',
      value:'18/07/2023',
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <ItemsContainer todoItems={todoItems} />
    </center>
  );
}


export default App;