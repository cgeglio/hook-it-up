import React from "react"
import "./ListItem.css"

const ListItem = (props) => {
  return (
    <article>
      <h2>Item: {props.name}</h2>
      <p>Quantity: {props.number}</p>
      <button onClick={(event) => props.removeItem({item: props.name, count: props.number})}>Remove</button>
    </article>
  )
}

export default ListItem;
