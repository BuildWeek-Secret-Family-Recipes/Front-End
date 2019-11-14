import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { getToken } from '../../utils/api';
import Search from '../layout/Search';
import styled from 'styled-components';


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #9C976A;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #654F3B;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #C4C4C4;
    }
  }
`



const Nav = ({ open }) => {

    const logged = getToken();

    return (
        <Fragment>
            <Link to='/'>Home</Link>
            {logged && <Link to='/myrecipes'>My Recipes</Link>}
            {!logged && <Link to='/api/login'>Log In</Link>}
            {logged && <Link to='/logout'>Logout</Link>}
            <Link to='/register'>Sign Up</Link>
            <Search />
        </Fragment>
    )
}

export default Nav
