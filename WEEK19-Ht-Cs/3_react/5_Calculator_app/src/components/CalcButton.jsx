import css from "./CalcButton.module.css";
import CreateButton from "./CreateButton";

const CalcButton = ({ list }) => {
  return (
    <div className={`${css.buttonContainer}`}>
      {list.map((value) => {
        return <CreateButton key={value} value={value}></CreateButton>;
      })}
    </div>
  );
};

export default CalcButton;
