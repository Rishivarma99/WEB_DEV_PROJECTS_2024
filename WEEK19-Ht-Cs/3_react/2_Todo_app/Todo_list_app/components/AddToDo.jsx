function AddToDo() {
  return (
    <div class="row r-row">
      <div class="col-6 =">
        <input type="text" placeholder="Enter Todo here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success r-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
