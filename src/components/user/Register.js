import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';

function Register(props) {
    console.log(props, '<-- Register props');
    const [newUser, setNewUser] = useState({
        // id: '',
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

        props.register(newUser);
        console.log(props.register)
        console.log(newUser, '<- newUser in handleSubmit')
        props.history.push('/api/auth/user/login')
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='log-form'>
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
                <Link to='https://secret-recipes.herokuapp.com/api/auth/user/login'>Sign In</Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ registerReducer }) => ({
    user: registerReducer.user
})

const mapDispatchToProps = ({
    register
})

console.log(mapDispatchToProps)

export default connect(mapStateToProps, { register })(Register);