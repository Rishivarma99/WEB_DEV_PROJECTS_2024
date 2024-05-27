import { useState } from "react";
import "../App.css";
const Question = ({ que, handleButton, toShow }) => {
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
          toShow.includes(que.id) ? "show" : ""
        }`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{que.answer}</div>
      </div>
    </div>
  );
};
export default Question;
