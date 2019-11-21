
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
    

    // export default Recipes
    
    import React, { useState, useEffect} from 'react';
    import axios from 'axios';
    // import RecipeCards from './RecipeCards.js';
    import {Container, Row} from 'reactstrap';
    
    export default function RecipeCard(){
    
        const [recipe, setRecipe] = useState([]);
    
        useEffect(() =>{
            axios.get(`https://secret-recipes.herokuapp.com/api/auth/recipes/`)
            .then((response) =>{
                console.log(response.data.results);
                setRecipe(response.data.results);
            })
            .catch(error => {
                console.log("recipes were not returned", error);
            });
        }, []);
    
        return(
            <Container>
                <Row>
                   {recipe.map(user =>(
                       <RecipeCard key={user.id} name={user.name} type={user.type_of_meal} author={user.original_author} />
                   ))}  
                </Row>
            </Container>
        );
    }
    

