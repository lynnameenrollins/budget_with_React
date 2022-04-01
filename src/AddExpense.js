import React from 'react';
import {useDispatch, useSelector} from 'react-redux'


function AddExpense(props) {
    let dispatch = useDispatch();
    const expense = useSelector(state => state.expense)
    let id = expense.length; //Defaulted with 2 items in the list
    const Add = (e) =>{
        let name = document.getElementById('ExpName').value
        let amt = document.getElementById('ExpCost').value
        id = ++id;
        let cost = {id, name, amt}
        // console.log('Cost_name ', name)
        // console.log('Cost_amt ', amt)
        // console.log(cost)
        dispatch({
            type:"ADD_EXPENSE",
            payload: cost,
        })
        dispatch({
            type:"ADD_EXPENSE_AMT",
            payload: amt,
        })
    }
    return (
        <div className="AddExpense">
            <h1>Add Expense</h1>
            <label>Expense Name: </label>
            <input type="text" id="ExpName" ></input>
            <label>Cost: $ </label>
            <input type="text" id="ExpCost"></input>
            <button className = "saveExpense" onClick={Add}>Save</button>
        </div>
    );
}

export default AddExpense;