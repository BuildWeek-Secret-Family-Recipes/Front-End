import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCards from '../recipe/RecipeCards';


export default function MyRecipes() {
    return (
        <div>
            <Link to='/api/auth/recipes'>Add Recipe</Link>
            <Link to='/api/auth/recipes/:id'>Edit Recipe</Link>

            <RecipeCards />
        </div>
    )
}

