// import React from 'react';


// recipe = {
//     name: 'string',
//     type_of_meal: 'string',
//     original_author: 'string',
//     user_id: 4 //integer, will be the same number as the user's ID who is creating the recipe
// } 


import React from "react";
import styled from "styled-components"
import {device} from '../layout/Breakpoints.js';


export default function RecipeCard(props) {

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
    const Header = styled.h2`
    font-size: 25px;
    // text-shadow: 2px 2px BlueViolet;
    `


  return(
    <Card>
      <Header>Name{props.name}</Header>
        <p>Type of Meal: {props.type_of_meal}</p>
        <p>Original Author {props.original_author}</p>
    </Card>
  )
}
