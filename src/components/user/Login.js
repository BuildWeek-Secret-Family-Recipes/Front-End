import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../../actions/auth';
import api from '../../utils/api';

function Login(props) {

    const [error, setError] = useState()
    const [userData, setUserData] = useState({
        username: '',
        password: ''
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
			.post('/login', userData)
			.then(res => {
                authUser();
				localStorage.setItem('token', res.data.payload)
				props.history.push('/myrecipes')
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
                <Link to='/register'>Sign Up</Link>
            </div>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password,
        error: state.errorMsg
    }
}

export default connect(mapStateToProps, { authUser })(Login);