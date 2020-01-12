import React, { Component } from 'react';

class Pizza extends Component {
  
  handleClick = () => {
    this.props.editClick(this.props.pizza)
  }

  render() {
    return (
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.props.pizza.vegetarian ? "Yes" : "No"}</td>
        <td><button type="button" className="btn btn-primary" onClick={this.handleClick} >Edit Pizza</button></td>
      </tr>
    );
  }
}

export default Pizza;

