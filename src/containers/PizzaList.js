import React, { Component } from 'react';
import Pizza from '../components/Pizza'
import uuid from 'uuid'
class PizzaList extends Component {


  renderPizza = () => {
    return this.props.pizzas.map((pizza, index) => {
      return <Pizza key={uuid()} pizza={pizza} handleClick={this.props.handleClick}/>
    }) }
  render() {
    
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderPizza()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
