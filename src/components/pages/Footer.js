import React from 'react'
import styled from 'styled-components';
import { device_max } from '../layout/Breakpoints';

const CreditContainer = styled.div`
width: 57%;
display: flex;
flex-direction: row;
align-content: center;
flex-flow: wrap;
margin: 0 auto;
margin-top: 1rem;
justify-content: space-evenly;
    @media ${device_max.laptopL} {
        width: 65%;
    }

    @media ${device_max.mobileS} {
        width: 50%;
    }
`

function Footer() {
    return (
        <CreditContainer>
            <p>Icons made by:</p>
                <a  href="https://www.flaticon.com/authors/smashicons" 
                    className="credit"
                    title="Smashicons"
                >
                Smashicons
                </a> 
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                Freepik
                </a> 
                <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">
                Alfredo Hernandez
                </a>  
                <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">
                Nhor Phai
                </a>
                <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">
                photo3idea_studio
                </a> 
                <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
                Good Ware
                </a>
                from
                <a href="https://www.flaticon.com/" title="Flaticon">
                Flaticon.com
                </a>
        </CreditContainer>   
    )
}

export default Footer
