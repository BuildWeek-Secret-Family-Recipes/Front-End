import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import userReducer from './userReducer';
import authReducer from './auth';
import recipeReducer from './recipes';

export default combineReducers({
    userReducer,
    authReducer,
    registerReducer,
    recipeReducer
})