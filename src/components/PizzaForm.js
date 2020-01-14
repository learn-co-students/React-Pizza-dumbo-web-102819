import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(evt)=>{props.changePizzaTopping(evt.target.value)}} type="text" className="form-control" placeholder="Pizza Topping" value={
                props.pizza ? props.pizza.topping : ""
              }/>
        </div>
        <div className="col">
          <select onChange={(evt)=>{props.changePizzaSize(evt.target.value)}} value={props.pizza ? props.pizza.size : "placeholder"} className="form-control">
            <option disabled value="placeholder">Please Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(evt)=>{props.changePizzaVeg(true)}} className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza ? props.pizza.vegetarian : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(evt)=>{props.changePizzaVeg(false)}} className="form-check-input" type="radio" value="Not Vegetarian" checked={props.pizza ? !props.pizza.vegetarian : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.saveEditedPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
