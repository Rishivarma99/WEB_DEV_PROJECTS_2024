import CreateList from "./CreateList";
import { useState } from "react";

function ItemList({ itemsArray }) {
  let [activeItems, setActiveItems] = useState([]);

  let handleOnClick = (item, event) => {
    // console.log(`${item} being bought`);
    // console.log(event);

    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {itemsArray.map((item) => (
        <CreateList
          key={item}
          food={item}
          bought={activeItems.includes(item)} // here after changing the activestate array complete list rerenders and using include array method we add class active to some items that nare bought
          handleButton={(event) => handleOnClick(item, event)} // handlebutton is a func that gets event as input and invoke handle on click function
        ></CreateList>
      ))}
    </ul>
  );
}

export default ItemList;
