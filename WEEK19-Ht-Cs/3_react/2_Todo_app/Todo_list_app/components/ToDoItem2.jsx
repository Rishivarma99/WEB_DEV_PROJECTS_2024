function ToDoItem2() {
  let todoTask = "hi";
  let todoDate = "hi";

  return (
    <div class="row r-row">
      <div class="col-6 =">{todoTask}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger r-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem2;
