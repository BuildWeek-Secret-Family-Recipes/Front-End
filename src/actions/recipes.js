import AxiosWithAuth from '../utils/api';

export const FETCH_RECIPE_REQUEST = 'FETCH_RECIPE_REQUEST'
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_FAILURE = 'FETCH_RECIPE_FAILURE';

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

export const ADD_INGREDIENTS_SUCCESS = 'ADD_INGREDIENTS_SUCCESS';
export const ADD_INGREDIENTS_FAILURE = 'ADD_INGREDIENTS_FAILURE';

export const ADD_INSTRUCTIONS_SUCCESS = 'ADD_INSTRUCTIONS_SUCCESS';
export const ADD_INSTRUCTIONS_FAILURE = 'ADD_INSTRUCTIONS_FAILURE';


export const getUserRecipe = () => dispatch => {
    console.log('dispatch?')
    dispatch({ type: FETCH_RECIPE_REQUEST })
        AxiosWithAuth().get(`/auth/recipes/user`)
            .then(res =>{
                dispatch({
                    type: FETCH_RECIPE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_RECIPE_FAILURE,
                    error: err.response.data.message
                })
            })
}

export const addRecipe = (recipe) => dispatch => {
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

export const deleteRecipe = (recipe) => dispatch => {
    console.log('delete dispatch')
    AxiosWithAuth().delete('/auth/recipes/:id', recipe)
        .then(res => {
            dispatch({ 
                type: DELETE_RECIPE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: DELETE_RECIPE_FAILURE,
                error: err.response.data.message
            })
        })
}



export const actionCreators = {
    getUserRecipe,
    addRecipe,
    deleteRecipe
}