import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {


constructor() {
  super();
  this.state = {
    pizzas:[],
    editedPizza:{}
  }
}


  componentDidMount() {
    this.getPizza()
  }

  getPizza = () => {
    fetch('http://localhost:3000/pizzas')
    .then(r => r.json())
    .then(pizzas => this.setState({pizzas:pizzas}))
  }

  editPizza = (pizza) => {
    this.setState({
      editedPizza:pizza
    }, () => console.log(this.state.editedPizza))
  }

  patchPizza = (pizza) => {

    console.log(pizza)
    fetch(`http://localhost:3000/pizzas/${pizza.id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify({
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      })
    })
    .then(r => r.json())
    .then(pizza => {
      console.log(pizza)
      this.getPizza()
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm key={this.state.editedPizza.id} onSubmitClick={this.patchPizza} topping={this.state.editedPizza.topping} size={this.state.editedPizza.size} vegetarian={this.state.editedPizza.vegetarian} pizzaId={this.state.editedPizza.id} />
        <PizzaList pizzas={this.state.pizzas} editClick={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
