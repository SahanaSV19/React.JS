import React from "react";
import styles from "./Items.module.css";
const Items = ({ foodItem, handleOnClick, activeItem }) => {
  return (
    <li
      className={` list-group-item ${
        activeItem.includes(foodItem) ? "active" : ""
      }`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => handleOnClick(foodItem)}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
