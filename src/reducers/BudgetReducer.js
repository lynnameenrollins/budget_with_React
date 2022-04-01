const initalState = {
    budget: 5000,
    expense:[{id: 1, name:'Housing', amt:'1050'},{id: 2, name:'Food', amt:'400'}],
    spent: 1350,
   
}

const BudgetReducer = (state = initalState, action)=>{
    const newState = { ...state}
    switch (action.type){
        case 'SET_BUDGET':
            // console.log("In Set Budget");
            newState.budget = action.payload;
            return newState;
        
        case 'ADD_EXPENSE':
            console.log("In Budget Reducer AddName", action.payload)
            newState.expense.push(action.payload);
            // console.log(newState.expense.name, newState.expense.amt)
            return newState;
        case 'ADD_EXPENSE_AMT':
            // console.log("In Budget Reducer Add", action.payload)
            newState.spent = Number(newState.spent) + Number(action.payload);
            
            // console.log(newState.spent)
            return newState;
           
        case 'REMOVE_EXPENSE':
            // console.log("In REMOVE_EXPENSE")
            function arrayRemove(arr, value){
                // console.log('arr', arr)
                // console.log('value', value)
                
                return arr.filter(function(ele){
                    // console.log('ele', ele)
                    return ele.name !== value.name;
                })}
            newState.expense = arrayRemove(newState.expense, action.payload);    
            // console.log("Expense List: " , newState.expense)
            
            return newState;
            case 'REMOVE_EXPENSE_AMT':
                // console.log("In REMOVE_EXPENSE_AMT", action.payload)
                newState.spent = Number(newState.spent) - Number(action.payload);
                // console.log(newState.spent)
                return newState;
        default:
            return newState;
                
    }

    
    return newState;
}
export default BudgetReducer;