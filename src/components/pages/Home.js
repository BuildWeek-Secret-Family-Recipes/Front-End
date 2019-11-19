import React from 'react';
import Dining from '../../assets/img/dining.png';
import styled from 'styled-components';
import Search from '../layout/Search';
import { device } from'../layout/Breakpoints';

const Header = styled.header`
font-size: 2.8rem;
font-color: #654F3B
text-shadow: 2px 2px #654F3B;

@media ${device.mobileS}{
    font-size: 2rem;
    text-shadow: 1px 1px #654F3B;
}

`
const Body = styled.div`
background-color: #EDDFB0;

`
const Card = styled.div`
height: 300px;
width: 250px;
background-color: #C4C4C4;
margin-bottom: 2rem;

@media ${device.mobileS} {
    width: 45%;

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
    margin-left: 10%;
    margin-right: 10%;
}

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

            <Header>Secret Family Cookbook</Header>
            
            <div>
                <img src={Dining} alt='Family Dining' />
                <p>Coming soon!</p>
                <CardHolder>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card>
                </CardHolder>
            </div>
         
          
        </Body>
    )
}

export default Home
