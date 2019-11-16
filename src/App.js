import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Home from './components/pages/Home';
import Nav from './components/layout/Nav';
import Footer from './components/pages/Footer';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Signout from './components/user/Signout';
import UserRecipes from './components/user/UserRecipes';
import styled from 'styled-components';

import './App.css';
const Footerblock = styled.div`
height: 0;

 `



function App() {

  return (
    <div className="App">
        <Nav/>
      
        <Route exact path='/' component={Home} />
        <Route exact path='/api/login' component={Login} />
        <Route exact path='/api/register' component={Register} />
        <PrivateRoute exact path='/myrecipes' component={UserRecipes} />
			  <PrivateRoute exact path="/logout" component={Signout} />
      
        <Footerblock>
          <Footer />
          </Footerblock>

      </div>
  );
}

export default App;