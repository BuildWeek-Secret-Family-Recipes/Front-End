import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import styled from 'styled-components';
import Dinner_2 from '../../assets/img/dinner_2.png';

export const LogForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

export const LogInput = styled.input`
    margin-left: 8rem;
    margin-right: 8rem;
    margin-bottom: 0.5rem;
    border: 1px solid var(--primary-color);
    border-radius: 0.5rem;
    height: 2rem;`

export const LogButton = styled.button`
    margin-left: 11.5rem;
    border: 1px solid var(--primary-color);
    border-radius: 0.4rem;
    width: 12.5rem;
    height: 2rem;`

export const FormContainer = styled.div`
    background: #463c34a6;
    height: 16rem;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 5rem;
    margin-right: 18rem;
    margin-bottom: 10rem;
    margin-left: 18rem;
    border-radius: 2.5rem;

    img {
        padding: 1px;
        margin-bottom: 8px;
    }
}


`

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
        props.history.push('/')        
    }

    return (
        <Fragment>
            <FormContainer>

            <img src={Dinner_2} alt='Its dinner time!' />
            
            <LogForm onSubmit={handleSubmit} className='log-form'>
                <LogInput 
                    type='text'
                    className='log-input' 
                    name='username' 
                    placeholder='Username'
                    value={userData.username}
                    onChange={handleChange}
                />
                <LogInput 
                    type='password' 
                    className='log-input'
                    name='password' 
                    placeholder='Password'
                    value={userData.password}
                    onChange={handleChange}
                />
            
                <LogButton type='submit' className='log-btn'>Sign In</LogButton>
            </LogForm>
            </FormContainer>

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

export default connect(mapStateToProps, { login })(Login);