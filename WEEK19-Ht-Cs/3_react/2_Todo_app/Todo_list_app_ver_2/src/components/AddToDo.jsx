import css from "./AddToDo.module.css";

function AddToDo() {
  return (
    <div className="row r-row">
      <div className="col-6 =">
        <input type="text" placeholder="Enter Todo here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success r-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
