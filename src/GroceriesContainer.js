import React, { useContext } from 'react';
import ListItem from "./ListItem"
import { GroceryContext } from "./App";

const GroceriesContainer = () => {
  const { groceries, removeItem } = useContext(GroceryContext);
  return groceries.map(item => {
    return (<ListItem
      key={`${item.item}-${item.count}`}
      name={item.item}
      number={item.count}
      removeItem={removeItem}
    />)
  })
}

export default GroceriesContainer
