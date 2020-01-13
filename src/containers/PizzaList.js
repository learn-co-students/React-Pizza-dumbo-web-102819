import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  
  renderPizzaList() {
    return this.props.pizzas.map(pizza => { 
      return <Pizza handleEdit={this.props.handleEdit} pizza={pizza} />
    });
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
          {this.renderPizzaList()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
