import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Search(expense){
    let src = document.getElementById("Search").value
    
    console.log("Search criteria", src)
  
      if (src !==""){
      var searched = expense.filter(function(found) {
        return found.name === src;
      })
      console.log("Searched (result)", searched) 
    }
    return searched;
}

function Expenses(props) {
    const expense = useSelector(state => state.expense)
    
    // let searched = Search(expense);
    // console.log("Did this make a difference, ", searched)

    
    // for (let i=0; i< expense.length; i++) {
    // console.log('Expense Item [',i,']: ' , expense[i])
    // }

    let dispatch = useDispatch();
    // let result = Search();
    const RemoveExpense = (id, name, amt) =>{
        
        let cost = {id, name, amt}
        // console.log('Cost_name ', name)
        // console.log('Cost_amt ', amt)
        // console.log('payload: ', cost)
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

            <input type="text" id="Search" ></input>            
            <button className="search" onClick={() =>Search(expense)}> Search </button>
            
            
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
                        {item.name} </ol><hr id="line"></hr>
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
                        </ol><hr id="line"></hr>
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
                        </ol><hr id="line"></hr>
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