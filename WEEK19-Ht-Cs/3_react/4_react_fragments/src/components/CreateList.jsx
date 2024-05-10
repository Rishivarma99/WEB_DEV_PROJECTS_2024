import styles from "./CreateList.module.css";

function CreateList({ food }) {
  //  destructering props
  // let { food } = props;

  // console.log(styles);
  return (
    <li className={` list-group-item ${styles["r-List"]}  `}>
      <span className={`${styles["r-Span"]}`}>{food}</span>
    </li>
  );
}

export default CreateList;
