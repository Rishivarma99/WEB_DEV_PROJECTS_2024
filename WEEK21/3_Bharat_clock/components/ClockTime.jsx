import { useState } from "react";
import { useEffect } from "react";

function ClockTime() {
  // let date = `${presentDate.getDate()} / ${
  //   presentDate.getMonth() + 1
  // } / ${presentDate.getFullYear()} `;
  // let time = `${presentDate.getHours()}:${presentDate.getMinutes()}:${presentDate.getSeconds()} `;

  // const getAmorPm = (presentDate) => {
  //   if (presentDate.getHours() > 12) {
  //     return "PM";
  //   } else {
  //     return "AM";
  //   }
  // };

  const [time, settime] = useState(new Date());
  useEffect(() => {
    let intervalId = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      console.log("useeffect return");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="r-time">
      This is the curent time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()};
    </p>
  );
}

export default ClockTime;
