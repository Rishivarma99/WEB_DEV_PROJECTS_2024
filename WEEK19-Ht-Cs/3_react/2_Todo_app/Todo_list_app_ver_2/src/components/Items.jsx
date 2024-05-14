import ToDoItem1 from "./ToDoItem1";
import css from "./Items.module.css";

const Items = ({ todoItems, onDeleteCLick }) => {
  return (
    <div className={`${css.itemsContainer}`}>
      {todoItems.map((object) => (
        <ToDoItem1
          key={object.task}
          task={object.task}
          date={object.date}
          onDeleteCLick={onDeleteCLick}
        ></ToDoItem1>
      ))}
    </div>
  );
};
export default Items;
