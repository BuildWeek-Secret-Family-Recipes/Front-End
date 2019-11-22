import React, { Fragment } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import Search from '../layout/Search';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

const Searchbox = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    `


const Nav = props => {
  console.log(props, '<--Nav props')


  const logged = props.isLoggedIn;

  const handleLogout = () => {
      props.logout();
	  props.history.push('/')
  }

    console.log("nav props", props)
    return (
        <Fragment>
            <Menu>
                <Link to='/'>Home</Link>
                {logged && <Link to='/api/auth/recipes/user'>My Recipes</Link>}
                {!logged && <Link to='/api/auth/user/login'>Log In</Link>}
                {logged && <button className='logout-btn' onClick={handleLogout}>Logout</button>}
                {!logged && <Link to='/api/auth/user/register'>Sign Up</Link>}
                <Searchbox><Search /></Searchbox>
            </Menu>
        </Fragment>
    )
}


const mapStateToProps = ({ authReducer }) => ({
  isLoggedIn: authReducer.isLoggedIn
})


export default connect(mapStateToProps, { logout })(Nav)
