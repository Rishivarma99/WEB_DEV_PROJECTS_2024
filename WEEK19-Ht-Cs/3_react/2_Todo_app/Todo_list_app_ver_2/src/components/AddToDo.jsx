// WE WILL BE USING ONCHANGE TO GET THE VALUE FROM INPUT

import { useState } from "react";
import css from "./AddToDo.module.css";
import { Collapse } from "bootstrap";

function AddToDo({ handleNewItem }) {
  let [todoName, setTodoName] = useState("");
  let [dueDate, setDueDate] = useState("");

  let handleTodoName = (event) => {
    setTodoName(event.target.value);
  };
  let handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  let handleAddButton = () => {
    handleNewItem(todoName, dueDate);
    // SETTING BOTH INPUT BLACK AFTER PASSING FUNCTUONS
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="row r-row">
      <div className="col-6 =">
        <input
          type="text"
          placeholder="Enter Todo here"
          onChange={handleTodoName}
          value={todoName} // again value is assigned whish is emepty
        />
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDueDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success r-button"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
