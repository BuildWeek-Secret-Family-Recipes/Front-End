import React, { useState, useEffect } from 'react';
import UserRecipeCard from './UserRecipeCard.js';
import { CardHolder } from '../pages/Home';
import { connect } from 'react-redux';
import { getUserRecipes } from '../../actions/recipes';
import AxiosWithAuth from '../../utils/api';


function UserRecipeCards(props){
    console.log(props.recipes, '<- UserRecipeCards Props')
    
    const [userRecipes, setUserRecipes] = useState([])

    // useEffect(() => {
    //     AxiosWithAuth().get(`/api/auth/recipes/user`)
    //     .then(res =>{
    //         console.log(res.data, '<-Server response')
    //         setUserRecipes(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    useEffect(() =>{
        props.getUserRecipes(props.recipes)
        setUserRecipes(props.recipes);
        // eslint-disable-next-line
    }, [])

    return(
        <CardHolder>
                {
                    userRecipes.map(userRecipe =>{
                        return(
                            <UserRecipeCard 
                                key={userRecipe.id}
                                name={userRecipe.name} 
                                type_of_meal={userRecipe.type_of_meal} 
                                original_author={userRecipe.original_author}/>
                        )
                    })
                }
        </CardHolder>
    )
}

const mapStateToProps = ({ recipeReducer }) => ({
    recipes: recipeReducer.recipes
})

export default connect(mapStateToProps, { getUserRecipes })(UserRecipeCards);