function ItemList() {
  let foodItems = ["dal", "milk"];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <ItemList food={item}></ItemList>
      ))}
    </ul>
  );
}

export default ItemList;
