// import React from 'react';

// export default function RecipeCard() {
//     return (
//         <div>
//             <h3>Recipe Card</h3>
//         </div>
//     )
// }

import React, { useState, useEffect} from 'react';
// import axios from 'axios';
import RecipeCards from './RecipeCards.js';
import {Container, Row} from 'reactstrap';
import AxiosWithAuth from '../../utils/api';

export default function RecipeCard(){

    const [recipe, setRecipe] = useState([]);

    useEffect(() =>{
        AxiosWithAuth()
        .get(`/auth/recipes/`)
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