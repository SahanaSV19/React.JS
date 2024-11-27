import styles from "./Display.module.css";

const Display = ({ equation }) => {
  return (
    <input type="text" className={styles.display} value={equation} readOnly />
  );
};

export default Display;
