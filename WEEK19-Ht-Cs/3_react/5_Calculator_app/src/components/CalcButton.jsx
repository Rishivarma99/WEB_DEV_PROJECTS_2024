import css from "./CalcButton.module.css";
import CreateButton from "./CreateButton";

const CalcButton = ({ list, handleOnClick }) => {
  return (
    <div className={`${css.buttonContainer}`}>
      {list.map((value) => {
        return (
          <CreateButton
            key={value}
            value={value}
            handleOnClick={(event) => handleOnClick(event)}
          ></CreateButton>
        );
      })}
    </div>
  );
};

export default CalcButton;
