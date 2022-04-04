import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';

// function Search(expense){
//     let src = document.getElementById("Search").value
    
//     console.log("Search criteria", src)
  
//       if (src !==""){
//       var searched = expense.filter(function(found) {
//         return found.name === src;
//       })
//       console.log("Searched (result)", searched) 
//     }
//     return searched;
// }

function Expenses(props) {
    const expense = useSelector(state => state.expense)
    const [searchTerm, setSearchTerm] = useState('')
  
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
            <label id="search_label">Filter List: </label>
            <input type="text" id="Search" placeholder='Search expense list' onChange={(event) => setSearchTerm(event.target.value)} ></input>            
                
            
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
                  {expense.filter((val)=>{
                    if(searchTerm ==""){
                      console.log('null string in search term = ', val)
                      return val
                    } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      console.log('value = ', val)
                      return val
                    }
                    
                  }).map((val,key) =>{
                    return(
                      <div className='span_exp' key = {key}><ol> {val.name}</ol><hr id="line"></hr></div>
                  );})}
                 
                  </td>
                  <td className = 'td'>
                    {expense.filter((val)=>{
                        if(searchTerm ==""){
                          console.log('null string in search term = ', val)
                          return val
                        } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                          console.log('value = ', val)
                          return val
                        }
                        
                      }).map((val,key) =>{
                        return(
                          <div className='span_exp' key = {key}><ol> {val.amt}</ol><hr id="line"></hr></div>
                      );})}
                 
                  </td>
                  <td className = 'td'>
                                {expense.filter((val)=>{
                            if(searchTerm ==""){
                              console.log('null string in search term = ', val)
                              return val
                            } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                              console.log('value = ', val)
                              return val
                            }
                            
                          }).map((val,key) =>{
                            return(
                              <div className='span_exp' key = {key}><ol><button id="rm_exp" className="rm_exp" onClick={()=>RemoveExpense(val.id, val.name, val.amt)}>X</button></ol>
                              <hr id="line"></hr></div>
                          );})}
                  
                  </td>
                    
                </tbody>
              </table>
          
    </div>
                        
            </div>
            
        </div>
    );
}

export default Expenses;