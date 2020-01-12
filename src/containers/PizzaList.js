import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  createPizzaLis = () => {
    return this.props.pizzas.map((pizza,index) => <Pizza key={index} pizza={pizza} editClick={this.props.editClick} /> )
  }

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
            this.createPizzaLis()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
