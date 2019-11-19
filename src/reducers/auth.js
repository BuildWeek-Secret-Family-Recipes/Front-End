import { userConstants } from '../actions/types';


export const initialState = {
    user: {
        username: '',
        password: '',
        email: '',
    },
    error: null,
    loggingIn: true
}

export function authReducer(state = initialState, action){
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user,
                error: null                
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn: true,
                user: action.user,
                error: null
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}