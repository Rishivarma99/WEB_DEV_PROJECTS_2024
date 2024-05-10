function CreateList(props) {
  return (
    <li className="list-group-item" key={props.food}>
      {props.food}
    </li>
  );
}

export default CreateList;
