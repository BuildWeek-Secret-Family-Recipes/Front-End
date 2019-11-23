//Recipe Card
import React from 'react';
import { Card } from '../pages/Home';

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
      
      <i class="fa fa-clock-o"> 15 Mins</i>
      <i class="fa fa-users"> Serves 2</i>
      
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