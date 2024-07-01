import { useSelector } from "react-redux";
import counterStore from "../store";
const Display = () => {
  // TO GET COUNTER STATE FROM STORE IN REDUX  :

  let counterObj = useSelector((state) => state.counter);
  const counter1 = counterObj.counterValue;
  return <p className="reduc-counter-display">{counter1}</p>;
};
export default Display;
