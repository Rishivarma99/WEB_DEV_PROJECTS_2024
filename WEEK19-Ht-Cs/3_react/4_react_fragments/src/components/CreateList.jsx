import styles from "./CreateList.module.css";
import { useState } from "react";

function CreateList({ food, bought, handleButton }) {
  return (
    <li
      className={` list-group-item ${styles["r-List"]} ${
        bought ? "active" : null // imp
      }`}
    >
      <span className={`${styles["r-Span"]}`}>{food}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleButton(event)}
      >
        Buy
      </button>
    </li>
  );
}

export default CreateList;
