import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Recipe(){

    const [recipe, setRecipe] = useState([]);

    useEffect(() =>{
        axios.get(`https://secret-recipes.herokuapp.com/api/auth/recipes/`)
        .then(res =>{
            console.log(res.data)
        })
        .catch(error => {
            console.log("Recipes not Found", error);
        });
    }, [])
    
    return(
        <div></div>
    )
}