import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import Nav from './components/layout/Nav';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Logout from './components/user/Logout';
import MyRecipes from './components/user/MyRecipes';
import AddRecipe from './components/recipe/AddRecipe';
import EditRecipe from './components/recipe/EditRecipe';

// Hooks
import { useDarkMode } from './components/hooks/useDarkMode';


// Styles
import { device } from'./components/layout/Breakpoints';
import styled from 'styled-components';
import './App.css';

const Header = styled.header`
font-size: 2.8rem;
font-color: #654F3B
text-shadow: 2px 2px #654F3B;

@media ${device.mobileS}{
    font-size: 2rem;
    text-shadow: 1px 1px #654F3B;
}`

const Footerblock = styled.div`
height: 0;
padding-top: -50px;
margin-top: -15px;
 `

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      {/* <Nav /> */}
      <Route path='/' component={Nav} />

      <Header>Secret Family Cookbook</Header>
      <div className="dark-mode__toggle">
      
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          />
      </div>

      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/api/auth/user/login' component={Login} />
      <Route exact path='/api/auth/user/register' component={Register} />
      <PrivateRoute exact path='/api/auth/recipes/user' component={MyRecipes} />
      <PrivateRoute exact path='/api/auth/recipes' component={AddRecipe} />
      <PrivateRoute exact path='/api/auth/recipes/:id' component={EditRecipe} />
			<PrivateRoute exact path="/logout" component={Logout} />
      </Switch>

      <Footerblock>
        <Footer />
      </Footerblock>
    </div>
  );
}

export default App;