//Recipe Cards
import React, { useState, useEffect } from 'react';
import UserRecipeCard from './UserRecipeCard.js';
import { CardHolder } from '../pages/Home';
import AxiosWithAuth from '../../utils/api';


function UserRecipeCards(){
    const [userRecipes, setUserRecipes] = useState([{
        name: '',
        type_of_meal: '',
        original_author: '',
        user_id: 0,
    }]);
    
    useEffect(() =>{
        setUserRecipes([])
        AxiosWithAuth().get(`/auth/recipes/user`)
            .then(res => {
                console.log(res.data, '<- Data in UserRecipeCards')
                setUserRecipes(res.data)
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }, [])
    
    return(
        <CardHolder>
                {
                    userRecipes.map(recipe =>{
                        return(
                            <UserRecipeCard 
                                key={recipe.user_id}
                                name={recipe.name} 
                                type_of_meal={recipe.type_of_meal} 
                                original_author={recipe.original_author}/>
                        )
                    })
                }
        </CardHolder>
    )
}

export default UserRecipeCards;