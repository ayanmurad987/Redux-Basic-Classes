const reducer = (state = {}, action) =>{
    switch(action.type) {
        case "UPDATE_DATA": {
            return {...state, user: action.user}
        }
        case 'REMOVE_DATA': {
          return {...state, user: {}}
        }
        default:{
            return state
        }
    }
}

export default reducer;
