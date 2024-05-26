import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Questions from "./components/Question";
import { useState } from "react";

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    show: false,
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    show: false,
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    show: false,
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
    show: false,
  },
];

function App() {
  let [Questions, setQuestions] = useState(data);
  let [toShow, setToShow] = useState([]);
  let [ms, setms] = useState(true);

  const handleButton = (que) => {
    console.log(que);
    let newToShow = toShow;

    if (!ms) {
      newToShow = [...que.id];
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
        <button
          type="button"
          className="btn btn-secondary selection-btn"
          onClick={() => setms(!ms)}
        >
          {ms == true ? "multi section on" : "multi section of"}
        </button>

        <div className="accordion accordion-main" id="accordionExample">
          {Questions.map((que) => {
            return (
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    onClick={() => handleButton(que)}
                  >
                    {que.question}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`"accordion-collapse collapse " ${
                    toShow.includes(que.id) ? "show" : null
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{que.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
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
