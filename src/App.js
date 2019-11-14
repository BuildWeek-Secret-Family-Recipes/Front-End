import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import Home from './components/pages/Home';
import Nav from './components/layout/Nav';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Signout from './components/user/Signout';
import UserRecipes from './components/user/UserRecipes';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav />

        <Route exact path='/' component={Home} />
        <Route exact path='/api/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/myrecipes' component={UserRecipes} />
			  <PrivateRoute exact path="/logout" component={Signout} />
      </div>
    </div>
  );
}

export default App;