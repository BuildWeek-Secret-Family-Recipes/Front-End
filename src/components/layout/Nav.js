import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { getToken } from '../../utils/api';
import Search from '../layout/Search';

const Nav = () => {

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

