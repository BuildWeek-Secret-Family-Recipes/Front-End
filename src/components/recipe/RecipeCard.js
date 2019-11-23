import React from 'react';

const RecipeCard = (props) => {
    return (
        <div className="card">
            <div className="header">
                <div className="icon">
                    <a href="#">
                        <i class="fa fa-heart-o"></i>
                    </a>
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
                <p class="info">Type of Meal: {props.type_of_meal}</p>
                <p class="author">Original Author: {props.original_author}</p>
        </div>

        <a href="#" class="btn">Let's Cook!</a>
        </div>
    )
}

export default RecipeCard;