import { useSelector } from "react-redux";
import counterStore from "../store";
const Display = () => {
  // TO GET COUNTER STATE FROM STORE IN REDUX  :

  let mycountervalue = useSelector((state) => state.counter);
  return <p className="reduc-counter-display">{mycountervalue}</p>;
};
export default Display;
