import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import api from '../../utils/api';

function Register(props) {
    console.log(props, '<-- Register props');
    const [error, setError] = useState();
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        email: ''
    })
    
    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        api()
			.post('/auth/user/register', newUser)
			.then(res => {
				localStorage.setItem('token', res.data.payload)
				props.history.push('/')
			})
			.catch(err => {
				setError(err)
			})
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    className='log-input' 
                    name='email' 
                    placeholder='Email'
                    value={newUser.email}
                    onChange={handleChange} 
                />
                <input 
                    type='text'
                    className='log-input' 
                    name='username' 
                    placeholder='Username'
                    value={newUser.username}
                    onChange={handleChange} 
                />
                <input 
                    type='password' 
                    className='log-input'
                    name='password' 
                    placeholder='Password'
                    value={newUser.password}
                    onChange={handleChange} 
                />
            
                <button type='submit' className='log-btn'>Sign Up</button>
            </form>

            <div className="reg">
                <p>Already have an account?</p>
                <Link to='/api/auth/user/login'>Sign In</Link>
            </div>
        </Fragment>
    )
}

function mapStateToProps(state) {
    console.log(state, '<- Register state')
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
  };

export default connect(mapStateToProps, mapDispatchToProps)(Register);