import { useSelector } from "react-redux";
import counterStore from "../store";
const Display = () => {
  // TO GET COUNTER STATE FROM STORE IN REDUX  :
  const obj2 = useSelector((state) => state.privacytoggle);
  const privacy = obj2;
  // console.log(privacy);

  let counterObj = useSelector((state) => state.counter);
  const counter1 = counterObj.counterValue;
  return privacy == true ? (
    <p className="reduc-counter-display">The counter is private !!!</p>
  ) : (
    <p className="reduc-counter-display">{counter1}</p>
  );
};
export default Display;
