//Recipe Cards
import React, { useState, useEffect} from 'react';
import RecipeCard from './RecipeCard.js';
import { CardHolder } from '../pages/Home';
// import AxiosWithAuth from '../../utils/api.js';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { setLoading, getAllRecipes } from '../../actions/recipes';

function RecipeCards(props){

    const loading = props.isLoading;

    // const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        props.getAllRecipes()
    }, [])

    // useEffect(() =>{
    //     AxiosWithAuth()
    //     .get(`/api/auth/recipes/`)
    //     .then(response =>{
    //         console.log(response.data)
    //         setRecipes(response.data);
    //     })
    //     .catch(error => {
    //         console.log("recipes were not returned", error);
    //     });
    // }, [])
    
    return(
            <CardHolder>
                    {props.allRecipes &&
                        props.allRecipes.map(recipe =>{
                            return(
                                <RecipeCard 
                                    key={recipe.id}
                                    name={recipe.name} 
                                    type_of_meal={recipe.type_of_meal} 
                                    original_author={recipe.original_author}/>
                            )
                        })
                    }
            </CardHolder>
        )
    }

const mapStateToProps = ({ recipeReducer }) => ({
    loading: recipeReducer.loading,
    allRecipes: recipeReducer.allRecipes
})

export default connect(mapStateToProps, { setLoading, getAllRecipes })(RecipeCards);