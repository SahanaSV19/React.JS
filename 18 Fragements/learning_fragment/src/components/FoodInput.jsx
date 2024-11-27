import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter food Item here..."
        onKeyDown={handleOnChange}
        className={styles.foodInput}
      />
    </div>
  );
};

export default FoodInput;
