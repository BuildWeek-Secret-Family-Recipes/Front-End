import React, { useState, useEffect} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard.js';

export default function Recipe(){

    const [recipe, setRecipe] = useState([]);

    useEffect(() =>{
        axios.get(`https://secret-recipes.herokuapp.com/api/recipes/`)
        .then(response =>{
            setRecipe(response.data);
        })
        .catch(error => {
            console.log("recipes were not returned", error);
        });
    }, [])
    
    return(
        <div></div>
    )
}