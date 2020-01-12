import React, { Component } from 'react';

class PizzaForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id:this.props.pizzaId,
      topping:this.props.topping,
      size:this.props.size,
      vegetarian:this.props.vegetarian
    }
  }



  handleToppingChange = (event) => {
    let toppingName = event.target.value
    this.setState({
      topping:toppingName
    }, () => console.log(this.state.topping))
  }

  handleSizeChange = (event) => {
    let pizzaSize = event.target.value
    this.setState({
      size:pizzaSize
    }, () => console.log(this.state.size))
  }

  handleVegetarian = (event) => {
    let isVegetarian = event.target.value === "Vegetarian" ? true : false
    this.setState({
      vegetarian:isVegetarian
    }, () => console.log(this.state.vegetarian))
  }

  handleClick = () => {
    this.props.onSubmitClick(this.state)
  }

  render() {
    return (
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping} onChange={this.handleToppingChange} />
        </div>
        <div className="col">
          <select value={this.state.size} onChange={this.handleSizeChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian} onChange={this.handleVegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian} onChange={this.handleVegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;