import React, { useState, useEffect } from 'react';
import UserRecipeCard from './UserRecipeCard.js';
import { CardHolder } from '../pages/Home';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getUserRecipes } from '../../actions/recipes';

function UserRecipeCards(props){
    
    const [recipes, setUserRecipes] = useState([])
    const loading = props.loading;

    // async function asyncLoad() {
    //     await props.getUserRecipes()
    // }
    
    useEffect(() =>{
        setTimeout(() => {
            props.getUserRecipes()
        }, 500)
        
        // asyncLoad();
        
        setUserRecipes(props.userRecipes);
        
        // eslint-disable-next-line
    }, [])

    if(loading) {
        return <Spinner />
    } else {
        return(
            <CardHolder>
                    {recipes &&
                        recipes.map(recipe =>{
                            return(
                                <UserRecipeCard 
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
}

const mapStateToProps = ({ recipeReducer }) => ({
    userRecipes: recipeReducer.userRecipes,
    loading: recipeReducer.loading
})

export default connect(mapStateToProps, { getUserRecipes })(UserRecipeCards);