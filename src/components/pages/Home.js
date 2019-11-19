import React from 'react';
import Dining from '../../assets/img/dining.png';
import styled from 'styled-components';
import Search from '../layout/Search';

    const Body = styled.div`
    background-color: #EDDFB0;
    max-width: 
    `
    const Card = styled.div`
    height: 300px;
    width: 250px;
    background-color: #C4C4C4;
    margin-bottom: 2rem;
    `
    
    const CardHolder = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-evenly;
    margin: 0 auto;
    margin-left: 20%;
    margin-right: 20%;
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
