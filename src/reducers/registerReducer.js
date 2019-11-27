import { userConstants } from '../actions/types';
import { initialState } from './auth';

export default function registerReducer(state = initialState, action) {
    switch(action.type) {
    case userConstants.REGISTER_REQUEST: 
        return { 
            ...state,
            isLoading: true
         };
    case userConstants.REGISTER_SUCCESS:
        return { 
            ...state,
            isLoading: true
        };
    case userConstants.REGISTER_FAILURE:
        return { 
            ...state,
            error: 'Failed to Register'
        };
    default:
        return state;
    }
}