import React from 'react';
import Dining from '../../assets/img/dining.png';
import styled from 'styled-components';
import Search from '../layout/Search';
import { device } from'../layout/Breakpoints';
import RecipeCard from '../recipe/RecipeCard';

const Body = styled.div`
background-color: #EDDFB0;`

const Card = styled.div`
height: 300px;
width: 250px;
background-color: #C4C4C4;
margin-bottom: 2rem;

@media ${device.mobileS} {
    width: 50%;
    margin-left: 5%;

}

@media ${device.tablet}{
    width: 45%;
}

@media ${device.laptop}{
    width: 35%;
}


@media ${device.laptopL}{
    width: 22%;
    height: 350px;
    margin-left: 0;
}


@media ${device.desktop}{
    width: 22%;
    height: 400px;
}

@media ${device.desktopL}{
    width: 20%;
    height: 440px;
    margin-left: 1%;
    margin-right: 1%;
}

`

const CardHolder = styled.section`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;
align-content: space-evenly;
margin: 0 auto;
margin-left: 10%;
margin-right: 10%;



@media ${device.laptopL} {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    

@media ${device.mobileS} {
    margin-left: 3%;
    margin-left: 3%;
}



`

const Searchbox = styled.div`
display: flex;
justify-content: flex-end;


`

   

const Home = () => {
    return (
        <Body>
            
            <Searchbox>
            <Search />
            </Searchbox>

            
            <div>
                <img src={Dining} alt='Family Dining' />
                <CardHolder>
                    {/* <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card> */}
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                </CardHolder>
            </div>
         
          
        </Body>
    )
}

export default Home
