import React from "react"




export default class Pizza extends React.Component {
handleClick = () => {
  this.props.editPizza(this.props.pizza)
}
render() {
  return (
    <tr>
      <td>{this.props.pizza.topping}</td>
      <td>{this.props.pizza.size}</td>
      <td>{this.props.pizza.vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={this.handleClick} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}


  
}
// const handleClick = (props) => {
//   props.editPizza(props.pizza)
// }


// const Pizza = (props) => {
//   // console.log(this.props)
//   // console.log(props)
 
//   return(
//     <tr>
//       <td>{props.pizza.topping}</td>
//       <td>{props.pizza.size}</td>
//       <td>{props.pizza.vegetarian ? "Yes" : "No"}</td>
//       <td><button onClick={handleClick} type="button" className="btn btn-primary">Edit Pizza</button></td>
//     </tr>
//   )
// }



// export default Pizza
