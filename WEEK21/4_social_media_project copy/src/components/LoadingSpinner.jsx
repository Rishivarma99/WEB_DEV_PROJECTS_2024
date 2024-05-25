const LoadingSpinner = () => {
  return (
    <center>
      <div
        className="spinner-grow"
        role="status"
        style={{ width: "6rem", height: "6rem", margin: "100px auto" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};
export default LoadingSpinner;
