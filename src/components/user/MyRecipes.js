import React from 'react';
import { Link } from 'react-router-dom';
import UserRecipeCards from '../recipe/UserRecipeCards';

function MyRecipes() {
    return (
        <div>
            <div className='add-recipe'>
                <Link to='/api/auth/recipes'>Add Recipe</Link>
            </div>
            
            <UserRecipeCards />
        </div>
    )
}

export default MyRecipes;