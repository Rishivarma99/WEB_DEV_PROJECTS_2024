import css from "./CreateButton.module.css";

const CreateButton = ({ value, handleOnClick }) => {
  return (
    <button
      className={`${css.myButton} `}
      onClick={(event) => handleOnClick(event)}
    >
      {value}
    </button>
  );
};

export default CreateButton;
