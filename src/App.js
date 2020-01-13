import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state = {
    id: 0,
    topping: '',
    size : '',
    vegetarian: false,
    pizzas: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }));
  }

  handleEdit = (pizza) => {
    this.setState({ 
      id: pizza.id,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian ? true : false
    });
  }

  handleChangeTopping = (e) => {
    this.setState({ 
      topping: e.target.value
     });
  }

  handleChangeSize = (e) => {
    this.setState({
      size: e.target.value
    });
  }

  handleChangeVeg = (e) => {
    let vegetarian = e.target.value === "Vegetarian" ? true : false;
    this.setState({ vegetarian });
  }

  handleSubmit = () => {
    
    if(this.state.topping !== "") {

      let newPizzas = [...this.state.pizzas];

      let newObj = {
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      };

      newPizzas = newPizzas.map(pizza => {
        if(pizza.id === this.state.id) Object.assign(pizza, newObj)
        return pizza;
      });
      
      fetch(`http://localhost:3000/pizzas/${this.state.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newObj)
      })
      .then(res => {
        if (res.ok) this.setState({ pizza: newPizzas });
      });

    }

  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          topping={this.state.topping}
          vegetarian={this.state.vegetarian}
          size={this.state.size}
          handleChangeSize={this.handleChangeSize}
          handleChangeVeg={this.handleChangeVeg}
          handleChangeTopping={this.handleChangeTopping}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList 
          handleEdit={this.handleEdit}
          pizzas={this.state.pizzas}
        />
      </Fragment>
    );
  }
}

export default App;
