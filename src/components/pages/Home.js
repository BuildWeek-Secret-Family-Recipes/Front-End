import React from 'react';
import Dining from '../../assets/img/dining.png';
import Footer from './Footer'
import styled from 'styled-components';
import Search from '../layout/Search';

    const Header = styled.header`
    font-size: 2.8rem;
    font-color: #654F3B
    text-shadow: 2px 2px #654F3B;

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
    align-content: space-evenly;
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
                    {/* <Card>Public Recipe Preview</Card>
                    <Card>Public Recipe Preview</Card> */}
                </CardHolder>
            </div>

          <Footer />
        </Body>
    )
}

export default Home
