import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRecipe, deleteRecipe } from '../../actions/recipes';

function UserRecipeCard(props) {

    useEffect(() => {
        props.getUserRecipe(props.recipe)
    },
        // eslint-disable-next-line
     [])

    const handleDelete = (e) => {
        console.log('Handle Delete')
        e.preventDefault();
        props.deleteRecipe(props.recipe);
    }

  return(
      <div className="card">
            <div className="header">
                <div className="icon">
                    <Link to='/'>
                        <i className="fa fa-heart-o"></i>
                    </Link>    
                </div>
            </div>

            <div className="text">
                <Link to='/api/auth/recipes/:id'>Edit Recipe</Link>
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
        <Link to='/' className="btn">Let's Cook!</Link>
        </div>

        <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
  )
}

const mapStateToProps = ({ recipeReducer }) => ({
    recipe: recipeReducer.recipe
})

export default connect(mapStateToProps, { getUserRecipe, deleteRecipe })(UserRecipeCard);