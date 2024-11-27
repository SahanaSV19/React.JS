import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let [equation, setEquation] = useState("");
  const handleOnclick = (event) => {
    if (event.target.value === "C") {
      setEquation("");
    } else if (event.target.value === "=") {
      setEquation(eval(equation));
    } else {
      let wholeEquation = equation + event.target.value;
      setEquation(wholeEquation);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display equation={equation} />
      <ButtonContainer
        setEquation={setEquation}
        equation={equation}
        handleOnclick={handleOnclick}
      />
    </div>
  );
}

export default App;
