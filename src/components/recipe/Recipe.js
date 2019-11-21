// import React, { Component, useState, useEffect} from 'react';
// import axios from 'axios';
// import RecipeCard from './RecipeCard.js';

// export default function Recipe(){

//     const [recipe, setRecipe] = useState([]);

//     useEffect(() =>{
//         axios.get(`https://secret-recipes.herokuapp.com/api/recipes/`)
//         .then(response =>{
//             setRecipe(response.data);
//         })
//         .catch(error => {
//             console.log("recipes were not returned", error);
//         });
//     }, [])
    
//     return(
//         <div></div>
//     )
// }


// Mock recipe data table
// class Recipes extends Component {
    //     state = {
    //         recipes: [
    //            {
    //                "id": 1,
    //                "name": "big chicken",
    //                "type_of_meal": "dinner",
    //                "original_author": "grandma"
    //            },
    //            {
    //                "id": 2,
    //                "name": "scrambled eggs",
    //                "type_of_meal": "breakfast",
    //                "original_author": "dad"
    //            },
    //            {
    //                "id": 3,
    //                "name": "flan",
    //                "type_of_meal": "lunch",
    //                "original_author": "hipster"
    //            }
    //         ]
    //     }
    //    render() {
    //        return (
    //            <div style={recipeStyle}>
    //                {this.state.recipes.map(recipe =>(
    //                    <RecipeCard key={recipe.id} user={recipe} />
    //                ))}
    //            </div>
    //        )
    //    }
    // }
    
    // const recipeStyle = {
    //    display: 'grid',
    //    gridTemplateColumns: 'repeat(3, 1fr)',
    //    gridGap: '1rem'
    
    // }
    
    // export default Recipes
    