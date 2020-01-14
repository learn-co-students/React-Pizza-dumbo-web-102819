import React from "react"

const Pizza = (props) => {

  const handleClick = () => {
    let newPizza = {...props.pizza}
    props.changePizzaBeingEdited(newPizza)
  }

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "Yes" : "No" }</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
