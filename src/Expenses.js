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
    
        console.log('In Remove Expense')
        let exp_amt = expense[0].amt
        dispatch({
            type:"REMOVE",
            payload: exp_amt,
        })
    }
    return (
        <div className ="ExpenseList">
            <h1>List of Expenses</h1>

            {/* <ol>
                {expense.name.map(expense =>(<li key={expense.name}>{expense.name}</li>))}
            </ol> */}
            <div className="expense-container">           
                <h3>{expense[0].name}:  ${expense[0].amt} <button value='100' onClick={RemoveExpense}>X</button></h3>
                {/* <li><h1>{expense[1].name}:  ${expense[1].amt}</h1></li> */}
                 
               
            </div>
            
        </div>
    );
}

export default Expenses;