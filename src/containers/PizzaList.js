import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  genPizzas = () => {
    return this.props.pizzas.map((pizza, i) => {
      return <Pizza key={i} pizza={pizza} changePizzaBeingEdited={this.props.changePizzaBeingEdited}/>
    })
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
            this.genPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
