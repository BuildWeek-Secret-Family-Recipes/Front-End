//Recipe Cards
import React, { useState, useEffect} from 'react';
import RecipeCard from './RecipeCard.js';
import { CardHolder } from '../pages/Home';
import AxiosWithAuth from '../../utils/api.js';
export default function RecipeCards(){
    const [recipes, setRecipes] = useState([]);
    useEffect(() =>{
        AxiosWithAuth()
        .get(`/auth/recipes/`)
        .then(response =>{
            console.log(response.data)
            setRecipes(response.data);
        })
        .catch(error => {
            console.log("recipes were not returned", error);
        });
    }, [])
    return(
        <CardHolder>
                {
                    recipes.map(recipe =>{
                        return(
                            <RecipeCard 
                                key={recipe.id}
                                name={recipe.name} 
                                typeOfMeal={recipe.type_of_meal} 
                                author={recipe.original_author}/>
                        )
                    })
                }
        </CardHolder>
    )
}
