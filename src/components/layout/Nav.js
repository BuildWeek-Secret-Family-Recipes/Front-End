import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { getToken } from '../../utils/api';
import { connect } from 'react-redux';
import Search from '../layout/Search';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

const Searchbox = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    `


const Nav = props => {
  console.log(props.isLoggedIn, '<--Nav props')

  const logged = props.isLoggedIn;

    return (
        <Fragment>
            <Menu>
                <Link to='/'>Home</Link>
                {logged && <Link to='/recipes'>My Recipes</Link>}
                {!logged && <Link to='/api/auth/user/login'>Log In</Link>}
                {logged && <Link to='/logout'>Logout</Link>}
                {!logged && <Link to='/api/auth/user/register'>Sign Up</Link>}
                <Searchbox><Search /></Searchbox>
            </Menu>
        </Fragment>
    )
}


const mapStateToProps = ({ authReducer }) => ({
  isLoggedIn: authReducer.isLoggedIn
})


export default connect (mapStateToProps)(Nav)
