import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    return (
        <div className="card">
            <div className="header">
                <div className="icon">
                    <Link to='/'>
                        <i className="fa fa-heart-o"></i>
                    </Link>
                </div>
            </div>
            
            <div className="text">
                <h4 className="food">
                Name: {props.name}
                </h4>
        
                <i className="fa fa-clock-o">15 Mins</i>
                <i className="fa fa-users">Serves 2</i>
        
            {/* <div class="stars">
                    <li>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                </div> */}
                <p className="info">Type of Meal: {props.type_of_meal}</p>
                <p className="author">Original Author: {props.original_author}</p>
        </div>

        <Link to='/' className="btn">Let's Cook!</Link>
        </div>
    )
}

export default RecipeCard;