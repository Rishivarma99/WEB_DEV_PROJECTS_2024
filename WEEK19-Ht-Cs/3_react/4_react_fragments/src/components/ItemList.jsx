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
          bought={activeItems.includes(item)}
          handleButton={(event) => handleOnClick(item, event)}
        ></CreateList>
      ))}
    </ul>
  );
}

export default ItemList;
