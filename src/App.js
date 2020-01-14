import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    pizzaBeingEdited: null
  }

  saveEditedPizza = () => {
    let foundIndex = null
    let pizzaEdit = this.state.pizzaBeingEdited
    this.state.pizzas.forEach((pizza, i) => {
      if(pizza.id == pizzaEdit.id){foundIndex = i}
    })
    let newPizzas = []
    if(foundIndex == 0){
      newPizzas = [pizzaEdit, ...this.state.pizzas.slice(1)]
    } else {
      newPizzas = [...this.state.pizzas.slice(0, foundIndex), pizzaEdit, ...this.state.pizzas.slice(foundIndex+1)]
    }
    fetch(`http://localhost:3000/pizzas/${pizzaEdit.id}`, {
      method: "PATCH",
      headers: {
        "content-type":"application/json",
        "accept":"application/json"
      },
      body: JSON.stringify({
        topping: pizzaEdit.topping,
        size: pizzaEdit.size,
        vegetarian: pizzaEdit.vegetarian
      })
    })
    .then(r => r.json())
    .then((response) => {
      console.log(response)
      this.setState({
        pizzas: newPizzas,
        pizzaBeingEdited: null
      })
    })
  }

  changePizzaBeingEdited = (pizza) => {
    this.setState({
      pizzaBeingEdited: pizza
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then((pizzas) => {
      this.setState({
        pizzas: pizzas
      })
    })
  }

  changePizzaTopping = (newTopping) => {
    let newPizza = this.state.pizzaBeingEdited
    newPizza["topping"] = newTopping
    this.setState({
      pizzaBeingEdited: newPizza
    })
  }

  changePizzaSize = (newSize) => {
    let newPizza = this.state.pizzaBeingEdited
    newPizza["size"] = newSize
    this.setState({
      pizzaBeingEdited: newPizza
    })
  }

  changePizzaVeg = (newVeg) => {
    let newPizza = this.state.pizzaBeingEdited
    newPizza["vegetarian"] = newVeg
    this.setState({
      pizzaBeingEdited: newPizza
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaBeingEdited} 
                   changePizzaTopping={this.changePizzaTopping}
                   changePizzaSize={this.changePizzaSize}
                   changePizzaVeg={this.changePizzaVeg}
                   saveEditedPizza={this.saveEditedPizza}/>
        <PizzaList pizzas={this.state.pizzas} changePizzaBeingEdited={this.changePizzaBeingEdited}/>
      </Fragment>
    );
  }
}

export default App;
