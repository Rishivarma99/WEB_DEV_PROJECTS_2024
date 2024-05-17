// IMPORTED TODOITEMS FROM CONTEXT
// Using useReducer
// shifted all function to item-store

import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Items from "./components/Items";
import { useReducer, useState } from "react";
import WelecomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container m-3">
        <AppName />
        <AddToDo />
        <WelecomeMessage></WelecomeMessage>
        <Items></Items>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

// let todoItems1 = [
//   {
//     task: "go to college",
//     date: "26/01/2024",
//   },
//   {
//     task: "get milk ",
//     date: "26/01/2023",
//   },
// ];
