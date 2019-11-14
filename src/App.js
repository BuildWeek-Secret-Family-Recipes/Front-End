import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Nav from './components/layout/Nav';
import Login from './components/user/Login';
import Register from './components/user/Register';


function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav />

        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </div>
    </div>
  );
}

export default App;
