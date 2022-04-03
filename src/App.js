import './App.css';
import {useSelector} from  'react-redux';

import { useDispatch } from 'react-redux';

import { useEffect} from 'react';

import Expenses from './Expenses';
import AddExpense from './AddExpense';

function App(props) {
  
  let dispatch = useDispatch();
 
  let budget = useSelector(state => state.budget)
  let spent = useSelector(state =>state.spent);
  let count = useSelector(state=>state.count)
  let remaining = budget - spent;
  let ovspt = document.getElementById("overspent");
  let rmn = document.getElementById("remaining");
  
  budget = Number(budget);
  budget = budget.toFixed(2);
  spent=spent.toFixed(2);
  remaining=remaining.toFixed(2);
 
  useEffect(() =>{
    console.log("in useEffect, budget: " + budget);
    console.log("remaining = ", remaining)
  
    if (remaining <= 0){
      console.log('----overspent----')
      ovspt.removeAttribute("hidden")
      rmn.setAttribute("hidden", "hidden");
    } 
    else if (count >=3){
      rmn.removeAttribute("hidden")
      ovspt.setAttribute("hidden", "hidden");
    }

  })
    
  function updateBudget (){
    
    let save_button = document.getElementById("Save")
    let update_button = document.getElementById("Update")
    let save_label = document.getElementById("SaveLabel")
    let new_budget = document.getElementById("NewBudget")
    
    save_button.removeAttribute("hidden");
    save_label.removeAttribute("hidden");
    new_budget.removeAttribute("hidden");
    update_button.setAttribute("hidden", "hidden");
   
  }
  function toggle (){
    console.log("In update budget")
    let save_button = document.getElementById("Save");
    let update_button = document.getElementById("Update");
    let save_label = document.getElementById("SaveLabel");
    let new_budget_box = document.getElementById("NewBudget");
    let new_budget =document.getElementById("NewBudget").value;
    update_button.removeAttribute("hidden");
    save_button.setAttribute("hidden", "hidden");
    save_label.setAttribute("hidden", "hidden");
    new_budget_box.setAttribute("hidden", "hidden");
    console.log("New Budget : $", new_budget);
    new_budget = Number(new_budget);
    new_budget = new_budget.toFixed(2);
    console.log("new budget: ", new_budget);
    
    dispatch({
      type:"SET_BUDGET",
      payload: new_budget,
  })
  }

  return (
    <div className="App">
   
    
      <h1>My Budget Planner</h1>
      <div className="main-container">
        
        <h3 className= "budget">Budget: ${budget}  <button className = "updateBudget" type="button" id="Update" onClick={updateBudget}>Update
        </button><br></br>
        <label id ="SaveLabel" hidden={true}>Enter Updated Budget ($): </label><input type="text" id="NewBudget" hidden={true} ></input>
        <button className = "saveButton" hidden={true} id="Save" onClick={toggle}>Save</button>
        </h3>
        
        <h3 className= "remaining" id="remaining" hidden={false}>Remaining: ${remaining}</h3>
        <h3 className= "overspent" hidden ={true} id ="overspent">Remaining: ${remaining} <br></br>You have overspent!!</h3>
        
        <h3 className= "spent">Spent: ${spent} </h3>
    </div>
    
    <Expenses/>
    <AddExpense/>
   
    </div>
  );
}


export default App;


