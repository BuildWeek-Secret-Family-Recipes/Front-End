import AxiosWithAuth from '../utils/api';

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const ADD_INGREDIENTS_SUCCESS = 'ADD_INGREDIENTS_SUCCESS';
export const ADD_INGREDIENTS_FAILURE = 'ADD_INGREDIENTS_FAILURE';

export const ADD_INSTRUCTIONS_SUCCESS = 'ADD_INSTRUCTIONS_SUCCESS';
export const ADD_INSTRUCTIONS_FAILURE = 'ADD_INSTRUCTIONS_FAILURE';

const addRecipe = (recipe) => {
    return dispatch => {
        AxiosWithAuth().post('/auth/recipes', recipe)
        .then(res => {
            dispatch({ 
                type: ADD_RECIPE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: ADD_RECIPE_FAILURE,
                error: err.response.data.message
            })
        })
    }
}



export const actionCreators = {
    addRecipe
}