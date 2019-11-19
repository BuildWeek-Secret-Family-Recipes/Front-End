import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/auth';


const initialState = {
    user: {
        username: '',
        password: '',
        email: '',
        error: null
    }
}

export function reducer(state = initialState, action){
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                error: null                
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                username: action.username,
                password: action.password,
                email: action.email,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.error
            }
        
        case REGISTER_REQUEST: 
            return {
                ...state,
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                username: action.username,
                password: action.password,
                email: action.email,
                error: null
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}