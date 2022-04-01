import './App.css';
import {useSelector} from  'react-redux';

import { useDispatch } from 'react-redux';

import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Expenses from './Expenses';
import AddExpense from './AddExpense';
import Update from './Update';




function App(props) {
  
  let dispatch = useDispatch();
 
  const budget = useSelector(state => state.budget)
  const spent = useSelector(state =>state.spent);
  const remaining = budget - spent;

  useEffect(() =>{
    console.log("in useEffect, budget: " + budget);
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
    let save_button = document.getElementById("Save")
    let update_button = document.getElementById("Update")
    let save_label = document.getElementById("SaveLabel")
    let new_budget_box = document.getElementById("NewBudget")
    let new_budget =document.getElementById("NewBudget").value
    update_button.removeAttribute("hidden");
    save_button.setAttribute("hidden", "hidden");
    save_label.setAttribute("hidden", "hidden");
    new_budget_box.setAttribute("hidden", "hidden");
    console.log("New Budget : $", new_budget)
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
        
        <h3 className= "remaining">Remaining: ${remaining}</h3>
        <h3 className= "spent">Spent: ${spent} </h3>
    </div>
    
    
    <Expenses/>
    <AddExpense/>
   
    </div>
      

  
  );
}

//This will subscribe to redux store changes
//Anytime store is updated
// const mapStateToProps = state =>{
//   return{
//     data: state
//   }
// }
 
// //Used to dispatch action(s) to the store
// const mapDispatchToProps = dispatch => {
//   return{
//     changeColor: (color) => dispatch({
//       type: "CHANGE_COLOR", payload:color
//     }
//   )
// }
// }
//This will connect a react component to a redux store
// export default  connect(mapStateToProps, mapDispatchToProps)(App);
export default App;


