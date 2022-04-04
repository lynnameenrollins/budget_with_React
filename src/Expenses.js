import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';


function Expenses(props) {
    const expense = useSelector(state => state.expense)
    const [searchTerm, setSearchTerm] = useState('')
  
  
    let dispatch = useDispatch();
   
    const RemoveExpense = (id, name, amt) =>{
        
        let cost = {id, name, amt}
       
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
                      return val
                    } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
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
                          return val
                        } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
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
                              return val
                            } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
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