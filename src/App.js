import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import styled from 'styled-components';

import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import Nav from './components/layout/Nav';
import Burger from './components/layout/Burgerbutton';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Signout from './components/user/Signout';
import UserRecipes from './components/user/UserRecipes';
import AddRecipe from './components/recipe/AddRecipe'

import './App.css';


const Footerblock = styled.div`
height: 0;
padding-top: -50px;
margin-top: -15px;
 `

function App() {
  return (
    <div className="App">
      
      <Nav />

      <Route exact path='/' component={Home} />
      <Route exact path='/api/login' component={Login} />
      <Route exact path='/api/register' component={Register} />
      <Route exact path='/addrecipe' component={AddRecipe} />
      <PrivateRoute exact path='/myrecipes' component={UserRecipes} />
			<PrivateRoute exact path="/logout" component={Signout} />
        
      <Footerblock>
        <Footer />
      </Footerblock>
    </div>
  );
}

export default App;