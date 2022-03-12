const userReducer = (state = [],action) => {
    switch (action.type){
        case "GETUSER":
            return action.payload
        case "LOADING":
            return []
        
        default:
            return state
    }
}

export default userReducer
