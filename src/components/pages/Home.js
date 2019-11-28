import React from 'react';
import Dining from '../../assets/img/dining.png';
import styled from 'styled-components';
import { device, device_max } from'../layout/Breakpoints';
import RecipeCards from '../recipe/RecipeCards.js';

export const Card = styled.div`
    height: 300px;
    width: 250px;
    background-color: #C4C4C4;
    margin-bottom: 2rem;

        @media ${device_max.mobileS} {
            width: 50%;
        }

        @media ${device_max.tablet}{
            width: 45%;
        }

        @media ${device_max.laptop}{
            width: 35%;
        }


        @media ${device_max.laptopL}{
            width: 20%;
            height: 300px;
            margin-left: 1%;
            margin-bottom: 1rem;
        }


        @media ${device_max.desktop}{
            width: 22%;
            height: 350px;
            margin-left: 2%;
        }

        @media ${device_max.desktopL}{
            width: 20%;
            height: 440px;
            margin-left: 1%;
            margin-right: 1%;
        }

        

`

export const CardHolder = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-evenly;
    margin: 0 auto;
    margin-left: 10%;
    margin-right: 10%;

        @media ${device_max.laptopL} {
            margin-left: 7%;
            margin-right: 0%;
            width: 80%;
        }

        @media ${device.desktopS}{
            width: 75%;
        }

        @media ${device.desktop}{
            width: 70%;
            margin-left: 14%;
        }

        @media ${device.desktopL}{
            width: 65%;
            margin-left: 16%;
        }

        @media ${device.desktopXL}{
            margin-left: 18%;
            width: 60%;
        }
        
`

const StyledImg = styled.img`
margin: 2rem 2rem;
`

const Home = () => {
    return (
        <div className='home'>
         

            
            <div>
                <StyledImg src={Dining} alt='Family Dining' />
                <CardHolder>
                    <RecipeCards/>
                </CardHolder>
            </div>
         
          
        </div>
    )
}

export default Home;
