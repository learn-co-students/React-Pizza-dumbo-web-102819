import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  mapAllPizzas = () => {
    return this.props.pizzas.map((pizza) => {
      // console.log(pizza)
      return <Pizza pizza={pizza} editPizza={this.props.editPizza} />
    })
  }

  render() {
    // console.log(this.props.pizzas)
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
          {this.mapAllPizzas()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
