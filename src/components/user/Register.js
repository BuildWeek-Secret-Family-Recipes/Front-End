import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import Family from '../../assets/img/family.png'

import { 
    LogForm, 
    LogInput, 
    LogButton, 
    FormContainer 
} from './Login';

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
            <FormContainer>
                <img src={Family} alt='Come join our family!' />

                <LogForm onSubmit={handleSubmit} className='log-form'>
                    <LogInput 
                        type='text'
                        className='log-input' 
                        name='email' 
                        placeholder='Email'
                        value={newUser.email}
                        onChange={handleChange} 
                    />

                    <LogInput 
                        type='text'
                        className='log-input' 
                        name='username' 
                        placeholder='Username'
                        value={newUser.username}
                        onChange={handleChange} 
                    />

                    <LogInput 
                        type='password' 
                        className='log-input'
                        name='password' 
                        placeholder='Password'
                        value={newUser.password}
                        onChange={handleChange} 
                    />
                
                    <LogButton type='submit' className='log-btn'>Sign Up</LogButton>
                </LogForm>
            </FormContainer>

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