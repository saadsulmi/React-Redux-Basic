import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_RESULT, FETCH_USER_SUCCESS } from "./userType"

export const fetchUsersRequest = () =>{
    return{
        type : FETCH_USER_RESULT
    }
}

export const fetchUsersSuccess = users =>{
    return{
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}

export const fetchUsersFailure = error =>{
    return{
        type : FETCH_USER_FAILURE,
        payload : error
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const users = res.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err=>{
            const errMessage = err.message;
            dispatch(fetchUsersFailure(errMessage));
        })
    }
}