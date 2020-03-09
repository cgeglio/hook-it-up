import React, { useState, useContext } from 'react';
import { GroceryContext } from "./App";

const ListForm = () => {
  const [item, editItem] = useState('');
  const [count, editCount] = useState('');
  const { addItem } = useContext(GroceryContext);

  const handleChange = event => {
    return event.target.name === 'item' ? editItem(event.target.value) : editCount(event.target.value)
  }

  const updateList = event => {
    event.preventDefault();
    addItem({item: item, count: count})
    editItem('');
    editCount('');
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Item name..."
        name="item"
        value={item || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Quantity..."
        name="count"
        value={count || ''}
        onChange={handleChange}
      />
      <button onClick={updateList}>Submit</button>
    </form>
  )
}



export default ListForm;
