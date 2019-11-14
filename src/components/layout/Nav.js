import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Search from '../layout/Search';

const Nav = () => {
    return (
        <Fragment>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Sign Up</Link>
            <Search />
        </Fragment>
    )
}

export default Nav

