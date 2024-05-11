// imp : use readonly in input tag and set value

import css from "./CalcDisplay.module.css";

const CalcDisplay = (props) => {
  let intialInput = props.intialInput;

  return (
    <input
      type="text"
      className={`${css.display}`}
      // placeholder={intialInput}
      value={intialInput}
      readOnly
    />
  );
};

export default CalcDisplay;
