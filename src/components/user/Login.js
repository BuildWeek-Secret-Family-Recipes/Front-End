import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { device,device_max } from '../layout/Breakpoints';
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
    box-shadow: 0px 0px 10px 1px black;
    text-align: center;

    @media ${device.mobileS} {
        margin-left: 1rem;
        width: 80%;
    }
    
    @media ${device.mobileM} {
        margin-left: 3rem;
        width: 75%;
    }



    @media ${device.laptopL} {
        margin-left: 6rem;
        margin-right: 6rem;
    }
    
    @media ${device.tablet} {
        margin-left: 4.5rem;
        margin-right: 1rem;
        width: 70%;
    }
    
    
    @media ${device.laptop}{
        margin-left: 7rem;
        width: 60%;
    }
    

    @media ${device.laptopM}{
        margin-left: 12rem;
        width: 50%;
    }

    @media ${device.laptopL} {
        margin-left: 11rem;
        width: 45%;
    }


    @media ${device.desktopS}{
        margin-left: 14rem;
    }

    @media ${device.desktopS}{
        margin-left: 12rem;
    }
    

    @media ${device.desktopL}{
        margin-left: 17rem;
    }

    @media ${device.desktopXL}{
        margin-left: 18rem;
        width: 35%;
    }

    `

export const LogButton = styled.button`
    margin-left: 11.5rem;
    border: 1px solid var(--primary-color);
    border-radius: 0.4rem;
    width: 12.5rem;
    height: 2rem;
    box-shadow: 0px 0px 10px 1px black;
    
   

  

    @media ${device_max.laptop} {
        // margin-right: 16rem;
        // margin-left: 16rem;
    }

    

    @media ${device.mobileL} {
        margin-left: 1.8rem;
    }

    


    @media ${device.mobileS} {
        margin-left: 1rem;
        width: 80%;
    }
    

    @media ${device.mobileM} {
        margin-left: 3rem;
        width: 75%;
    }


    @media ${device.tablet}{
        margin-left: 4.5rem;
        width: 70%
    }


    @media ${device.laptop}{
        margin-left: 7rem;
        width: 60%;
    }

    @media ${device.laptopM}{
        margin-left: 12rem;
        width: 50%;
    }


    @media ${device.laptopL} {
        margin-left: 11rem;
        width: 45%;
    }

    @media ${device.desktopS}{
        margin-left: 14rem;
    }
    

    @media ${device.desktopS}{
        margin-left: 12rem;
    }

    @media ${device.desktopL}{
        margin-left: 17rem;
    }

    @media ${device.desktopXL}{
        margin-left: 18rem;
        width: 35%;
    }


    `

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
    border: 1px solid black;
    box-shadow: 0px 0px 15px 2px black;

    img {
        padding: 1px;
        margin-bottom: 1rem;

        @media ${device.laptop}{
            margin-bottom: 3rem;
            
        }

        @media ${device.laptopM}{
            margin-bottom: 6.5rem;
        }

        @media ${device.desktop}{
            margin-bottom: 10rem;
        }
    }


    

    @media ${device.mobileL} {
        margin-right: 3rem;
        margin-left: 3rem;
    }

    
    @media ${device.mobileS} {
        margin-right: 3rem;
        margin-left: 3rem;
    }

    @media ${device.mobileM} {
        margin-right: 1rem;
        margin-left: 1rem;
    }
}

@media ${device.tablet} {
    margin-right: 12rem;
    margin-left: 12rem;
    height: 25rem;
}

@media ${device.laptop} {
    margin-right: 16rem;
    margin-left: 16rem;
    height: 30rem;
}

@media ${device.laptopM} {
    margin-right: 16rem;
    margin-left: 16rem;
    height: 35rem;
}


@media ${device.laptopL} {
    margin-right: 25rem;
    margin-left: 25rem;
    height: 40rem;
}


@media ${device.desktop} {
    margin-right: 35rem;
    margin-left: 35rem;
    height: 45rem;
}

@media ${device.desktopXL}{
    margin-right: 45rem;
    margin-left: 45rem;
    height: 50rem;
}

`

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

    async function asyncLogin() {
        await props.login(userData)
    }

    const handleSubmit = e => {
        e.preventDefault()
        asyncLogin()
        props.history.push('/')
        // props.login(userData)
        // props.history.push('/')        
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