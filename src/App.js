import React, { useState } from 'react';
import GroceriesContainer from './GroceriesContainer'
import ListForm from './ListForm'

export const GroceryContext = React.createContext();

export const App = () => {
  const [groceries, editGroceries] = useState([
    {item: "Apples", count: 5},
    {item: "Oranges", count: 8}
  ])

  const addItem = itemInfo => {
    console.log(itemInfo);
    editGroceries([...groceries, itemInfo])
  }

  const removeItem = itemInfo => {
    editGroceries(groceries.filter(g => g.item !== itemInfo.item))
  }

  return (
    <section>
      <h1>My Grocery List</h1>
      <GroceryContext.Provider
        value={ {addItem, removeItem, groceries} }
      >
      <ListForm />
      <GroceriesContainer />
      </GroceryContext.Provider>
    </section>
  )
}
