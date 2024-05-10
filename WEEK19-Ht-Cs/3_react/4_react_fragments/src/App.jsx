// ADDED USE STATE ANDALTERED A VARIABLE AND ASLO A ARRAY
// USED SPREAD OPERATOR

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import ItemList from "./components/ItemList";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

import { useState } from "react";

function App() {
  // let foodItems = ["dal", "milk", "badam", "roti"];
  // used [] to destruct the array for usestate hook
  let [textToShow, setTextState] = useState("Food item entered by user"); // using usestate to alter the variable

  let [foodItems, setFoodItems] = useState(["dal", "milk", "badam", "roti"]); //use usestate to add new elements to array

  const handleOnKeyDown = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]; //adding to new array
      event.target.value = "";
      setFoodItems(newItems);
      console.log(`Food value entered is ${newFoodItem}`);
    }

    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="r-heading">Food dishes </h1>

        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
        <ErrorMessage itemsArray={foodItems}></ErrorMessage>

        <ItemList itemsArray={foodItems}></ItemList>
      </Container>

      {/* <Container>
        <p>The above are the foods that are best to consume </p>
      </Container> */}
    </>
  );
}

export default App;
