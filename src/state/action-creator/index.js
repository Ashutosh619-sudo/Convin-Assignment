import { getUsersAPI } from "../../services/userService"

export const getUser = () => {
    return dispatch => {
        getUsersAPI().then(data=>{
            console.log(data)
            dispatch({
                type:"GETUSER",
                payload:data
            })
        })
    }
}


