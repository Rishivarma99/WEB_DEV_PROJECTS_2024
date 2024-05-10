import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import ItemList from "./components/ItemList";

function App() {
  let foodItems = ["dal", "milk", "badam", "roti"];

  return (
    <>
      <h1 className="r-heading">Food dishes </h1>

      <ErrorMessage itemsArray={foodItems}></ErrorMessage>

      <ItemList itemsArray={foodItems}></ItemList>
    </>
  );
}

export default App;
