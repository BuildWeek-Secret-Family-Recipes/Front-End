import React from 'react';
import RecipeCard from './RecipeForm';
import { Link } from 'react-router-dom';

export default function UserRecipes() {
    return (
        <div>
            <h1>User Recipes</h1>
            <Link to='/addrecipe'>Add Recipe</Link>
            <RecipeCard />
        </div>
    )
}
