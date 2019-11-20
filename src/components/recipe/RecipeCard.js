// import React from 'react';

// export default function RecipeCard() {
//     return (
//         <div>
//             <h3>Recipe Card</h3>
//         </div>
//     )
// }

import React, { useState, useEffect} from 'react';
import axios from 'axios';
import RecipeCards from './RecipeCards.js';
import {Container, Row} from 'reactstrap';

export default function RecipeCard(){

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
        <Container>
            <Row>
                {
                    recipe.map(recipeInfo =>{
                        return(
                            <RecipeCards/>
                        )
                    })
                }
            </Row>
        </Container>
    )
}