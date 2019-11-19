import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/auth';
import api from '../../utils/api';

function Login(props) {
    console.log(props, '<- props in login')
    const [error, setError] = useState()
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

        api()
			.post('/auth/user/login', userData)
			.then(res => {
                console.log(userData)
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
                <Link to='/api/auth/user/register'>Sign Up</Link>
            </div>
        </Fragment>
    )
}

function mapStateToProps(state) {
    const { loggingIn } = state.user;
    return { loggingIn };
}

const mapDispatchToProps = ({
    login: userActions.login
  });

  console.log(mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(Login);