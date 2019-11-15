import React from 'react';
import Dining from '../../assets/img/dining.png';
import styled from 'styled-components';
import Search from '../layout/Search';

    const Header = styled.header`
    font-size: 2.8rem;

    `
    const Body = styled.div`
    background-color: #EDDFB0;

    `
    const Card = styled.div`
    height: 300px;
    width: 250px;
    background-color: #C4C4C4;
    `

    const CardHolder = styled.section`
    height: 700px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    margin-left: 5rem;
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
            <img src={Dining} alt='Family Dining' />
            <p>Coming soon!</p>
            <CardHolder>
            <Card>Public Recipe Preview</Card>
            <Card>Public Recipe Preview</Card>
            <Card>Public Recipe Preview</Card>
            <Card>Public Recipe Preview</Card>
            <Card>Public Recipe Preview</Card>
            <Card>Public Recipe Preview</Card>
            {/* <Card>Public Recipe Preview</Card>
            <Card>Public Recipe Preview</Card> */}
            </CardHolder>
        </Body>
    )
}

export default Home
