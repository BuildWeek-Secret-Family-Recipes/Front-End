import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

function Login(props) {
    console.log(props, '<- Props in Login Page')
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })
    
    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.login(userData)
        console.log(userData, '<- userData in handleSubmit')
        props.history.push('/')
        
    }

    console.log('login');

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='log-form'>
                <input 
                    type='text'
                    className='log-input' 
                    name='username' 
                    placeholder='Username'
                    value={userData.username}
                    onChange={handleChange}
                />
                <input 
                    type='password' 
                    className='log-input'
                    name='password' 
                    placeholder='Password'
                    value={userData.password}
                    onChange={handleChange}
                />
            
                <button type='submit' className='log-btn'>Sign In</button>
            </form>

            <div className="reg">
                <p>Don't have an account?</p>
                <Link to='/api/auth/user/register'>Sign Up</Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

const mapDispatchToProps = ({
    login
})

console.log(mapDispatchToProps, '<- Props matched to dispatch')

export default connect(mapStateToProps, { login })(Login);