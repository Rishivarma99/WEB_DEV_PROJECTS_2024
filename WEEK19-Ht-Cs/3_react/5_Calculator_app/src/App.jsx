import "bootstrap/dist/css/bootstrap.min.css";

import css from "./App.module.css";
import CalcDisplay from "./components/CalcDisplay";
import CalcButton from "./components/CalcButton";
import { useState } from "react";

function App() {
  let calculate = (expression) => {
    const parts = expression.split(/([+-/*])/); // Split at operators
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[2]);
    const operator = parts[1];

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2; // Handle division by zero later
      default:
        throw new Error("Invalid operator");
    }
  };

  let [intialInput, setIntput] = useState("");

  let handleOnClick = (event) => {
    if (event.target.innerText == "=") {
      let result = calculate(intialInput);
      intialInput = result;
      setIntput(intialInput);
    } else if (event.target.innerText == "C") {
      intialInput = "";
      setIntput(intialInput);
    } else {
      intialInput += event.target.innerText;
      setIntput(intialInput);
    }
  };

  let list = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={`${css.calculator}`}>
        <CalcDisplay intialInput={intialInput}></CalcDisplay>

        <CalcButton
          list={list}
          handleOnClick={(event) => handleOnClick(event)}
        ></CalcButton>
      </div>
    </>
  );
}

export default App;
