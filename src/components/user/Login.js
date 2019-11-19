import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../../actions/auth';

function Login(props) {
    const [setError] = useState()
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: ''
    })
    
    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.authUser();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    className='input' 
                    name='email' 
                    placeholder='Email'
                    value={userData.email}
                    onChange={handleChange} 
                />
                <input 
                    type='text'
                    className='input' 
                    name='username' 
                    placeholder='Username'
                    value={userData.username}
                    onChange={handleChange} 
                />
                <input 
                    type='password' 
                    className='input'
                    name='password' 
                    placeholder='Password'
                    value={userData.password}
                    onChange={handleChange} 
                />
            
                <button type='submit'>Sign In</button>
            </form>

            <div className="reg">
                <p>Don't have an account?</p>
                <Link to='/api/register'>Sign Up</Link>
            </div>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password,
        email: state.email,
        error: state.errorMsg
    }
}

const mapDispatchToProps = {
    authUser
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login);