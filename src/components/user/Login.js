import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { device_max } from '../layout/Breakpoints';
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
    height: 2rem;
    
    @media ${device_max.laptopL} {
        margin-left: 6rem;
        margin-right: 6rem;
    }
    
    @media ${device_max.tablet} {
        margin-left: 1rem;
        margin-right: 1rem;
    }`

export const LogButton = styled.button`
    margin-left: 11.5rem;
    border: 1px solid var(--primary-color);
    border-radius: 0.4rem;
    width: 12.5rem;
    height: 2rem;
    
    @media ${device_max.laptopL} {
        margin-left: 6.7rem;
    }

    @media ${device_max.laptop} {
        // margin-right: 16rem;
        // margin-left: 16rem;
    }

    @media ${device_max.tablet} {
        margin-left: 3.8rem;
        margin-right: 1rem;
    }

    @media ${device_max.mobileL} {
        margin-left: 1.8rem;
    }

    @media ${device_max.mobileM} {
        margin-left: 1.5rem;
    }

    @media ${device_max.mobileS} {
        margin-left: 0.6rem;
    }`

export const FormContainer = styled.div`
    background: #463c34a6;
    height: 20rem;
    padding: 1rem;
    padding: 2rem;
    margin-top: 5rem;
    margin-right: 18rem;
    margin-bottom: 10rem;
    margin-left: 18rem;
    border-radius: 2.5rem;

    img {
        padding: 1px;
        margin-bottom: 1rem;
    }

    @media ${device_max.laptopL} {
        margin-right: 30rem;
        margin-left: 30rem;
    }

    @media ${device_max.laptop} {
        margin-right: 16rem;
        margin-left: 16rem;
    }

    @media ${device_max.tablet} {
        margin-right: 12rem;
        margin-left: 12rem;
    }

    @media ${device_max.mobileL} {
        margin-right: 3rem;
        margin-left: 3rem;
    }

    @media ${device_max.mobileM} {
        margin-right: 1rem;
        margin-left: 1rem;
    }
}`

function Login(props) {
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

    // async function asyncLogin() {
    //     await props.login(userData)
    // }

    const handleSubmit = e => {
        e.preventDefault()

        // asyncLogin();
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