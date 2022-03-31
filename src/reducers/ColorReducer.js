const initalState = {
    color: []
}

const ColorReducer2 = (state = initalState, action)=>{
    const newState = {...state};

    switch(action.type){
        case 'ADD_COLOR':
            console.log("In add color");
            return{
                newState, color:[newState.color, action.payload]
            }
            // newState.color.push(action.payload);
            // console.log("color(s) " + newState.color)
            // break;
            
        case 'REMOVE_COLOR':
            console.log("In remove color");
            let val = newState.color.flat(2);
            // function arrayRemove(arr, value) { 
    
            //     return arr.filter(function(ele){ 
            //         return ele !== value; 
            //     });
            // }
            return{
                newState,
                color:[val.filter(value=>value!== action.payload)]
            }
            // newState.color = arrayRemove(newState.color, action.payload);
            console.log("color(s) " + newState.color)
            
            

            // break;
        default:
            return newState;
    }
    return newState;
}
export default ColorReducer2;
