import css from "./ToDoItem1.module.css";

function ToDoItem1(props) {
  let todoTask = props.task;
  let todoDate = props.date;

  return (
    <div className="row r-row">
      <div className="col-6 =">{todoTask}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className={` ${css.mybutton} btn btn-danger`}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem1;
