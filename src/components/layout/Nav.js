import React, { Fragment, useEffect } from 'react';
import Burger from '../layout/Burgerbutton';
import { Link } from "react-router-dom";
import { getToken } from '../../utils/api';
import Search from '../layout/Search';
import styled from 'styled-components';


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-between;
  background: #9C976A;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
//   opacity: ${({open}) => open ? '90%' : '100%'};
  height: 100vh;
  text-align: left;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 1.7rem;
    // text-transform: uppercase;
    padding: 1rem 0;
    text-align: center;
    width: 260px;
    height: 50px;
    margin-top: 5rem;
    border-radius: 4px;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #C4C4C4;
    background-color: #654F3B;
    text-decoration: none;
    transition: color 0.3s linear;
    text-shadow: 1px 1px gold;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #EDDFB0;
    }
  }
`

const Searchbox = styled.div`
    display: flex;
    justify-content: center;
    
    `



const Nav = ({ open }) => {

    const logged = getToken();

    return (
        <StyledMenu open={open}>
            <Link to='/'>Home</Link>
            {logged && <Link to='/myrecipes'>My Recipes</Link>}
            {!logged && <Link to='/api/login'>Log In</Link>}
            {logged && <Link to='/logout'>Logout</Link>}
            <Link to='/register'>Sign Up</Link>
            <Searchbox><Search /></Searchbox>
            </StyledMenu>
    )
}


const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
  
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };





export default Nav
