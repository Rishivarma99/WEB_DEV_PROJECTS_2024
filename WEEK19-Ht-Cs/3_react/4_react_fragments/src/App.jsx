import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import ItemList from "./components/ItemList";

function App() {
  
  return (
    <>
      <h1>Food dishes </h1>

      <ErrorMessage></ErrorMessage>

      <ItemList></ItemList>
    </>
  );
}

export default App;
