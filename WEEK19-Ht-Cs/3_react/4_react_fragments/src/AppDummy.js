
/* conditions : using ternary operator 
  way 1 : if statemnts : ternary 
  way 2 : using {} 
  way 3 : using logical operator 
*/

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AppDummy() {
  let foodItems = [];
  // let foodItems = ["Dal", "Green veg", "milk"];

  // way 1 :
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry </h3>;
  // }

  // way 2 :
  let emptyMessage =
    foodItems.length === 0 ? <h3>I am still hungry </h3> : null;

  // react frament
  return (
    <React.Fragment>
      <h1>Healthy Foods </h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungry </h3> : null} */}
      {/* {emptyMessage} */}
      {/* way 3  */}
      {foodItems.length === 0 && <h3>I am still hungry </h3>}

      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default AppDummy;
