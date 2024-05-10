import css from "./CreateButton.module.css";

const CreateButton = ({ value }) => {
  return <button className={`${css.myButton} `}>{value}</button>;
};

export default CreateButton;
