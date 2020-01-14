import React from "react"

export default class PizzaForm extends React.Component {

  state = {
    pizza: {}
  }

  // componentDidUpdate(


  //   // console.log(this.props)
  //   this.setState({
  //     pizza: this.props
  //   })
  // }

  
  handleChange = (event) => {

    this.setState({
      pizza: { 
        ...this.state.pizza, 
        [event.target.name]: event.target.value
      }
    })
    // console.log(event.target.name)
  }

  handleClick = () => {
    this.props.crudPizza(this.state.pizza)
  }

  conditionalID = () => {
    if (this.state.pizza.id !== this.props.pizza.id) {
      this.setState({
        pizza: this.props.pizza
      })
    }
  }

  toggleTrueFalse = (event) => {
    // console.log(event.target.name)
    if (event.target.name === "vegetarian") {
      this.setState({
        pizza: {
          ...this.state.pizza, 
          vegetarian: true
        }
      })
    } else if (event.target.name === "notvegetarian") {
      this.setState({
        pizza: {
          ...this.state.pizza, 
          vegetarian: false
        }
      })
    }
    // console.log(event.target.name)
    // console.log(this.state)
    // this.setState({
    //   pizza: {
    //     ...this.state.pizza,
    //     vegetarian: !this.state.pizza.vegetarian
    //   }
    // }, ()=> { console.log(this.state)} )
  }
  render() {
    // console.log("props", this.props)
    // console.log("state", this.state)
    this.conditionalID()
    return(
      <div className="form-row">
        <div className="col-5">
            <input name="topping" onChange={this.handleChange} type="text" className="form-control" placeholder="Pizza Topping" value={
                this.state.pizza.topping
              }/>
        </div>
        <div className="col">
          <select name="size" onChange={this.handleChange} value={this.state.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onClick={this.toggleTrueFalse} name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={this.state.pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onClick={this.toggleTrueFalse} className="form-check-input" name="notvegetarian" type="radio" value="Not Vegetarian" checked={!this.state.pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
}

// const PizzaForm = (props) => {
//   return(
//       <div className="form-row">
//         <div className="col-5">
//             <input type="text" className="form-control" placeholder="Pizza Topping" value={
//                 props.pizza.topping
//               }/>
//         </div>
//         <div className="col">
//           <select value={props.pizza.size} className="form-control">
//             <option value="Small">Small</option>
//             <option value="Medium">Medium</option>
//             <option value="Large">Large</option>
//           </select>
//         </div>
//         <div className="col">
//           <div className="form-check">
//             <input className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza.vegetarian}/>
//             <label className="form-check-label">
//               Vegetarian
//             </label>
//           </div>
//           <div className="form-check">
//             <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizza.vegetarian}/>
//             <label className="form-check-label">
//               Not Vegetarian
//             </label>
//           </div>
//         </div>
//         <div className="col">
//           <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
//         </div>
//       </div>

//   )
// }

// export default PizzaForm
