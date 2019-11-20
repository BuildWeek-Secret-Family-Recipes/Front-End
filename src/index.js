import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import { recipeReducer } from './reducers/recipes';
import { authReducer } from './reducers/auth';
import { registerReducer } from './reducers/registerReducer';
import { userReducer } from './reducers/userReducer';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

const rootReducer = combineReducers({
    recipe: recipeReducer, 
    auth: authReducer,
    register: registerReducer,
    user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

export default rootReducer;