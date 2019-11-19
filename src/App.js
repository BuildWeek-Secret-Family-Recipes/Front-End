import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import styled from 'styled-components';

import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import Nav from './components/layout/Nav';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Signout from './components/user/Signout';
import UserRecipes from './components/user/UserRecipes';
import AddRecipe from './components/recipe/AddRecipe'


import './App.css';

const Header = styled.header`
    font-size: 2.8rem;
    font-color: #654F3B
    text-shadow: 2px 2px #654F3B;

    `
const Footerblock = styled.div`
height: 0;
padding-top: -50px;
margin-top: -15px;
 `

function App() {
  return (
    <div className="App">
      <Nav />
      <Header>Secret Family Cookbook</Header>

      <Route exact path='/' component={Home} />
      <Route exact path='/auth/user/login' component={Login} />
      <Route exact path='/auth/user/register' component={Register} />
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