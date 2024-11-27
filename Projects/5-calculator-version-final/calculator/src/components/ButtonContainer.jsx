import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ setEquation, equation, handleOnclick }) => {
  let Buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles["buttons-container"]}>
      {Buttons.map((button) => (
        <button
          key={button}
          value={button}
          className={styles.button}
          onClick={handleOnclick}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
