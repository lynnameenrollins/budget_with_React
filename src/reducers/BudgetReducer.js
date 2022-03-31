const initalState = {
    budget: 5000,
    expense:[{name:'School', amt:'450'}, {name:'Food', amt:'300'}],
    spent: 0,
   
}

const BudgetReducer = (state = initalState, action)=>{
    const newState = { ...state}
    switch (action.type){
        case 'SET_BUDGET':
            console.log("In Set Budget");
            newState.budget = action.payload;
            return newState;
        case 'REMAINING':
            console.log("In Remaining");
            return newState;
        case 'SPENT':
            console.log("In Spent");
            return newState;
        case 'ADD_EXPENSE_NAME':
            console.log("In Budget Reducer AddName", action.payload)
            newState.expense.push({name: action.payload});
            console.log(newState.expense.name)
            return newState;
        case 'ADD_EXPENSE_AMT':
            console.log("In Budget Reducer Add", action.payload)
            newState.spent = Number(newState.spent) + Number(action.payload);
            newState.expense.push(action.payload);
            console.log(newState.spent)
            return newState;
           
        case 'REMOVE':
            console.log("In Remove")
            newState.spent = newState.spent - action.payload
            return newState;
            
        default:
            return newState;
                
    }

    
    return newState;
}
export default BudgetReducer;