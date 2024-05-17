// to create a array todo items context

import { createContext } from "react";
import { useReducer } from "react";

export let TodoItems = createContext({
  todoItems: [],
  deleteItem: () => {},
  addItem: () => {},
}); // to declare a array

const reducerFunction = (curTodoItems, action) => {
  let newTodoItems = curTodoItems;

  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...curTodoItems,
      { task: action.payload.itemName, date: action.payload.itemDueDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItems = curTodoItems.filter(
      (item) => item.task != action.payload.itemToDelete
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  let [todoItems, dispachFunction] = useReducer(reducerFunction, []);

  let handleAddButton = (itemName, itemDueDate) => {
    // create a obj
    let actionObject = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispachFunction(actionObject);
  };

  let handleDeleteItem = (itemToDelete) => {
    let actionObject = {
      type: "DELETE_ITEM",
      payload: {
        itemToDelete,
      },
    };
    dispachFunction(actionObject);
  };
  return (
    <TodoItems.Provider
      value={{
        todoItems,
        handleAddButton,
        handleDeleteItem,
      }}
    >
      {" "}
      {children}
    </TodoItems.Provider>
  );
};

export default TodoItemsContextProvider;
