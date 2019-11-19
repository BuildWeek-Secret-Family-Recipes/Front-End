import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';

function Register(props) {
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        email: ''
    })

    useEffect(() => {
        props.registerUser();
      }, [])
    
    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.registerUser({ setNewUser });
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    className='input' 
                    name='email' 
                    placeholder='Email'
                    value={newUser.email}
                    onChange={handleChange} 
                />
                <input 
                    type='text'
                    className='input' 
                    name='username' 
                    placeholder='Username'
                    value={newUser.username}
                    onChange={handleChange} 
                />
                <input 
                    type='password' 
                    className='input'
                    name='password' 
                    placeholder='Password'
                    value={newUser.password}
                    onChange={handleChange} 
                />
            
                <button type='submit'>Sign Up</button>
            </form>

            <div className="reg">
                <p>Already have an account?</p>
                <Link to='/api/login'>Sign In</Link>
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
    registerUser
  };

export default connect(mapStateToProps, mapDispatchToProps)(Register);