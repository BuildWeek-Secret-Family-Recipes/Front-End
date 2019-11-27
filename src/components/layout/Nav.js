import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { slide as Menu } from 'react-burger-menu';

const Nav = props => {

    const logged = localStorage.getItem('token');

    const handleLogout = () => {
      props.logout();
	  props.history.push('/')
    }

    return (
        <Fragment>
            <Menu>
                <Link to='/'>Home</Link>
                {logged && <Link to='/api/auth/recipes/user'>My Recipes</Link>}
                {!logged && <Link to='/api/auth/user/login'>Log In</Link>}
                {logged && <button className='logout-btn' onClick={handleLogout}>Logout</button>}
                {!logged && <Link to='/api/auth/user/register'>Sign Up</Link>}
                <Link to='/Search'>Search</Link>
            </Menu>
        </Fragment>
    )
}


const mapStateToProps = ({ authReducer }) => ({
  isLoggedIn: authReducer.isLoggedIn
})


export default connect(mapStateToProps, { logout })(Nav)
