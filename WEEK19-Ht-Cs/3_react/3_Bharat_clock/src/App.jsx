import ClockName from "../components/ClockName";
import ClockPara1 from "../components/ClockPara1";
import ClockTime from "../components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <center className="clock-container">
      <ClockName></ClockName>
      <ClockPara1></ClockPara1>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
