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
        
    
        console.log('----TEST-----', id, name, amt)
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
              <table className ='expense-table'>
                <thead className ='th'>
                  <tr className = 'td'>
                      <th>Expense Name</th>
                      <th>Amount $ </th>
                      <th>Remove</th>
                      
                  </tr>
                </thead>
                <tbody>
                  <td className = 'td'>
                  {expense.map(item => {
                    return (
                      <>
                        <ol className="span_exp" key = {item.name} id={item.name}>
                        {item.name} </ol><hr></hr>
                      </>
                     );
                     })}
                  </td>
                  <td className = 'td'>
                  {expense.map(item => {
                    return (
                      <>
                        <ol className="span_exp" key = {item.name} id={item.name}>
                         {item.amt}
                        </ol><hr></hr>
                      </>
                     );
                     })}
                  </td>
                  <td className = 'td'>
                  {expense.map(item => {
                    return (
                      <>
                        <ol className="span_exp" key = {item.name} id={item.name}>
                         <button id="rm_exp" className="rm_exp" onClick={()=>RemoveExpense(item.id, item.name, item.amt)}>X</button>
                        </ol><hr></hr>
                      </>
                     );
                     })}
                  </td>
                    
                </tbody>
              </table>
          
    </div>
                        
            </div>
            
        </div>
    );
}

export default Expenses;