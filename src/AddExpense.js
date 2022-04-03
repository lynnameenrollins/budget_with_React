import React from 'react';
import {useDispatch, useSelector} from 'react-redux'


function AddExpense(props) {
    let dispatch = useDispatch();
    const expense = useSelector(state => state.expense);
    const count = useSelector (state => state.count)


    console.log("count: ", count)
    // let id = expense.length; //Defaulted with 2 items in the list
    const Add = (e) =>{
        let name = document.getElementById('ExpName').value
        let amt = document.getElementById('ExpCost').value
        let id = count + 1;
        //To ensure no trailing decimals
        if (name == ''){
            name = 'undeclared'
            console.log('name not declared, set to undeclared')
        }
        amt=Number(amt);
        if (amt == ''){
            amt = 0;
        }
        
         amt=amt.toFixed(2);
        

        let cost = {id, name, amt}
        console.log('Cost_name ', name)
        console.log('Cost_amt ', amt)
        console.log(cost)
        dispatch({
            type:"ADD_EXPENSE",
            payload: cost,
        })
        dispatch({
            type:"ADD_EXPENSE_AMT",
            payload: amt,
        })
        dispatch({
            type:"INCREMENT_COUNTER",
            payload: id,
        })
    }
    return (
        <div className="AddExpense">
            <h1>Add Expense</h1>
            <label className = "expName">Expense Name: </label>
            <input type="text" id="ExpName" ></input>
            <label className = "expName">  Cost: $   </label>
            <input type="number" id="ExpCost" step=".01"></input>
            <button className = "saveExpense" onClick={Add}>Save</button>
        </div>
    );
}

export default AddExpense;