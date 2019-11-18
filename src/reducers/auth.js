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
        id: null,
        username: '',
        password: '',
    },
    errorMsg: null
}

export function reducer(state = initialState, action){
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                errorMsg: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                errorMsg: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                errorMsg: action.error
            }
        
        case REGISTER_REQUEST: 
            return {
                ...state,
                errorMsg: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                errorMsg: action.error
            }
        default:
            return state;
    }
}