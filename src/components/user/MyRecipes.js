import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCards from '../recipe/RecipeCards';


export default function MyRecipes() {
    return (
        <div>
            <Link to='/api/auth/user/recipes/addrecipe'>Add Recipe</Link>
            <Link to='/api/auth/user/recipes/editrecipe'>Edit Recipe</Link>

            <RecipeCards />
        </div>
    )
}

