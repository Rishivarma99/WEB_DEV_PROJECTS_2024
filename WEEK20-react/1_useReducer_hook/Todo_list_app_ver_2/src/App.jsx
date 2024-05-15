// IMPORTED TODOITEMS FROM CONTEXT
// Using useReducer

import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Items from "./components/Items";
import { useReducer, useState } from "react";
import WelecomeMessage from "./components/WelcomeMessage";
import { TodoItems } from "./store/todo-items-store";

const reducerFunction = (intialState, action) => {
  let newTodoItems = intialState;

  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...intialState,
      { task: action.payload.itemName, date: action.payload.itemDueDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    console.log("hi");
    newTodoItems = intialState.filter(
      (item) => item.task != action.payload.itemToDelete
    );
  }
  return newTodoItems;
};

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

  let [todoItems, dispachFunction] = useReducer(reducerFunction, []);

  let handleAddButton = (itemName, itemDueDate) => {
    // create a obj
    let actionObject = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      },
    };
    dispachFunction(actionObject);
  };

  let handleDeleteItem = (itemToDelete) => {
    let actionObject = {
      task: "DELETE_ITEM",
      payload: {
        itemToDelete: itemToDelete,
      },
    };
    dispachFunction(actionObject);
  };

  return (
    <TodoItems.Provider
      value={{
        todoItems: todoItems,
        handleAddButton: handleAddButton,
        handleDeleteItem: handleDeleteItem,
      }}
    >
      <center className="todo-container m-3">
        <AppName />
        <AddToDo handleNewItem={handleAddButton} />
        <WelecomeMessage></WelecomeMessage>
        <Items></Items>
      </center>
    </TodoItems.Provider>
  );
}

export default App;
