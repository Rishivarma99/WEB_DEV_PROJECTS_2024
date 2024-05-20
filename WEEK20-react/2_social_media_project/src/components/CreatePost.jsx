const CreatePost = () => {
  return (
    <form action="submit">
      <div className="mb-3">
        <label forhtml="formGroupExampleInput" className="form-label">
          Example label
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
        />
      </div>
      <div className="mb-3">
        <label forhtml="formGroupExampleInput2" className="form-label">
          Another label
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
        />
      </div>

      <button type="submit">submit</button>
    </form>
  );
};

export default CreatePost;
