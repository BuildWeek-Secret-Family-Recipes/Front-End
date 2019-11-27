import { userConstants } from '../actions/types';

export const initialState = {
    user: {
        id: '',
        username: 'testUser',
        password: 'testPass',
        email: 'testEmail'
    },
    isLoading: false,
    isLoggedIn: false,
    error: null
}

export default function authReducer(state = initialState, action){
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null               
            };
        case userConstants.LOGIN_SUCCESS:
            console.log(action)
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isLoggedIn: true,
                error: null
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: 'Failed to log in'
            };
        case userConstants.LOGOUT:
            console.log('logout')
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: ''
            };
        default:
            return state;
    }
}

