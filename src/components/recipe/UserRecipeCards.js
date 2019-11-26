//Recipe Cards
import React, { useState, useEffect } from 'react';
import UserRecipeCard from './UserRecipeCard.js';
import { CardHolder } from '../pages/Home';
import { connect } from 'react-redux';
import { getUserRecipes, deleteRecipe } from '../../actions/recipes';


function UserRecipeCards(props){
    const [userRecipes, setUserRecipes] = useState([{}]);
    
    useEffect(() =>{
        props.getUserRecipes(props.recipe);
    }, [])

    const handleDelete = () => {
        console.log('Delete')
        props.deleteRecipe(props.recipe)
    }
    
    return(
        <CardHolder>
                {
                    userRecipes.map(userRecipe =>{
                        return(
                            <UserRecipeCard 
                                key={userRecipe.user_id}
                                name={userRecipe.name} 
                                type_of_meal={userRecipe.type_of_meal} 
                                original_author={userRecipe.original_author}
                                handleDelete={handleDelete} />
                        )
                    })
                }
        </CardHolder>
    )
}

const mapStateToProps = ({ recipeReducer }) => ({
    recipes: recipeReducer.recipes,
    recipe: recipeReducer.recipe
})

export default connect(mapStateToProps, { getUserRecipes, deleteRecipe })(UserRecipeCards);