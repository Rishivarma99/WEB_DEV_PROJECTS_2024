import "bootstrap/dist/css/bootstrap.min.css";

import css from "./App.module.css";
import CalcDisplay from "./components/CalcDisplay";
import CalcButton from "./components/CalcButton";

function App() {
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
        <CalcDisplay></CalcDisplay>

        <CalcButton list={list}></CalcButton>
      </div>
    </>
  );
}

export default App;
