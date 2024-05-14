import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Items from "./components/Items";
import { useState } from "react";

function App() {
  let todoItems1 = [
    {
      task: "go to college",
      date: "26/01/2024",
    },
    {
      task: "get milk ",
      date: "26/01/2023",
    },
  ];

  let [todoItems, addItems] = useState(todoItems1);

  let handleAddButton = (itemName, itemDueDate) => {
    console.log(`name : ${itemName}`);
    console.log(`name : ${itemDueDate}`);
    const newTodoItem = [...todoItems, { task: itemName, date: itemDueDate }];
    addItems(newTodoItem);
  };

  let handleDeleteItem = (itemToDelete) => {
    console.log(itemToDelete);
    //  use filter method
    let newTodoItem = todoItems.filter((item) => item.task != itemToDelete);
    addItems(newTodoItem);
  };

  return (
    <center className="todo-container m-3">
      <AppName />
      <AddToDo handleNewItem={handleAddButton} />
      {todoItems.length === 0 && <h1>Enjoy your day</h1>}
      <Items todoItems={todoItems} onDeleteCLick={handleDeleteItem}></Items>
    </center>
  );
}

export default App;

{
  /* <ToDoItem1 task={"Hw-1"} date={"26/01/2024"}></ToDoItem1>
<ToDoItem1 task={"Hw-2"} date={"26/01/2024"}></ToDoItem1> */
}
