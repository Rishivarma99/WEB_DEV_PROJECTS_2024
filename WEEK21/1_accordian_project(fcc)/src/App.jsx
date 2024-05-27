import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Question from "./components/Question";
import { useState } from "react";
import QuestionsContainer from "./components/QuestionsContainer";
import SelectButton from "./components/SelectButton";
import data from "./store/data.js"; // imported data

function App() {
  let [toShow, setToShow] = useState([]);
  let [ms, setms] = useState(true);

  const handleMultiSelection = () => {
    setms(!ms);
  };

  const handleButton = (que) => {
    console.log(que);
    let newToShow = toShow;

    if (!ms) {
      if (newToShow.includes(que.id)) {
        newToShow = toShow.filter((id) => id != que.id);
      } else {
        newToShow = [...que.id];
      }
      console.log(newToShow);
    } else {
      if (!toShow.includes(que.id)) {
        newToShow = [...toShow, que.id];
      } else {
        newToShow = toShow.filter((id) => id != que.id);
      }
    }
    setToShow(newToShow);
    console.log(newToShow);
  };

  return (
    <>
      <center>
        {/* <button
          type="button"
          className="btn btn-secondary selection-btn"
          onClick={() => setms(!ms)}
        >
          {ms == true ? "multi section on" : "multi section of"}
        </button> */}
        <SelectButton
          ms={ms}
          handleMultiSelection={handleMultiSelection}
        ></SelectButton>
        <QuestionsContainer>
          {data.map((que) => (
            <Question
              que={que}
              handleButton={handleButton}
              toShow={toShow}
              key={que.id}
            ></Question>
          ))}
        </QuestionsContainer>
      </center>
    </>
  );
}

export default App;

// {data.map((que) => (
//   <Questions
//     que={que}
//     handleButton={handleButton}
//     key={que.id}
//   ></Questions>
// // ))}
