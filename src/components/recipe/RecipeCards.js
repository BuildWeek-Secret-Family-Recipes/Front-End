import React, { useState, useEffect} from 'react';
import RecipeCard from './RecipeCard.js';
import {Container, Row} from 'reactstrap';
import AxiosWithAuth from '../../utils/api.js';

export default function RecipeCards(){

    const [recipe, setRecipe] = useState([]);

    useEffect(() =>{
        AxiosWithAuth()
        .get(`/auth/recipes/`)
        .then(response =>{
            console.log(response.data)
            setRecipe(response.data);
        })
        .catch(error => {
            console.log("recipes were not returned", error);
        });
    }, [])

    return(
        <Container>
            <Row>
                {
                    recipe.map(recipeInfo =>{
                        return(
                            <RecipeCard/>
                        )
                    })
                }
            </Row>
        </Container>
    )
}