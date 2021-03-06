const initalState = {
    budget: 5000,
    expense:[],
    spent: 0,
    count: 0, //default with 2 items in expense
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
        case "INCREMENT_COUNTER":  
            newState.count = action.payload;
            console.log("incrementing counter: ", newState.count)
        case 'REMOVE_EXPENSE':
            console.log("In REMOVE_EXPENSE")
            function arrayRemove(arr, value){
                console.log('arr', arr)
                console.log('value', value)
                
                return arr.filter(function(ele){
                    console.log('ele', ele)
                    return ele.id !== value.id;
                })}
            newState.expense = arrayRemove(newState.expense, action.payload);    
            // console.log("Expense List: " , newState.expense)

            return newState;
            case 'REMOVE_EXPENSE_AMT':
                // console.log("In REMOVE_EXPENSE_AMT", action.payload)
                newState.spent =Number(newState.spent) - Number(action.payload);
                // console.log(newState.spent)
                return newState;
        default:
            return newState;
                
    }

    
    return newState;
}
export default BudgetReducer;