import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Items from "./components/Items";

function App() {
  let todoItems = [
    {
      task: "go to college",
      date: "26/01/2024",
    },
    {
      task: "get milk ",
      date: "26/01/2023",
    },
  ];

  return (
    <center className="todo-container m-3">
      <AppName />
      <AddToDo />
      <Items todoItems={todoItems}></Items>
    </center>
  );
}

export default App;

{
  /* <ToDoItem1 task={"Hw-1"} date={"26/01/2024"}></ToDoItem1>
<ToDoItem1 task={"Hw-2"} date={"26/01/2024"}></ToDoItem1> */
}
