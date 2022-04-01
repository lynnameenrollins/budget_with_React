import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



function Expenses(props) {
    const expense = useSelector(state => state.expense)
    let array = [];
    for (let i=0; i< expense.length; i++) {
    console.log('Expense Item [',i,']: ' , expense[i])
    }

   
    let dispatch = useDispatch();

    const RemoveExpense = (e) =>{
        
        //hard coded for testing
        console.log("----Remove Expense Function----")
        let name = expense[0].name
        let amt = expense[0].amt
        let test = document.getElementById("expense_name")
        let value = test.value
        console.log('----TEST-----', test, "Value", value)
        
        let cost = {name, amt}
        console.log('Cost_name ', name)
        console.log('Cost_amt ', amt)
        console.log('payload: cost: ', cost)
        dispatch({
            type:"REMOVE_EXPENSE",
            payload: cost,
        })
        dispatch({
            type:"REMOVE_EXPENSE_AMT",
            payload: amt,
        })
    }
    return (
        <div className ="ExpenseList">
            <h1>List of Expenses</h1>

            <div className="expense-container"> 
            <table className = "expense-table">
                <tr>
                {expense.map(expense =>(<ol id="listed_exp" className = "expense_item" key={expense}>
                <td id = "expense_name">{expense.name}  </td>  
                <td id= "expense_cost">${expense.amt} </td>
                <td><button id="rm_exp" className="rm_exp" onClick={RemoveExpense}>X</button></td></ol>))}
                </tr>
            </table>   
     
               
            </div>
            
        </div>
    );
}

export default Expenses;