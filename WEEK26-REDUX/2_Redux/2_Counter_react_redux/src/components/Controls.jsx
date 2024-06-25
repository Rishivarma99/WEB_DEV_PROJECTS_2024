import { useDispatch } from "react-redux";
import counterStore from "../store";

const Controls = () => {
  const counterDispatch = useDispatch();
  const handleDecrease = () => {
    counterDispatch({ type: "DECREMENT" });
  };
  const handleIncrease = () => {
    counterDispatch({ type: "INCREMENT" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-secondary btn-lg px-4"
        fdprocessedid="2hujif"
        onClick={handleDecrease}
      >
        -1
      </button>
      <button
        type="button"
        className=" btn btn-primary btn-lg px-4 gap-3"
        fdprocessedid="9663p9"
        onClick={handleIncrease}
      >
        +1
      </button>
    </div>
  );
};

export default Controls;
