import Items from "./Items";

import { act, useState } from "react";
function Itemslist({ foodItems, handleBuyButton }) {
  let [activeItem, setActiveItem] = useState([]);

  const handleOnClick = (foodItem) => {
    let newItemList = [...activeItem, foodItem];
    setActiveItem(newItemList);
    handleBuyButton(foodItem);
  };

  return (
    <ul className="list-group">
      {foodItems.map((foodItem) => (
        <Items
          foodItem={foodItem}
          handleOnClick={handleOnClick}
          activeItem={activeItem}
          key={foodItem}
        />
      ))}
    </ul>
  );
}

export default Itemslist;
