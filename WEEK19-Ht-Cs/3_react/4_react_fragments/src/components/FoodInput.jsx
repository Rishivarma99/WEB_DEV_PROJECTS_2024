import css from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      className={`${css.input}`}
      onKeyDown={(event) => {
        handleOnKeyDown(event);
      }}
      placeholder="Enter food item here"
    />
  );
};

export default FoodInput;
