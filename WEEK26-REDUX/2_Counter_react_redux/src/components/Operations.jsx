import { useDispatch } from "react-redux";
import PrivacyToggle from "./PrivacyToogle";
import { useState } from "react";
import Display from "./Display";
import { counterActions } from "../store";

const Operation = () => {
  const counterDispatch = useDispatch();

  const [value, setValue] = useState();
  const handleAdd = () => {
    // console.log(value);
    if (!isNaN(parseInt(value))) {
      counterDispatch(
        counterActions.add({
          value: parseInt(value),
        })
      );
    }
    setValue("");
  };
  const handleSubtract = () => {
    // console.log(value);
    if (!isNaN(parseInt(value))) {
      counterDispatch(
        counterActions.subtract({
          value: parseInt(value),
        })
      );
    }
    setValue("");
  };

  return (
    <>
      <div className="operation-div">
        <input
          type="number"
          placeholder="enter a number to add or subtract"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" className="btn btn-success" onClick={handleAdd}>
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          SUBTRACT
        </button>
        <PrivacyToggle></PrivacyToggle>
      </div>
    </>
  );
};

export default Operation;
