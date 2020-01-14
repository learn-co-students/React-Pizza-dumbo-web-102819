import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state={
    pizzas: [],
    id: '',
    topping: "",
    size: "",
    vegetarian: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(r=>r.json())
    .then(pizzasArr=> {
      this.setState({
        pizzas: pizzasArr
      })
    })
  }
  handleClick=(id) => {
    let foundPizza=this.state.pizzas.find((pizza) => {
      return pizza.id === id
    })
    this.setState({
      id: id,
      topping: foundPizza.topping,
      size: foundPizza.size,
      vegetarian: foundPizza.vegetarian
    })
    
  }
  handleTopping=(event) => {
    this.setState({
      topping: event.target.value
    })
    
  }
  handleSize=(event) => {
    this.setState({
      size: event.target.value
    })
  }
  handleVeg=() => {
    
    this.setState({
      vegetarian: !this.state.vegetarian
    })
  }
  handleSubmit=() => {
      fetch(`http://localhost:3000/pizzas/${this.state.id}`, {
        method: "PATCH",
        headers: {
          'content-type': "application/json",
          "accept": 'application/json'
        },
        body: JSON.stringify({
          topping: this.state.topping,
          size: this.state.size,
          vegetarian: this.state.vegetarian
        })
      })
      .then(r=>r.json())
      .then(pizza => {
        let newPizzas=this.state.pizzas.filter((piz, index) => {
          return piz.id !== pizza.id
        })
           newPizzas.push(pizza)
           newPizzas.sort((pizza1, pizza2) => {
             return pizza1.id - pizza2.id
           })
           
           this.setState({
             pizzas: newPizzas
           })
      })
    
  }
  
  render() {
   
    return (
      <Fragment>
        <Header/>
        <PizzaForm topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} handleClick={this.handleClick} handleTopping={this.handleTopping} handleSize={this.handleSize} handleVeg={this.handleVeg} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
