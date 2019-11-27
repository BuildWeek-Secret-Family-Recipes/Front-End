import React, { useState, useEffect } from 'react';
import UserRecipeCard from './UserRecipeCard.js';
import { CardHolder } from '../pages/Home';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getUserRecipes } from '../../actions/recipes';

function UserRecipeCards(props){
    
    const [userRecipes, setUserRecipes] = useState([])
    const loading = props.loading;

    // async function asyncLoad() {
    //     await props.getUserRecipes()
    // }
    
    useEffect(() =>{
        setTimeout(() => {
            props.getUserRecipes()
        }, 2000)
        
        // asyncLoad();
        
        setUserRecipes(props.userRecipes);
        
        // eslint-disable-next-line
    }, [])

    if(loading) {
        return <div class="loader">Loading...</div>
    } else {
        return(
            <CardHolder>
                    {userRecipes &&
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
}

const mapStateToProps = ({ recipeReducer }) => ({
    userRecipes: recipeReducer.userRecipes,
    loading: recipeReducer.loading
})

export default connect(mapStateToProps, { getUserRecipes })(UserRecipeCards);