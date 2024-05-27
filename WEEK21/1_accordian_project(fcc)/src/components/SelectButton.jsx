const SelectButton = ({ ms, handleMultiSelection }) => {
  return (
    <button
      type="button"
      className="btn btn-secondary selection-btn"
      onClick={() => handleMultiSelection()}
    >
      {ms == true ? "Multi Selection On" : "Multi Selection Of"}
    </button>
  );
};
export default SelectButton;
