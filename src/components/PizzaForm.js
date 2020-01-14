import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={props.handleTopping} className="form-control" placeholder={"Pizza Topping"} value={props.topping}/>
        </div>
        <div className="col">
          <select onChange={props.handleSize} value={props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onClick={props.handleVeg} className="form-check-input" type="radio" value="Vegetarian" checked={props.vegetarian? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onClick={props.handleVeg} className="form-check-input" type="radio" value="Not Vegetarian" checked={props.vegetarian? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
