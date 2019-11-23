import React from 'react';
import { Link } from 'react-router-dom';
import UserRecipeCards from '../recipe/UserRecipeCards';

function MyRecipes() {
    return (
        <div>
            <Link to='/api/auth/recipes'>Add Recipe</Link>

            <UserRecipeCards />
        </div>
    )
}

export default MyRecipes;