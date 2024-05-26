import { useState } from "react";

const Questions = ({ que, handleButton }) => {
  // useState();

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
          onClick={() => handleButton(que.id)}
        >
          {que.question}
        </button>
      </h2>
      <div
        id="collapseOne"
        className={` "accordion-collapse collapse " ${
          que.show == true ? "show" : null
        }`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{que.answer}</div>
      </div>
    </div>
  );
};
export default Questions;
