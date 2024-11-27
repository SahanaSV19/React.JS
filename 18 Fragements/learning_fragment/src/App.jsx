import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Itemslist from "./components/Itemslist";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = ["Dal", "Green vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];
  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextToShow = textStateArr[1];
  // console.log(setTextToShow);
  // let [textToShow, setTextToShow] = useState("Food Item Entered by user");
  let [foodItems, setFoodItems] = useState([]);
  const handleOnKeyDown = (event) => {
    // console.log(event.key);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItemsList = [...foodItems, newFoodItem];

      // console.log(newItemsList);

      setFoodItems(newItemsList);
      console.log(newFoodItem);
    }
  };
  const handleBuyButton = (foodItem) => {
    console.log(`${foodItem} being bought.`);
  };
  return (
    <>
      <Container>
        <h1>Healthy food</h1>
        <FoodInput handleOnChange={handleOnKeyDown} />
        <ErrorMessage foodItems={foodItems} />
        <Itemslist foodItems={foodItems} handleBuyButton={handleBuyButton} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default App;
