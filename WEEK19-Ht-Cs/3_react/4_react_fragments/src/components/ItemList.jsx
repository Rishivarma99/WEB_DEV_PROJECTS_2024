import CreateList from "./CreateList";

function ItemList({ itemsArray }) {
  return (
    <ul className="list-group">
      {itemsArray.map((item) => (
        <CreateList key={item} food={item}></CreateList>
      ))}
    </ul>
  );
}

export default ItemList;
