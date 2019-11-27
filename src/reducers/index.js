import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './auth';
import recipeReducer from './recipeReducer';

export default combineReducers({
    userReducer,
    authReducer,
    recipeReducer
})