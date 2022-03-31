import React from 'react';
import {useDispatch} from 'react-redux'





function AddExpense(props) {
    let dispatch = useDispatch();

    const Add = (e) =>{
        let cost_name = document.getElementById('ExpName').value
        let cost_amt = document.getElementById('ExpCost').value
        
        console.log('Cost_name ', cost_name)
        console.log('Cost_amt ', cost_amt)
        dispatch({
            type:"ADD_EXPENSE_NAME",
            payload: cost_name,
        })
        dispatch({
            type:"ADD_EXPENSE_AMT",
            payload: cost_amt,
        })
    }
    return (
        <div className="AddExpense">
            <h1>Add Expense</h1>
            <label>Expense Name: </label>
            <input type="text" id="ExpName" ></input>
            <label>Cost: </label>
            <input type="text" id="ExpCost"></input>
            <button onClick={Add}>Save</button>
        </div>
    );
}

export default AddExpense;