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

    const RemoveExpense = (id, name, amt) =>{
        
        //hard coded for testing
        console.log("----Remove Expense Function----")
  
       
        // let value = id-1;
        console.log('----TEST-----', id, name, amt)
        // let name = expense[value].name;
        // let amt = expense[0].amt;
        let cost = {id, name, amt}
        console.log('Cost_name ', name)
        console.log('Cost_amt ', amt)
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
            <ol className="span_exp" key = {item.name} id={item.name}>
              {item.name}  ${item.amt} <button id="rm_exp" className="rm_exp" onClick={()=>RemoveExpense(item.id, item.name, item.amt)}>X</button><br></br></ol>
          </>
        );
      })}
    </div>
                        
            </div>
            
        </div>
    );
}

export default Expenses;