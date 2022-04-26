import axios from "axios";
import { USER_REGISTER_REQUEST } from "../actionTypes";


/// create user action 

const createUserAction = userData =>{
    return async dispatch =>{
        dispatch({
            type:USER_REGISTER_REQUEST,
        });
        
        const config = {
        'Content-Type' : 'application/json',
        };

        const res = await axios.post('http://localhost:5000/users',  )

    };


}