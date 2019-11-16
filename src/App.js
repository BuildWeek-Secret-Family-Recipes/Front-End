import React, { useState, useRef } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import Home from './components/pages/Home';
import Nav from './components/layout/Nav';
import Burger from './components/layout/Burgerbutton';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Signout from './components/user/Signout';
import UserRecipes from './components/user/UserRecipes';

import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  
  return (
    <div className="App">
      <div ref={node} className="nav">
        <Burger open={open} setOpen={setOpen} />
        <Nav open={open} setOpen={setOpen} />
      </div>
        <Nav />

        <Route exact path='/' component={Home} />
        <Route exact path='/api/login' component={Login} />
        <Route exact path='/api/register' component={Register} />
        <PrivateRoute exact path='/myrecipes' component={UserRecipes} />
			  <PrivateRoute exact path="/logout" component={Signout} />
      
    </div>
  );
}

export default App;