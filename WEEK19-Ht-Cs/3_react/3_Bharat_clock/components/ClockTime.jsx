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

  let presentDate = new Date();
  let date = `${presentDate.toLocaleDateString()}`;
  let time = `${presentDate.toLocaleTimeString()}`;

  return (
    <p className="r-time">
      This is the curent time : {date} - {time};
    </p>
  );
}

export default ClockTime;
