import './App.css';
import {useSelector} from  'react-redux';

import { useDispatch } from 'react-redux';

import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Expenses from './Expenses';
import AddExpense from './AddExpense';
import Update from './Update';
import {useNavigate, Routes,  Route, Router, Link} from 'react-router'



function App(props) {
  
  let dispatch = useDispatch();
 
  const budget = useSelector(state => state.budget)
  const spent = useSelector(state =>state.spent);
  const remaining = budget - spent;

  useEffect(() =>{
    console.log("in useEffect, budget: " + budget);
  })

  
  function updateBudget (){
    console.log("In update budget")
    // let navigate = useNavigate();
    // navigate('/Update')
    
    
  }
  // const updateBudget = (e) =>{
      
  //     if (true){
  //       dispatch({
  //         type: "SET_BUDGET",
  //         payload: e.target.value,
  //     })
  //   }
  // }

  return (
    <div className="App">
   
    
      <h1>My Budget Planner</h1>
      <div className="main-container">
        
        <h3 className= "budget">Budget: ${budget}  <button className = "updateBudget" type="button" onClick={updateBudget}>Update</button></h3>
        {/* <button variant="outlined">Open Simple Dialog</button> */}
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


