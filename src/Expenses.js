import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup'



function Expenses(props) {
    const expense = useSelector(state => state.expense)
    let array = [];
    for (let i=0; i< expense.length; i++) {
    console.log('Expense Item [',i,']: ' , expense[i])
    }

    let dispatch = useDispatch();

    const RemoveExpense = (id) =>{
        
        //hard coded for testing
        console.log("----Remove Expense Function----")
  
       
        let value = id-1;
        console.log('----TEST-----', value)
        let name = expense[value].name;
        let amt = expense[value].amt;
        let cost = {name, amt}
        // console.log('Cost_name ', name)
        // console.log('Cost_amt ', amt)
        console.log('payload: ', cost)
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
            <div>
      {expense.map(item => {
        return (
          <>
            <span key = {item.id} id={item.name}>
              {item.name} $ {item.amt} <button id="rm_exp" className="rm_exp" onClick={()=>RemoveExpense(item.id)}>X</button><br></br></span>
          </>
        );
      })}
    </div>
            {/* <table className = "expense-table">
                <tr id="line">
                {expense.map(expense =>(<ol id="listed_exp" className = "expense_item" key={expense}>
                <td id = "expense_name">{expense.name}  </td>  
                <td id= "expense_cost">${expense.amt} </td>
                <td><button id="rm_exp" className="rm_exp" onClick={RemoveExpense}>X</button></td></ol>))}
                </tr>
            </table>    */}
     
               
            </div>
            
        </div>
    );
}

export default Expenses;