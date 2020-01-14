import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  state = {
    pizzas: [], 
    editingPizza: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(r => r.json())
    .then((response) => {
      // console.log(response)
      this.setState({
        pizzas: response
      })
    })
  }

  editPizza = (pizzaArg) => {
    
    this.setState({
      editingPizza: pizzaArg
    })
  }

  crudPizza = (pizza) => {

    // call from PizzaForm inside a handleClick to edit the pizza

    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(pizza)
    })
    .then(r => r.json())
    .then((response)=> {
      
      // console.log(response)

      let newArr = this.state.pizzas
      newArr.splice([response.id-1], 1, response)
      // console.log(newArr)
      // replace in memory pizzas array
      // maybe slice? 
      this.setState({
        pizzas: newArr
      })

    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editingPizza} crudPizza={this.crudPizza} />
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
