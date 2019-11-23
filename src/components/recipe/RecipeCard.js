import React from 'react';
import styled from 'styled-components';
import { device } from '../layout/Breakpoints';


//  const CardHolder = styled.section`
// display: flex;
// flex-wrap: wrap;
// flex-direction: row;
// justify-content: space-around;
// align-content: space-evenly;
// margin: 0 auto;
// margin-left: 10%;
// margin-right: 10%;
// height: 300px;



// @media ${device.laptopL} {
//     margin-left: 5%;
//     margin-right: 5%;
//     width: 90%;
    

// @media ${device.mobileS} {
//     margin-left: 3%;
//     margin-left: 3%;
// }



// `


// const Card = styled.div `

// @media ${device.mobileS} {
//     width: 50%;
//     margin-left: 5%;

// }

// @media ${device.tablet}{
//     width: 45%;
// }

// @media ${device.laptop}{
//     width: 35%;
// }


// @media ${device.laptopL}{
//     width: 22%;
//     height: 350px;
//     margin-left: 0;
// }


// @media ${device.desktop}{
//     width: 22%;
//     height: 400px;
// }

// @media ${device.desktopL}{
//     width: 20%;
//     height: 440px;
//     margin-left: 1%;
//     margin-right: 1%;
// }

// `





const RecipeCard = (props) => {
    return (
        // <Card>
        //     <h3>{props.name}</h3>
        //     <h5>Type: {props.type}</h5>
        //     <h5>Source: {props.author}</h5>
        // </Card>

       <div class="card">
   <div class="header">
      <div class="icon">
      <a href="#"><i class="fa fa-heart-o"></i></a>
      </div>
   </div>
   <div class="text">
      <h4 class="food">
         Name: {props.name};
      </h4>
      
      <i class="fa fa-clock-o">15 Mins</i>
      <i class="fa fa-users">Serves 2</i>
      
      {/* <div class="stars">
         <li>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star-o"></i></a>
         </li>
      </div> */}
      <p class="info">Type of Meal: {props.type}</p>
      <p class="author">Original Author: {props.author}</p>
   </div>
   <a href="#" class="btn">Let's Cook!</a>
</div>





    )
}

export default RecipeCard;